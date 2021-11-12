import React from 'react';
import Head from 'next/head';
import LangSwitch from '@/components/lang-switch/LangSwitch';
import Logo from '@/components/logo/Logo';
import styles from './styles.module.scss';
import classNames from 'classnames';

export default function Header() {
  return (
    <>
      <Head>
        <title>sellcar.online</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <header className={styles.header}>
        <div className="container">
          <div className={styles[`header--row`]}>
            <Logo location="header" />
            <nav>
              <LangSwitch className={`lang-switch--header`}></LangSwitch>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
