import Typography from '../Typography/Typography';
import classes from './Footer.module.scss';

function Footer() {
  return (
    <footer className={classes.container}>
      <Typography>
        © 2025 Connect — Built with ❤️ using Supabase + Gemini
      </Typography>
    </footer>
  );
}

export default Footer;
