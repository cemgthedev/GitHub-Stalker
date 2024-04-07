import { UserProvider } from "@/contexts/user";
import { AppRoutes } from "./app.routes";

export function AuthRoutes() {
    return (
        <UserProvider>
            <AppRoutes />
        </UserProvider>
    )
}