import classNames from 'classnames';
import Link from 'next/link';
import content from '@/public/sections/footer.json';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useRouter } from 'next/router';
import LangSwitch from '@/components/lang-switch/LangSwitch';
import Logo from '@/components/logo/Logo';
import styles from './styles.module.scss';

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const data: any = content;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4">
            <Logo location="footer" className={styles.footer__link} />
          </div>

          <div className="col-6 col-xl-2">
            <ul className={styles.footer__menu}>
              {data[locale!].navigation.map((el: any, i: number) => (
                <li key={i}>
                  <Link href={el.url}>
                    <a>{el.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-xl-2">
            <LangSwitch className={`lang-switch`}></LangSwitch>
          </div>

          <div className="col-12 col-xl-4">
            <div className={classNames(`wysiwyg`, styles.footer__info)}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {data[locale!].content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
