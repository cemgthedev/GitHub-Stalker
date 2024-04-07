import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const TextVariants = tv({
    base: 'font-normal',
    variants: {
        size: {
            'xl': 'text-2xl',
            'lg': 'text-xl',
            'md': 'text-lg',
            'sm': 'text-md',
            'xs': 'text-sm'
        }
    }
})

type TextProps = ComponentProps<'p'> & VariantProps<typeof TextVariants>

export function Text({ children, size='md', className, ...props }:TextProps) {
    return (
        <p
            className={TextVariants({ size, className })}
            {...props}
        >
            {children}
        </p>
    )
}