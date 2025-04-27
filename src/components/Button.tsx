import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick,
  target,
  rel,
}) => {
  const baseClasses = `btn btn-${variant} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={baseClasses} target={target} rel={rel}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={baseClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;