import React, { useState } from 'react';

interface AuthContextProps {
    isLoggedIn: boolean;
    login: (user: string) => void;
    logout: () => void;
}

const AuthContext = React.createContext<AuthContextProps>(null!);

export function useAuth() {
    return React.useContext(AuthContext);
}

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
        () => localStorage.getItem('auth') !== null
    );

    const login = (user: string) => {
        localStorage.setItem('auth', user);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('auth');
        setIsLoggedIn(false);
    };

    const value: AuthContextProps = {
        isLoggedIn,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}