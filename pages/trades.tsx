import React, { useState } from 'react';
import styles from './pageStyles/trades.module.css';
import Link from 'next/link';

export default function Trades() {
  const [viewTableByYear, updateTableView] = useState<boolean>(true);
  return (
    <div className={styles.background}>
      <h2>Dynasty Dawg Trade Log</h2>
      <Link href="/newtrade">Add New Trade</Link>
      <p>
        View trades by{' '}
        <u
          className={styles.trade_filter}
          onClick={() => updateTableView(true)}
        >
          Year
        </u>
        {'  '}
        <u
          className={styles.trade_filter}
          onClick={() => updateTableView(false)}
        >
          Team
        </u>
      </p>
      <div id={styles.trades_table}></div>
    </div>
  );
}
