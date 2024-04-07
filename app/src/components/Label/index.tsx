import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const LabelVariants = tv({
    base: 'font-semibold',
    variants: {
        size: {
            'xl': 'text-4xl',
            'lg': 'text-3xl',
            'md': 'text-2xl',
            'sm': 'text-xl',
            'xs': 'text-lg'
        }
    }
})

type LabelProps = ComponentProps<'p'> & VariantProps<typeof LabelVariants>

export function Label({ children, size='md', className, ...props }:LabelProps) {
    return (
        <p
            className={LabelVariants({ size, className })}
            {...props}
        >
            {children}
        </p>
    )
}