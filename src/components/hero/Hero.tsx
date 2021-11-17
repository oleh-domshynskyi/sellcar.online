import { useRouter } from 'next/router';
import classNames from 'classnames';
import Title from '../title/Title';
import ButtonContainer from '../button-container/ButtonContainer';
import { HeroProps } from './types';
import Image from 'next/image';
import styles from './styles.module.scss';
import content from '@/public/settings/settings.json';
import partners from '@/public/sections/partners.json';
import { useState, useEffect } from 'react';

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

const Hero = ({ title, subtitle, img, partner }: HeroProps) => {
  const router = useRouter();
  const { locale } = router;
  const data: any = content;
  const partnerData: any = partners;

  // const position = useMousePosition();
  const position = { x: 0, y: 0 };

  return (
    <>
      <div className={styles[`hero`]}>
        <div className="container">
          <div className={classNames(`row`, styles[`hero--row`])}>
            <div
              className={classNames(`col-12 col-lg-6`, styles[`hero--info`])}
            >
              <Title as="h1" className="title--hero">
                {title}
              </Title>

              <p className={styles[`info__par`]}>{subtitle}</p>
              <div className={styles[`hero--info__btn`]}>
                <ButtonContainer />
              </div>
              {partner && (
                <div className={styles[`hero--partner`]}>
                  <span>{data[locale!].partnerTitle}</span>
                  <img src={partner} alt="logo" />
                </div>
              )}
            </div>

            <div
              className={classNames(`col-12 col-lg-6`, styles[`hero--images`])}
            >
              <Image src={img} alt="online prices" width={604} height={659} />

              <span
                className={classNames(
                  `circle circle--blue`,
                  styles[`hero__blue-circle`],
                )}
                style={{
                  transform: `translate(-${position.x * 0.05}px, ${
                    position.y * 0.05
                  }px)`,
                }}
              ></span>
              <span
                className={classNames(
                  `circle circle--red`,
                  styles[`hero__red-circle`],
                )}
                style={{
                  transform: `translate(-${position.x * 0.05}px, -${
                    position.y * 0.05
                  }px)`,
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
