import { MagnifyingGlass } from "@phosphor-icons/react";

type IconProps = {
    fill?: string
    color?: string
    size?: number
}

export function SearchIcon({ fill, color, size }: IconProps) {
    return <MagnifyingGlass fill={fill} color={color} size={size} />
}