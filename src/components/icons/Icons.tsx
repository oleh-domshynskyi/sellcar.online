import Image from 'next/image';
import classNames from 'classnames';
import { IconsProps } from './types';

import styles from './styles.module.scss';

const Icons = ({ data }: IconsProps) => {
  return (
    <>
      <section className={styles[`icons`]}>
        <div className="container">
          <ul className={classNames(`row`, styles[`icons--row`])}>
            {data.map((el: any, i: number) => (
              <li
                className={classNames(
                  `col-md-4 col-sm-12`,
                  styles[`icons__item`],
                )}
                key={i}
              >
                <Image
                  src={el.image}
                  alt="online prices"
                  width={118}
                  height={118}
                />
                <p className={styles[`item__par`]}>{el.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Icons;
