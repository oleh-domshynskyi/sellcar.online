import { useRouter } from 'next/router';
import classNames from 'classnames';
import Title from '@/components/title/Title';
import ButtonContainer from '@/components/button-container/ButtonContainer';
import styles from './styles.module.scss';
import { StepsProps } from './types';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import content from '@/public/settings/settings.json';

const StepsComp = ({ title, data }: StepsProps) => {
  const router = useRouter();
  const { locale } = router;
  const stepData: any = content;

  return (
    <section className={styles[`steps`]}>
      <div className="container">
        <div className="title--steps">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{title}</ReactMarkdown>
        </div>
      </div>
      <div className="container">
        {data.map((el: any, i: number) => (
          <div className={classNames(`row`, styles[`steps__item`])} key={i}>
            <div
              className={classNames(
                `col-lg-6 col-12`,
                styles[`steps__item--info`],
              )}
            >
              <span>{stepData[locale!].stepTitle}</span>
              <div className={styles[`item__title`]}>
                <Title as="h3">{el.title}</Title>
              </div>

              <p className={styles[`item__par`]}>{el.description}</p>
            </div>

            <div
              className={classNames(
                `col-lg-6 col-12`,
                styles[`steps__item--image`],
              )}
            >
              <Image src={el.image} alt="step" width={530} height={400} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles[`steps--button`]}>
        <ButtonContainer />
      </div>
    </section>
  );
};

export default StepsComp;
