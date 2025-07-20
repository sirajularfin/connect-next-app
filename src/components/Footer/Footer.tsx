import { useTranslations } from 'next-intl';
import Typography from '../Typography/Typography';
import classes from './Footer.module.scss';

function Footer() {
  const t = useTranslations();

  return (
    <footer className={classes.container}>
      <Typography>
        {t('footer_text', { year: new Date().getFullYear() })}
      </Typography>
    </footer>
  );
}

export default Footer;
