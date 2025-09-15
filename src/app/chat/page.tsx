import { useTranslations } from 'next-intl';

import Typography from '@/components/Typography/Typography';
import classes from './chat.module.scss';

const Page: React.FC = () => {
  const t = useTranslations();

  return (
    <div className={classes.container}>
      <Typography className={classes.heading}>
        {t('chat_welcome_title')}
      </Typography>
      <Typography className={classes.subHeading}>
        {t('chat_welcome_message')}
      </Typography>
    </div>
  );
};

export default Page;
