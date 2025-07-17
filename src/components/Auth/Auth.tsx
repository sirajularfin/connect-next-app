'use client';

import { AUTH_MODES } from '@/types/appConstants';
import { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';

const Auth: React.FC = () => {
  const [authState, setAuthState] = useState<AUTH_MODES>(AUTH_MODES.LOGIN);

  const renderAuthState = () => {
    switch (authState) {
      case AUTH_MODES.LOGIN:
        return <LoginForm updateAuthState={setAuthState} />;
      case AUTH_MODES.REGISTER:
        return <RegistrationForm updateAuthState={setAuthState} />;
      default:
    }
  };

  return renderAuthState();
};

export default Auth;
