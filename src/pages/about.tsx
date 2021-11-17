import { useState, useEffect } from 'react';
import Head from 'next/head';
import MainLayout from '@/containers/mainLayout/index';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useRouter } from 'next/router';
import content from '@/public/aboutUs.json';
import classNames from 'classnames';
import styles from '../styles/about.module.scss';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e: any) =>
      setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener(`mousemove`, setFromEvent);

    return () => {
      window.removeEventListener(`mousemove`, setFromEvent);
    };
  }, []);

  return position;
};

export default function Privacy() {
  const router = useRouter();
  const { locale } = router;
  const data: any = content;

  // const position = useMousePosition();
  const position = { x: 0, y: 0 };

  return (
    <MainLayout>
      <Head>
        <title>{data[locale!].pageTitle}</title>
        <meta name="description" content={data[locale!].pageMeta}></meta>
      </Head>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url('${data[locale!].bannerImg}')` }}
      >
        <div
          className={classNames(`circle circle--blue`, styles.circleBlue)}
          style={{
            transform: `translate(-${position.x * 0.05}px, ${
              position.y * 0.05
            }px)`,
          }}
        ></div>
        <div
          className={classNames(`circle circle--red`, styles.circleRedRight)}
          style={{
            transform: `translate(-${position.x * 0.05}px, ${
              position.y * 0.05
            }px)`,
          }}
        ></div>
        <div
          className={classNames(`circle circle--red`, styles.circleRedLeft)}
          style={{ transform: `translateX(${position.x * 0.05}px)` }}
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
