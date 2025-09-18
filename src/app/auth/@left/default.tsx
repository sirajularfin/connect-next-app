import { useTranslations } from 'next-intl';
import Image from 'next/image';

import LandingPageImg from '@/assets/images/landing-page.png';
import Typography from '@/components/Typography/Typography';
import classes from './welcomeSection.module.scss';

const WelcomeSection: React.FC = () => {
  const t = useTranslations();

  return (
    <div className={classes.columnLeft}>
      <Image
        src={LandingPageImg}
        alt="Chat Feature"
        className={classes.image}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <Typography as="h1" className={classes.title1}>
        {t.rich('landing_title1', {
          strong: children => <strong>{children}</strong>,
        })}
      </Typography>
      <Typography as="h1" className={classes.title2}>
        {t.rich('landing_title2', {
          strong: children => <strong>{children}</strong>,
        })}
      </Typography>
      <Typography as="p" className={classes.description}>
        {t('landing_description')}
      </Typography>
    </div>
  );
};

export default WelcomeSection;
