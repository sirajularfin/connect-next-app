import Footer from '@/components/Footer/Footer';
import MainHeader from '@/components/MainHeader/MainHeader';
import classes from './auth.module.scss';

interface IProps {
  left: React.ReactNode;
  children: React.ReactNode;
}

const AuthLayout: React.FC<IProps> = ({ left, children }) => {
  return (
    <section>
      <MainHeader />
      <div className={classes.container}>
        <section className={classes.columnLeft}>{left}</section>
        <section className={classes.columnRight}>{children}</section>
      </div>
      <Footer />
    </section>
  );
};

export default AuthLayout;
