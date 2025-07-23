import classes from './layout.module.scss';

interface IProps {
  left: React.ReactNode;
  children: React.ReactNode;
}

const AuthLayout: React.FC<IProps> = ({ left, children }) => {
  return (
    <div className={classes.container}>
      <section className={classes.columnLeft}>{left}</section>
      <section className={classes.columnRight}>{children}</section>
    </div>
  );
};

export default AuthLayout;
