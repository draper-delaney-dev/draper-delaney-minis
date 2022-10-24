import React from 'react';

type MainProps = {
    children: React.ReactNode
}

const Main = ({ children }: MainProps) => {

    return (
        <div className={`grid items-center min-h-fit`}>
            {children}
        </div>
    );
};

export default Main;