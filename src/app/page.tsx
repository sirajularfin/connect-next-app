import Image from 'next/image';

import LandingPageImg from '@/assets/images/landing-page.png';
import Typography from '@/components/Typography/Typography';
import classes from './page.module.scss';

function Home(): React.ReactElement {
  return (
    <main className={classes.container}>
      <div className={classes.columnLeft}>
        <Image
          src={LandingPageImg}
          alt="Chat Feature"
          className={classes.image}
        />
        <Typography as="h1" className={classes.title1}>
          Connect <span>Faster.</span>
        </Typography>
        <Typography as="h1" className={classes.title2}>
          Chat <span>Smarter.</span>
        </Typography>
        <Typography className={classes.description}>
          The most intuitive, secure AI-powered chat platform <br /> for{' '}
          <span>YOU</span>
        </Typography>
      </div>
    </main>
  );
}

export default Home;
