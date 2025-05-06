import Link from 'next/link'

type TNavLink = {
    children: any;
    to: any;
    tag: any;
    activeStyle?: any;
    style?: any;
    onMouseEnter?: any;
    onMouseOut?: any;
}


const NavLink = ({ children, to, tag, activeStyle, style, ...rest }: TNavLink) => {
    return (
        <Link href={to} passHref legacyBehavior {...rest} >
            {children}
        </Link>
    )
}

export default NavLink