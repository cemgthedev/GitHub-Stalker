"use client"
import { RepositoriesProps } from "@/types/models"
import { ReactNode, createContext, useContext, useState } from "react"

export type FiltersContextProps = {
    queryRepositories: RepositoriesProps
    setQueryRepositories(queryRepositories: RepositoriesProps): void
    loading: boolean
    setLoading(loading: boolean): void
}

export const FiltersContext = createContext({} as FiltersContextProps)

export type FiltersProviderProps = {
    children: ReactNode
}

export function FiltersProvider({ children }: FiltersProviderProps) {
    const [queryRepositories, setQueryRepositories] = useState<RepositoriesProps>([]);
    const [loading, setLoading] = useState<boolean>(false);
    
    return (
        <FiltersContext.Provider value={{queryRepositories, setQueryRepositories, loading, setLoading}}>
            {children}
        </FiltersContext.Provider>
    );
}

export function useFiltersContext() {
    const userContext = useContext(FiltersContext);

    return userContext;
}