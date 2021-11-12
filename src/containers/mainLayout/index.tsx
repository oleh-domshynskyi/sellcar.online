import React from 'react';
import { MainLayoutProps } from './types';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
