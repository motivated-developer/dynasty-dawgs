import React from 'react';
import styles from './tradeString.module.css';

interface props {
  sendingTeam: string;
  sendingPlayers: string[];
  receivingPlayers: string[];
  sendingPicks: string[];
  receivingPicks: string[];
}

const mapToList = (list: string[]) => {
  return list.map(
    // if player/pick is an empty string '' then don"t make a list item
    (listItem) => {
      if (listItem) return <li key={listItem + Math.random()}>{listItem}</li>;
    }
  );
};

export default function TradeString(props: props) {
  const sendingPlayers = mapToList(props.sendingPlayers);
  const receivingPlayers = mapToList(props.receivingPlayers);
  const sendingPicks = mapToList(props.sendingPicks);
  const receivingPicks = mapToList(props.receivingPicks);

  return (
    <div className={styles.trade_summary}>
      <h3>
        <u>{props.sendingTeam}</u>
      </h3>
      <h4 className={styles.sends_receives_content}>
        <div className={styles.sends_content}>
          <b>Sends:</b>
          <div className={styles.sends_receives_lists}>
            <div className={styles.assets_list}>{sendingPlayers}</div>
            <div className={styles.assets_list}>{sendingPicks}</div>
          </div>
        </div>
        <div className={styles.receives_content}>
          <b>Receives:</b>
          <div className={styles.sends_receives_lists}>
            <div className={styles.assets_list}>{receivingPlayers}</div>
            <div className={styles.assets_list}>{receivingPicks}</div>
          </div>
        </div>
        {/* {props.players} and {props.picks.join(', ')} to {props.receivingTeam} */}
      </h4>
    </div>
  );
}
