interface GoogleIconProps {
    variant: 'black' | 'white' | 'colored' | 'dark';
    size?: number;
}

function GoogleIcon(props: GoogleIconProps): JSX.Element {
    const { variant, size = 16 } = props;
    switch (variant) {
        case 'black':
            return (
                <svg
                    className="google-icon"
                    fill="#000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width={size}
                    height={size}
                >
                    <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z" />
                </svg>
            );
        case 'dark':
            return (
                <svg
                    className="google-icon"
                    fill="#566073"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width={size}
                    height={size}
                >
                    <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z" />
                </svg>
            );
        case 'white':
            return (
                <svg
                    className="google-icon"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width={size}
                    height={size}
                >
                    <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z" />
                </svg>
            );
        case 'colored':
            return (
                <svg className="google-icon" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
                    <g fill="#000" fill-rule="evenodd">
                        <path
                            d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                            fill="#EA4335"
                        ></path>
                        <path
                            d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                            fill="#4285F4"
                        ></path>
                        <path
                            d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                            fill="#FBBC05"
                        ></path>
                        <path
                            d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                            fill="#34A853"
                        ></path>
                        <path fill="none" d="M0 0h18v18H0z"></path>
                    </g>
                </svg>
            );
    }
}

export default GoogleIcon;
