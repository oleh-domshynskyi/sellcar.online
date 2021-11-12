import React from 'react';
import { ContentLayoutProps } from './types';
import MainLayout from '@/containers/mainLayout/index';
import Title from '@/components/title/Title';

export default function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <>
      <MainLayout>
        <div className="container">
          <Title as="h2" className="title--secondary-page">
            {title}
          </Title>
          {children}
        </div>
      </MainLayout>
    </>
  );
}
