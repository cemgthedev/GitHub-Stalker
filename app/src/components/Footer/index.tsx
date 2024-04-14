import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { VariantProps, tv } from "tailwind-variants";


const FooterVariants = tv({
    slots: {
        footerStyle: 'bg-slate-50 w-full h-fit flex flex-col p-4 gap-4 justify-center items-center',
        rowStyle: 'w-full h-fit flex gap-4',
        columnStyle: 'w-full h-fit flex flex-col gap-4'
    },
    variants: {
        style: {
            'primary': {
                footerStyle: 'bg-cyan-500 text-slate-50'
            },
            'secondary': {
                footerStyle: 'bg-violet-500 text-slate-50'
            },
            'dark': {
                footerStyle: 'bg-zinc-950 text-slate-50'
            }
        }
    }
})

type FooterProps = ComponentProps<'footer'> & VariantProps<typeof FooterVariants>

function Footer({children, style, className, ...props }: FooterProps) {
    const {
        footerStyle
    } = FooterVariants({ style })
    
    return (
        <footer
            className={twMerge(footerStyle(), className)}
            {...props}
        >
            {children}
        </footer>
    )
}

type FooterRowProps = ComponentProps<'div'> & VariantProps<typeof FooterVariants>

Footer.Row = function FooterRow({children, className, ...props }: FooterRowProps) {
    const { rowStyle } = FooterVariants();

    return (
        <div
            className={twMerge(rowStyle(), className)}
            {...props}
        >
            {children}
        </div>
    )
}

type FooterColumnProps = ComponentProps<'div'> & VariantProps<typeof FooterVariants>

Footer.Column = function FooterColumn({children, className, ...props }: FooterColumnProps) {
    const { columnStyle } = FooterVariants();

    return (
        <div
            className={twMerge(columnStyle(), className)}
            {...props}
        >
            {children}
        </div>
    )
}

export { Footer };
