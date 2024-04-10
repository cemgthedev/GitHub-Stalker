"use client"
import { useUserContext } from "@/contexts/user";
import { DefaultNavbar } from "@/ui/DefaultNavbar";

export type ContentProps = {
    children: React.ReactNode
}

export default function Content({ children }: ContentProps) {
    const { user, loading } = useUserContext();

    return(
        <>
            {
                !!user && !loading && <DefaultNavbar />
            }
            {children}
        </>
    )
}