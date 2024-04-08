"use client"
import { getUser } from "@/services/users";
import { UserProps } from "@/types/models";
import { createContext, useContext, useState } from "react";

export type UserContextProps = {
    user: UserProps | null
    setUser(user: UserProps | null): void
    loading: boolean
    setLoading(loading: boolean): void
    searchUser(username: string): void
    userNotFound: boolean
    setUserNotFound(userNotFound: boolean): void
}

export const UserContext = createContext({} as UserContextProps);

export type UserProviderProps = {
    children: React.ReactNode
}

export function UserProvider({children}: UserProviderProps) {
    const [user, setUser] = useState<UserProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [userNotFound, setUserNotFound] = useState<boolean>(false);

    async function searchUser(username: string) {
        setLoading(true);
        const response = await getUser(username);
        if(response) {
            setUser(response);
        } else {
            setUserNotFound(true);
            setTimeout(() => setUserNotFound(false), 3000);
        }
        setLoading(false);
    }

    return (
        <UserContext.Provider value={{user, setUser, loading, setLoading, searchUser, userNotFound, setUserNotFound}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const userContext = useContext(UserContext);

    return userContext;
}