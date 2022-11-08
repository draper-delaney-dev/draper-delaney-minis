import React from 'react';

type RequiredProps = {
  classes: string,
  children: React.ReactNode,
}

const Required = ({ classes, children }: RequiredProps) => {
  return (
    <p className={`text-red-500 text-s ${classes}`}>
      {children}
    </p>
  );
};

export default Required;