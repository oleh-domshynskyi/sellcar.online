import Link from 'next/link';
import { useRouter } from 'next/router';
import { LogoProps } from './types';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Logo = ({ location, className }: LogoProps) => {
  const router = useRouter();
  const { locale } = router;

  const getLogo = () => {
    return `/images/${locale}-${location}.svg`;
  };

  return (
    <Link href="/">
      <a className={classNames(className, styles.logo)}>
        <img src={getLogo()} alt="logo" />
      </a>
    </Link>
  );
};

export default Logo;
