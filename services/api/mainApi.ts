// services/api/mainApi.ts
import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();
const baseUrl = 'https://rune-latest.onrender.com';

// Create a base query with auth headers
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    // Get token from storage (use your preferred storage solution)
    const token = localStorage.getItem('accessToken');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// Create a base query with reauth logic
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // Wait for any pending mutex lock
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  // If 401 error, try to refresh token
  if (result.error && result.error.status === 401) {
    // Check if mutex is locked to prevent multiple refresh attempts
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      
      try {
        // Attempt to refresh token
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const refreshResult = await baseQuery(
            {
              url: '/auth/refresh',
              method: 'POST',
              body: { refresh_token: refreshToken },
            },
            api,
            extraOptions
          );

          if (refreshResult.data) {
            // Store the new tokens
            const responseData = refreshResult.data as {
              access_token: string;
              refresh_token: string;
            };
            localStorage.setItem('accessToken', responseData.access_token);
            localStorage.setItem('refreshToken', responseData.refresh_token);
            
            // Retry the original request with new token
            result = await baseQuery(args, api, extraOptions);
          } else {
            // Refresh failed - clear tokens and potentially redirect to login
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            // You might want to dispatch a logout action here
          }
        }
      } finally {
        // Release the mutex
        release();
      }
    } else {
      // Wait for the mutex to unlock and retry
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: [], // Add your tag types here if using caching
  endpoints: () => ({}), // Endpoints will be injected
});

// Export hooks for injected endpoints
export const { injectEndpoints } = mainApi;