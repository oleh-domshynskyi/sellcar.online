import { TitleProps } from './types';

const Title = ({ as, children, className }: TitleProps) => {
  if (as === `h1`) {
    return <h1 className={className}>{children}</h1>;
  } else if (as === `h2`) {
    return <h2 className={className}>{children}</h2>;
  } else if (as === `h3`) {
    return <h3 className={className}>{children}</h3>;
  } else if (as === `h4`) {
    return <h4 className={className}>{children}</h4>;
  } else {
    return <h2 className={className}>{children}</h2>;
  }
};

export default Title;
