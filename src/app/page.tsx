import LandingPageImg from '@/assets/images/landing-page.png';
import LoginForm from '@/components/LoginForm/LoginForm';
import Typography from '@/components/Typography/Typography';
import Image from 'next/image';
import classes from './page.module.scss';

const Home = (): React.ReactElement => (
  <main className={classes.container}>
    <section className={classes.columnLeft}>
      <Image
        src={LandingPageImg}
        alt="Chat Feature"
        className={classes.image}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <Typography as="h1" className={classes.title1}>
        Connect <span>Faster.</span>
      </Typography>
      <Typography as="h1" className={classes.title2}>
        Chat <span>Smarter.</span>
      </Typography>
      <Typography as="p" className={classes.description}>
        The most intuitive, secure AI-powered chat platform <br />
        for <span>YOU</span>
      </Typography>
    </section>
    <section className={classes.columnRight} aria-label="Authentication form">
      <LoginForm />
    </section>
  </main>
);

export default Home;
