import { UserProvider } from "@/contexts/user"
import { FiltersProvider } from "./filters"

export type ProvidersProps = {
    children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
    return (
        <FiltersProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </FiltersProvider>
    )
}