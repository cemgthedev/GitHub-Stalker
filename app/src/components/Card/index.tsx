import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { VariantProps, tv } from "tailwind-variants";


const CardVariants = tv({
    slots: {
        cardStyle: 'bg-slate-50 w-fit h-fit rounded-[4px] flex p-4 gap-4 overflow-hidden',
        cardHeaderStyle: 'w-fit h-fit',
        cardBodyStyle: 'flex flex-col gap-1',
    },
    variants: {
        variant: {
            'vertical': {
                cardStyle: 'flex-col',
            },
            'horizontal': {
                cardStyle: 'flex-row',
            }
        }
    }
})

type CardProps = ComponentProps<'figure'> & VariantProps<typeof CardVariants>

function Card({children, variant='vertical', className, ...props }: CardProps) {
    const {
        cardStyle
    } = CardVariants({variant})

    return (
        <figure
            className={twMerge(cardStyle(), className)}
            {...props}
        >
            {children}
        </figure>
    )
}

type CardHeaderProps = ComponentProps<'div'> & VariantProps<typeof CardVariants>

Card.Header = function CardHeader({children, className, ...props }: CardHeaderProps) {
    const { cardHeaderStyle } = CardVariants()

    return (
        <div
            className={twMerge(cardHeaderStyle(), className)}
            {...props}
        >
            {children}
        </div>
    )
}

type CardBodyProps = ComponentProps<'figcaption'> & VariantProps<typeof CardVariants>

Card.Body = function CardBody({children, className, ...props }: CardBodyProps) {
    const { cardBodyStyle } = CardVariants()

    return (
        <figcaption
            className={twMerge(cardBodyStyle(), className)}
            {...props}
        >
            {children}
        </figcaption>
    )
}

export { Card };
