import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../../context/auth.tsx';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}