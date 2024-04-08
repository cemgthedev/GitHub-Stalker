import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { VariantProps, tv } from "tailwind-variants";

const NavbarVariants = tv({
    slots: {
        navbarStyle: 'bg-slate-50 w-full h-fit flex justify-between items-center p-4 gap-2',
        navbarMenuStyle: 'flex',
        navbarMenuItemStyle: 'cursor-pointer duration-150 ease-linear',
        navbarResponsiveMenuStyle: 'flex gap-2 justify-center items-center',
        navbarResponsiveMenuItemStyle: 'ml-auto w-fit h-fit cursor-pointer md:hidden'
    },
    variants: {
        style: {
            'primary': {
                navbarStyle: 'bg-cyan-500 text-slate-50',
                navbarMenuItemStyle: 'hover:text-slate-50 hover:bg-cyan-400'
            },
            'secondary': {
                navbarStyle: 'bg-violet-500 text-slate-50',
                navbarMenuItemStyle: 'hover:text-slate-50 hover:bg-violet-400'
            },
            'dark': {
                navbarStyle: 'bg-zinc-950 text-slate-50',
                navbarMenuItemStyle: 'hover:text-slate-50 hover:bg-zinc-700'
            }
        },
        reponsive: {
            true: {
                navbarMenuStyle: 'max-md:hidden'
            }
        }
    }
})

type NavbarProps = ComponentProps<'nav'> & VariantProps<typeof NavbarVariants>

function Navbar({ children, style, className, ...props }: NavbarProps) {
    const {
        navbarStyle
    } = NavbarVariants({ style })
    
    return (
        <nav
            className={twMerge(navbarStyle(), className)}
            {...props}
        >
            {children}
        </nav>
    );
}

type NavbarMenuProps = ComponentProps<'ul'> & VariantProps<typeof NavbarVariants>

Navbar.Menu = function NavbarMenu({children, reponsive, className, ...props }: NavbarMenuProps) {
    const { navbarMenuStyle } = NavbarVariants({ reponsive })
    
    return (
        <ul
            className={twMerge(navbarMenuStyle(), className)}
            {...props}
        >
            {children}
        </ul>
    );
}

type NavbarMenuItemProps = ComponentProps<'li'> & VariantProps<typeof NavbarVariants>

Navbar.MenuItem = function NavbarMenu({children, style, className, ...props }: NavbarMenuItemProps) {
    const { navbarMenuItemStyle } = NavbarVariants({ style })
    
    return (
        <li
            className={twMerge(navbarMenuItemStyle(), className)}
            {...props}
        >
            {children}
        </li>
    );
}

type NavbarResponsiveMenuProps = ComponentProps<'div'> & VariantProps<typeof NavbarVariants>

Navbar.ResponsiveMenu = function NavbarResponsiveMenu({children, className, ...props }: NavbarResponsiveMenuProps) {
    const { navbarResponsiveMenuStyle } = NavbarVariants()
    
    return (
        <div
            className={twMerge(navbarResponsiveMenuStyle(), className)}
            {...props}
        >
            {children}
        </div>
    );
}

type NavbarResponsiveMenuItemProps = ComponentProps<'div'> & VariantProps<typeof NavbarVariants>

Navbar.ResponsiveMenuItem = function NavbarResponsiveMenuItem({children, reponsive, className, ...props }: NavbarResponsiveMenuItemProps) {
    const { navbarResponsiveMenuItemStyle } = NavbarVariants({ reponsive })
    
    return (
        <div
            className={twMerge(navbarResponsiveMenuItemStyle(), className)}
            {...props}
        >
            {children}
        </div>
    );
}

export { Navbar };
