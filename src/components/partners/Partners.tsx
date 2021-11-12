import Title from '../title/Title';
import styles from './styles.module.scss';
import { PartnerProps } from './types';

const Partners = ({ data, title }: PartnerProps) => {
  return (
    <section className={styles.partners}>
      <div className="container">
        <div className="row">
          <div className={styles[`partners__title`]}>
            <Title as="h2">{title}</Title>
          </div>
          {data.images.map((el: any, i: number) => (
            <span className="col-sm-3 col-6" key={i}>
              <img src={el.img} alt="partner" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
