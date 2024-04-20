"use client"
import { getFollowers } from "@/services/followers";
import { getRepositories } from "@/services/repositories";
import { getUser } from "@/services/users";
import { FollowerProps, FollowersProps, RepositoriesProps, UserProps } from "@/types/models";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export type UserContextProps = {
    user: UserProps | null
    setUser(user: UserProps | null): void
    loading: boolean
    setLoading(loading: boolean): void
    searchUser(username: string): void
    userNotFound: boolean
    setUserNotFound(userNotFound: boolean): void
    repositories: RepositoriesProps
    setRepositories(repositories: RepositoriesProps): void
    followers: FollowersProps
    setFollowers(followers: FollowersProps): void
    stalking: FollowersProps
    setStalking(stalking: FollowersProps): void
    updateStalkingLocalStorage(stalking: FollowersProps): void,
    darkTheme: boolean,
    setDarkTheme(darkTheme: boolean): void
}

export const UserContext = createContext({} as UserContextProps);

export type UserProviderProps = {
    children: React.ReactNode
}

export function UserProvider({children}: UserProviderProps) {
    const [user, setUser] = useState<UserProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [userNotFound, setUserNotFound] = useState<boolean>(false);
    const [repositories, setRepositories] = useState<RepositoriesProps>([]);
    const [followers, setFollowers] = useState<FollowersProps>([]);
    const [stalking, setStalking] = useState<FollowersProps>([]);
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        router.push("/");
    }, [user])

    function addStalkedOnLocalStorage(stalked: FollowerProps) {
        const stalkingLocalStorageJSON = localStorage.getItem("stalking");

        let stalkingLocalStorage:FollowersProps = []

        if(!stalkingLocalStorageJSON) {
            stalkingLocalStorage = [stalked]
            const initialStalkingLocalStorageJSON = JSON.stringify(stalkingLocalStorage)
            localStorage.setItem("stalking", initialStalkingLocalStorageJSON)
        } else {
            stalkingLocalStorage = JSON.parse(stalkingLocalStorageJSON)
            const isOnStalkingList = stalkingLocalStorage.some(item => item.login === stalked.login)
            if(!isOnStalkingList) {
                stalkingLocalStorage.push(stalked)
                const newStalkingLocalStorageJSON = JSON.stringify(stalkingLocalStorage)
                localStorage.setItem("stalking", newStalkingLocalStorageJSON)
            }
        }

        setStalking(stalkingLocalStorage)
    }

    function updateStalkingLocalStorage(stalking: FollowersProps) {
        localStorage.setItem("stalking", JSON.stringify(stalking))
    }

    async function searchUser(username: string) {
        setLoading(true);
        const responseUser = await getUser(username);
        if(responseUser) {
            
            setUser(responseUser);

            const {login, avatar_url, html_url}:FollowerProps = responseUser;
            addStalkedOnLocalStorage({login, avatar_url, html_url});

            const [ responseRepositories, responseFollowers ] = await Promise.all([getRepositories(username), getFollowers(username)]);
            setRepositories(responseRepositories);
            setFollowers(responseFollowers);
        } else {
            setUserNotFound(true);
            setTimeout(() => setUserNotFound(false), 3000);
        }
        setLoading(false);
    }

    return (
        <UserContext.Provider 
            value={{
                user, 
                setUser, 
                loading, 
                setLoading, 
                searchUser, 
                userNotFound, 
                setUserNotFound,
                repositories,
                setRepositories,
                followers,
                setFollowers,
                stalking,
                setStalking,
                updateStalkingLocalStorage,
                darkTheme,
                setDarkTheme
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const userContext = useContext(UserContext);

    return userContext;
}