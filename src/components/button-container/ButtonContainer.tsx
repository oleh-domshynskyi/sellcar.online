import { ButtonContainerProps } from './types';
import classNames from 'classnames';
import Button from '../button/Button';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import content from '@/public/settings/settings.json';

const ButtonContainer = ({ className }: ButtonContainerProps) => {
  const router = useRouter();
  const { locale } = router;
  const data: any = content;

  return (
    <div className={classNames(className, styles[`button--container`])}>
      <Button href="#cadwidget" data-cad-widget="1" data-cad-language={locale}>
        {data[locale!].buttonTitle}
      </Button>
      <p className={styles[`btn__par`]}>{data[locale!].buttonSubtitle}</p>
    </div>
  );
};

export default ButtonContainer;
