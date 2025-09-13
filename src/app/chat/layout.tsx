import classes from './chat.module.scss';

interface IProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ sidebar, children }) => {
  return (
    <div className={classes.chatLayout}>
      <section>{sidebar}</section>
      <section>{children}</section>
    </div>
  );
};

export default Layout;
