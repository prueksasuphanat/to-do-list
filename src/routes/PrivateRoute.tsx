import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: React.ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  // TODO: Replace with actual authentication check
  const isAuthenticated = true // Get from AuthContext/Store

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
