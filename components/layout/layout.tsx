import React from 'react';
import styles from './layout.module.css';

import Footer from '../footer/footer';

export default function Layout({ children }: any) {
  return (
    <>
      <main id={styles.layout_box}>{children}</main>
      <Footer />
    </>
  );
}
