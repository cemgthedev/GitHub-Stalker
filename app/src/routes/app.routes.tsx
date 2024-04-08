"use client"
import Home from "@/app/home/page";
import Search from "@/app/search/page";
import { useUserContext } from "@/contexts/user";

export function AppRoutes() {
    const { user, loading } = useUserContext();

    if(loading) {
        return <h1>Carregando...</h1>
    }

    return (
        !!user ? <Home /> : <Search /> 
    )
}