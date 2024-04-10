import { Folders, House, MagnifyingGlass, SmileySad, TextIndent, TextOutdent, UserList, UsersThree } from "@phosphor-icons/react";

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

export function CloseMenu({ fill, color, size, className }: IconProps) {
    return <TextOutdent fill={fill} color={color} size={size} className={className}/>
}

export function OpenMenu({ fill, color, size, className }: IconProps) {
    return <TextIndent fill={fill} color={color} size={size} className={className}/>
}

export function HomeIcon({ fill, color, size, className }: IconProps) {
    return <House fill={fill} color={color} size={size} className={className}/>
}

export function RepositoriesIcon({ fill, color, size, className }: IconProps) {
    return <Folders fill={fill} color={color} size={size} className={className}/>
}

export function FollowersIcon({ fill, color, size, className }: IconProps) {
    return <UsersThree fill={fill} color={color} size={size} className={className}/>
}

export function StalkedIcon({ fill, color, size, className }: IconProps) {
    return <UserList fill={fill} color={color} size={size} className={className}/>
}