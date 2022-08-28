import React from 'react';
import styles from './layout.module.css';

import Header from '../header/header';
import Footer from '../footer/footer';

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main id={styles.layout_box}>{children}</main>
      <Footer />
    </>
  );
}
