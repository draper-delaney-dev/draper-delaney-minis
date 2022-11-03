import React from 'react';

type MainProps = {
  children: React.ReactNode,
  classes: string,
}

const Main = ({children, classes}: MainProps) => {

  return (
    <div className={`${classes}`}>
      {children}
    </div>
  );
};

export default Main;