import React from 'react';
import { LogoIcon } from './icons/LogoIcon';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  const isWhite = className?.includes('text-white');
  const tclColor = isWhite ? '#FFFFFF' : '#0E4D8C';
  const servicesColor = isWhite ? '#E5E7EB' : '#889299';

  return (
    <a href="#/home" className={`flex items-center space-x-3 ${className}`} aria-label="TCL Professional Services, Homepage">
      <LogoIcon className="h-10 w-10 flex-shrink-0" />
      <div className="flex flex-col -space-y-1">
        <span className="text-2xl font-extrabold" style={{color: tclColor}}>
            TCL
        </span>
        <span className="text-xs font-semibold tracking-wider" style={{color: servicesColor}}>
            Professional Services
        </span>
      </div>
    </a>
  );
};

export default Logo;
