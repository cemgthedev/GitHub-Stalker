"use client"
import { useUserContext } from "@/contexts/user";
import { DefaultFooter } from "@/ui/DefaultFooter";
import { DefaultNavbar } from "@/ui/DefaultNavbar";
import { twMerge } from "tailwind-merge";

export type ContentProps = {
    children: React.ReactNode,
    className: string
}

export default function Content({ children, className }: ContentProps) {
    const { user, loading, darkTheme } = useUserContext();

    return(
        <body className={twMerge(className, "max-h-screen overscroll-y-auto scrollbar-hide dark:bg-zinc-950", darkTheme && 'dark')}>
            {
                !!user && !loading && <DefaultNavbar />
            }
            {children}
            {
                !!user && !loading && <DefaultFooter />
            }
        </body>
    )
}