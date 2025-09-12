import ChatSection from '@/components/ChatSection/ChatSection';
import ChatSidebar from '@/components/ChatSidebar/ChatSidebar';
import classes from './chat.module.scss';

const ChatLayout: React.FC = () => {
  return (
    <div className={classes.container}>
      <ChatSidebar />
      <ChatSection />
    </div>
  );
};

export default ChatLayout;
