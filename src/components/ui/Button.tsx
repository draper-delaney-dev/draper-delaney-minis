import React from 'react';

type ButtonProps = {
    children: React.ReactNode,
    classes: string,
}

const Button = ({ children, classes }: ButtonProps) => {

    return (
        <button className={`px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 ${classes}`}>
            {children}
        </button>
    );
};

export default Button;