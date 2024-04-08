import { MagnifyingGlass, SmileySad } from "@phosphor-icons/react";

type IconProps = {
    fill?: string
    color?: string
    size?: number
    className?: string
}

export function SearchIcon({ fill, color, size, className }: IconProps) {
    return <MagnifyingGlass fill={fill} color={color} size={size} className={className} />
}

export function NotFound({ fill, color, size, className }: IconProps) {
    return <SmileySad fill={fill} color={color} size={size} className={className}/>
}