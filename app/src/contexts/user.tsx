"use client"
import { getUser } from "@/services/users";
import { UserProps } from "@/types/models";
import { createContext, useContext, useState } from "react";

export type UserContextProps = {
    user: UserProps | null
    setUser(user: UserProps | null): void
    loading: boolean
    setLoading(loading: boolean): void
    searchUser(username: string): Promise<void>
}

export const UserContext = createContext({} as UserContextProps);

export type UserProviderProps = {
    children: React.ReactNode
}

export function UserProvider({children}: UserProviderProps) {
    const [user, setUser] = useState<UserProps | null>(null);
    const [loading, setLoading] = useState(false);

    async function searchUser(username: string) {
        setLoading(true);
        const response = await getUser(username);
        if(response) {
            setUser(response);
        }
        setLoading(false);
    }

    return (
        <UserContext.Provider value={{user, setUser, loading, setLoading, searchUser}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const userContext = useContext(UserContext);

    return userContext;
}