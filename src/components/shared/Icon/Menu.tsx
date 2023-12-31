import React from 'react';
import { IIconProps } from './types';

export const MenuIcon = ( props: IIconProps ): React.ReactElement => {
    return(
    <svg
        width = {24}
        height = {24}
        viewBox = "0 0 24 24"
        fill="none"
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        className="prefix__feather prefix__feather-menu"
        {...props}
    >
        <title>Menu</title>
        <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
    )
}

export default MenuIcon;