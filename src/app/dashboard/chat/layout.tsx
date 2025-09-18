import classes from './chat.module.scss';

interface IProps {
  conversationList: React.ReactNode;
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ conversationList, children }) => {
  return (
    <div className={classes.chatLayout}>
      <section>{conversationList}</section>
      <section>{children}</section>
    </div>
  );
};

export default Layout;
