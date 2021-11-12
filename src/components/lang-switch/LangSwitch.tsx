import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import { LangSwitchProps } from './types';
import classNames from 'classnames';

const LangSwitch = ({ className }: LangSwitchProps) => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const getFullLanguage = (lang: any) => {
    if (lang === `en`) {
      return `English`;
    } else if (lang === `de`) {
      return `Deutsch`;
    } else if (lang === `it`) {
      return `Italiano`;
    } else if (lang === `fr`) {
      return `Français`;
    } else return `English`;
  };

  return (
    <div className={classNames(styles[className])}>
      <p>{getFullLanguage(activeLocale)}</p>

      <div className={styles[`lang-switch__list`]}>
        {locales!.map((locale: string) => {
          const { pathname, query, asPath } = router;
          return (
            <Link
              href={{ pathname, query }}
              as={asPath}
              locale={locale}
              key={locale}
            >
              <a>{getFullLanguage(locale)}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default LangSwitch;
