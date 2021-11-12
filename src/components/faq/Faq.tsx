import Title from '@/components/title/Title';
import classNames from 'classnames';
import ButtonContainer from '@/components/button-container/ButtonContainer';
import styles from './styles.module.scss';
import { FaqProps } from './types';

const Faq = ({ data, title }: FaqProps) => {
  return (
    <>
      <section className={styles[`faq`]}>
        <div className={classNames(`container`, styles[`container--faq`])}>
          <Title className="title--faq" as="h2">
            {title}
          </Title>
          {data.map((el: any, i: string) => (
            <div className={styles[`accordion`]} key={i}>
              <input type="radio" id={i} name="rd"></input>
              <label htmlFor={i}>{el.title}</label>
              <p className={styles[`accordion__content`]}>{el.description}</p>
            </div>
          ))}
          <div className={styles[`faq--btn`]}>
            <ButtonContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
