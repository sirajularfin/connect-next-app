import classes from './chat.module.scss';

interface IProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const Page: React.FC<IProps> = ({ sidebar, children }) => {
  return (
    <div className={classes.container}>
      <section>{sidebar}</section>
      <section>{children}</section>
    </div>
  );
};

export default Page;
