import { useNavigate } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';

const useChat = () => {
  const navigate = useNavigate();
  const isDesktop = useResponsive();

  return {
    navigate,
    isDesktop,
  };
};

export default useChat;
