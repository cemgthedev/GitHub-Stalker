import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const InputVariants = tv({
    base: 'w-full p-2 border-2 border-zinc-950 rounded-[4px] min-h-[44px] outline-none duration-150 ease-linear',
    variants: {
        style: {
            'primary': 'hover:border-cyan-500 focus:border-cyan-400',
            'secondary': 'hover:border-violet-500 focus:border-violet-400'
        }
    }
})

type InputProps = ComponentProps<'input'> & VariantProps<typeof InputVariants>

export function Input({ placeholder, style='primary', className, ...props }:InputProps) {
    return (
        <input
            placeholder={placeholder}
            className={InputVariants({ style, className })}
            {...props}
        />
    )
}