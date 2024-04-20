import {
    Article,
    At,
    BracketsCurly,
    CalendarCheck,
    CalendarPlus,
    CircleNotch,
    EnvelopeSimple,
    Fingerprint,
    FolderSimpleDashed,
    Folders,
    GithubLogo,
    House,
    InstagramLogo,
    Link,
    LinkedinLogo,
    ListMagnifyingGlass,
    MagnifyingGlass,
    MapPin,
    SmileySad,
    TextIndent,
    TextOutdent,
    Trash,
    TwitterLogo,
    UserCircleDashed,
    UserList,
    UsersThree,
    XCircle
} from "@phosphor-icons/react";

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

export function MapIcon({ fill, color, size, className }: IconProps) {
    return <MapPin fill={fill} color={color} size={size} className={className}/>
}

export function CreatedAtIcon({ fill, color, size, className }: IconProps) {
    return <CalendarPlus fill={fill} color={color} size={size} className={className}/>
}

export function UpdatedAtIcon({ fill, color, size, className }: IconProps) {
    return <CalendarCheck fill={fill} color={color} size={size} className={className}/>
}

export function StackIcon({ fill, color, size, className }: IconProps) {
    return <BracketsCurly fill={fill} color={color} size={size} className={className}/>
}

export function SocialMidiaIcon({ fill, color, size, className }: IconProps) {
    return <At fill={fill} color={color} size={size} className={className}/>
}

export function GithubIcon({ fill, color, size, className }: IconProps) {
    return <GithubLogo fill={fill} color={color} size={size} className={className}/>
}

export function TwitterIcon({ fill, color, size, className }: IconProps) {
    return <TwitterLogo fill={fill} color={color} size={size} className={className}/>
}

export function EmailIcon({ fill, color, size, className }: IconProps) {
    return <EnvelopeSimple fill={fill} color={color} size={size} className={className}/>
}

export function BioIcon({ fill, color, size, className }: IconProps) {
    return <Fingerprint fill={fill} color={color} size={size} className={className}/>
}

export function InstagramIcon({ fill, color, size, className }: IconProps) {
    return <InstagramLogo fill={fill} color={color} size={size} className={className}/>
}

export function LinkedinIcon({ fill, color, size, className }: IconProps) {
    return <LinkedinLogo fill={fill} color={color} size={size} className={className}/>
}

export function LoadingIcon({ fill, color, size, className }: IconProps) {
    return <CircleNotch fill={fill} color={color} size={size} className={className}/>
}

export function RepositoriesNotFoundIcon({ fill, color, size, className }: IconProps) {
    return <FolderSimpleDashed fill={fill} color={color} size={size} className={className}/>
}

export function FollowersNotFoundIcon({ fill, color, size, className }: IconProps) {
    return <UserCircleDashed fill={fill} color={color} size={size} className={className}/>
}

export function StalkingNotFoundIcon({ fill, color, size, className }: IconProps) {
    return <ListMagnifyingGlass fill={fill} color={color} size={size} className={className}/>
}

export function ClosePopUpIcon({ fill, color, size, className }: IconProps) {
    return <XCircle fill={fill} color={color} size={size} className={className}/>
}

export function LinkIcon({ fill, color, size, className }: IconProps) {
    return <Link fill={fill} color={color} size={size} className={className}/>
}

export function DescriptionIcon({ fill, color, size, className }: IconProps) {
    return <Article fill={fill} color={color} size={size} className={className}/>
}

export function RemoveIcon({ fill, color, size, className }: IconProps) {
    return <Trash fill={fill} color={color} size={size} className={className}/>
}