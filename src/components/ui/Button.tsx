import React from 'react';

type ButtonProps = {
    children: React.ReactNode,
    type: 'submit' | 'reset' | 'button',
    classes: string,
}

const Button = ({ children, classes, type }: ButtonProps) => {

    return (
        <button type={type} className={`px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 ${classes}`}>
            {children}
        </button>
    );
};

export default Button;