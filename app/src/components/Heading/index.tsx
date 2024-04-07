import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const HeadingVariant = tv({
    base: 'font-bold',
    variants: {
        size: {
            'xl': 'text-6xl',
            'lg': 'text-5xl',
            'md': 'text-4xl',
            'sm': 'text-3xl',
            'xs': 'text-2xl'
        }
    }
})

type HeadingProps = ComponentProps<'p'> & VariantProps<typeof HeadingVariant>

export function Heading({ children, size='md', className, ...props }:HeadingProps) {
    return (
        <p
            className={HeadingVariant({ size, className })}
            {...props}
        >
            {children}
        </p>
    )
}