import { useState, useEffect } from 'react';
import MainLayout from '@/containers/mainLayout/index';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useRouter } from 'next/router';
import content from '@/public/aboutUs.json';
import classNames from 'classnames';
import styles from '../styles/about.module.scss';

export default function Privacy() {
  const router = useRouter();
  const { locale } = router;
  const data: any = content;

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll);

    return () => window.removeEventListener(`scroll`, handleScroll);
  }, []);

  return (
    <MainLayout>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url('${data[locale!].bannerImg}')` }}
      >
        <div
          className={classNames(`circle circle--blue`, styles.circleBlue)}
          style={{
            transform: `translate(-${offsetY * 0.15}px, ${offsetY * 0.5}px)`,
          }}
        ></div>
        <div
          className={classNames(`circle circle--red`, styles.circleRedRight)}
          style={{
            transform: `translate(-${offsetY * 0.07}px, ${offsetY * 0.2}px)`,
          }}
        ></div>
        <div
          className={classNames(`circle circle--red`, styles.circleRedLeft)}
          style={{ transform: `translateX(${offsetY * 0.3}px)` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className={styles.title}>{data[locale!].title}</h1>
              <p className={styles.subtitle}>{data[locale!].subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(`container wysiwyg`, styles.content)}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data[locale!].content}
        </ReactMarkdown>
      </div>
    </MainLayout>
  );
}
