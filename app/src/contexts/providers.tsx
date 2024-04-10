import { UserProvider } from "@/contexts/user"

export type ProvidersProps = {
    children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}