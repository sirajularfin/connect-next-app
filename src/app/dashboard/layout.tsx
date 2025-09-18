import React from 'react';

import { ProfileProvider } from '@/context/ProfileContext';
import { API_URLS } from '@/network/apiConstants.type';
import { httpClient } from '@/network/httpClient';

interface IProps {
  children: React.ReactNode;
}

const loadUserProfile = async () => {
  const { data } = await httpClient.get(API_URLS.USER_PROFILE.getProfile);
  return data;
};

const Layout: React.FC<IProps> = async ({ children }) => {
  const initialProfile = await loadUserProfile();
  return (
    <ProfileProvider initialProfile={initialProfile}>
      {children}
    </ProfileProvider>
  );
};

export default Layout;
