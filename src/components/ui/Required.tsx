import React from 'react';

type RequiredProps = {
  children: React.ReactNode,
}

const Required = ({ children }: RequiredProps) => {
  return (
    <p>
      {children}
    </p>
  );
};

export default Required;