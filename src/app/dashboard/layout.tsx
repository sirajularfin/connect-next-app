import React from 'react';

import { ProfileProvider } from '@/context/ProfileContext';
import { API_URLS } from '@/network/apiConstants.type';
import { httpClient } from '@/network/httpClient';
import classes from './dashboard.module.scss';

interface IProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IProps> = async ({ sidebar, children }) => {
  const { data: initialProfile } = await httpClient.get(
    API_URLS.USER_PROFILE.getProfile
  );

  return (
    <ProfileProvider initialProfile={initialProfile}>
      <div className={classes.dashboardLayout}>
        <section className={classes.dashboardSidebar}>{sidebar}</section>
        <section>{children}</section>
      </div>
    </ProfileProvider>
  );
};

export default DashboardLayout;
