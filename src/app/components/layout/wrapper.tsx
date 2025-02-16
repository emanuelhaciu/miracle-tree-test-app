import React from 'react';
import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={`mx-auto px-5 md:px-5 lg:px-8 xl:px-20 2xl:px-35
                  md:max-w-4xl lg:max-w-[1024px]
                  xl:max-w-[1920px] 2xl:max-w-[2560px] 
                  ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
