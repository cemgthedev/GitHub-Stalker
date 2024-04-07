import Home from "@/app/home/page";
import SearchPage from "@/app/page";
import { useUserContext } from "@/contexts/user";

export function AppRoutes() {
    const { user, loading } = useUserContext();

    if(loading) {
        return <h1>Carregando...</h1>
    }

    return (
        !!user ? <Home /> : <SearchPage /> 
    )
}