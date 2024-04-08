"use client"
import Home from "@/app/home/page";
import Search from "@/app/search/page";
import { useUserContext } from "@/contexts/user";
import { Loading } from "@/ui/Loading";

export function AppRoutes() {
    const { user, loading } = useUserContext();

    if(loading) {
        return <Loading />
    }

    return (
        !!user ? <Home /> : <Search /> 
    )
}