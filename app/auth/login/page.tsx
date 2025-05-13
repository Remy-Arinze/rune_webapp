import GameButton from '@/app/components/custom_button';
import Input from '@/app/components/custom_input';
import React from 'react';
import Image from 'next/image';
import { FaGoogle, FaChessKnight } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="h-[80dvh] overflow-y-scroll no-scrollbar bg-[var(--dark)] flex flex-col items-center justify-center pt-10 mr-10">
      <div className="w-full max-w-md rounded-lg shadow-md p-8">
        {/* Logo */}
       <div className="flex items-center justify-center mb-10">
             <Image src="/assets/logo.png" alt="logo" width={120} height={60} />
           </div>

        {/* Login Form */}
        <div className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Username, Phone, or Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-[12px] text-gray-500">
                Remember me
              </label>
            </div>
            <a href="#" className="text-[12px] text-[var(--primary)] hover:underline">
              Forgot password?
            </a>
          </div>
          <GameButton 
                className='w-full' 
              >
                <p className='text-[var(--background)]'>Log In</p>
              </GameButton>
        </div>

        {/* Social Login */}
      <div className="space-y-5 mt-10">
                   <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition duration-200">
                     <FaGoogle className="text-red-500" />
                     Continue with Google
                   </button>
                   <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition duration-200">
                     <FaChessKnight className="text-green-700" />
                     Continue with Chess.com
                   </button>
                 </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account? <a href="/auth/signup" className="text-[var(--primary)] hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;