import React from 'react';

interface MoonIconProps {
    width?: number;
    height?: number;
    isSelected?: boolean;
}

function MoonIcon(props: MoonIconProps): JSX.Element {
    const { width = 28, height = 24, isSelected } = props;

    const enabledColour = '#fff000';
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="moon"
            width={width}
            height={height}
            className="svg-inline--fa fa-moon fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill={isSelected ? enabledColour : 'currentColor'}
                d="M405.8 373.8c-1.4 0-2.8.3-4.3.9-23.2 10.5-47.3 15.4-70.8 15.4-75.9 0-146.6-50.8-166-129.3-14.6-59.2 4-121.4 48.7-163.3 6.7-6.3 2.1-17.5-7-17.5h-.6c-13.3.8-26.6 2.7-39.5 5.8C49.4 114.1-22.3 231 6.3 347c24.3 98.7 113.4 165 211.6 165 17.1 0 34.5-2 51.8-6.2C335 490 387.4 446.1 415 388.3c3.4-7.1-2.3-14.5-9.2-14.5zm-147.4 85.3c-13.3 3.2-27 4.9-40.5 4.9-78.5 0-146.4-52.8-165-128.5-10.7-43.3-3.8-88.2 19.4-126.4 12.7-20.9 29.4-38.4 49.1-51.8-11.3 36.8-12.8 76.5-3.3 115 22.4 91 99.8 156.3 192.1 164.8-15.7 10.1-33.1 17.5-51.8 22zm200.3-277.8L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208l-53.3-26.7zM304 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32z"
            ></path>
        </svg>
    );
}

export default MoonIcon;
