import React from 'react';

type CardProps = {
    children: React.ReactNode,
    classes: string,
}

const Card = ({ children, classes }: CardProps) => {

    return (
        <div className={`flex flex-col bg-gray-300 rounded m-2 drop-shadow-lg ${classes}`}>
            {children}
        </div>
    );
};

export default Card;