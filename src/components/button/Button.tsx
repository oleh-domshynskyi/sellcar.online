import Link from 'next/link';
import { ButtonProps } from './types';

const Button = ({ href, children, ...props }: ButtonProps) => {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default Button;
