import { Navigate } from 'react-router-dom'

interface PublicRouteProps {
  children: React.ReactNode
}

export function PublicRoute({ children }: PublicRouteProps) {
  // TODO: Replace with actual authentication check
  const isAuthenticated = false // Get from AuthContext/Store

  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return <>{children}</>
}
