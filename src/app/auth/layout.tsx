import classes from './layout.module.scss';

interface IProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const AuthLayout: React.FC<IProps> = ({ left, right }) => {
  return (
    <main className={classes.container}>
      <section className={classes.columnLeft}>{left}</section>
      <section className={classes.columnRight}>{right}</section>
    </main>
  );
};

export default AuthLayout;
