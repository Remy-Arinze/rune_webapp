'use client' // Required for client-side hooks

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Auth() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to /auth/login when this component mounts
    router.push('/auth/login')
  }, [router])

  return null // Render nothing since we're redirecting
}