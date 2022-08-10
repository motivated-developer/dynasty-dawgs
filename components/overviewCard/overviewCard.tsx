import React from 'react';
import styles from './overviewCard.module.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface props {
  title: string;
  content: React.ReactNode[] | React.ReactNode;
  handleRosterClick?: Function;
  isClosable: boolean;
  closeRoster?: Function;
}

export default function OverviewCard(props: props) {
  return (
    <div className={styles.content_box}>
      <div className={styles.teams_card}>
        <Card
          sx={{
            boxShadow: '0px 5px 10px 2px rgb(0 0 0 / 25%)',
            borderRadius: 4,
            backgroundImage: 'linear-gradient(333deg, black, white)',
          }}
        >
          <h4 className={styles.teams_header}>
            <b>{props.title}</b>
            <span
              className={props.isClosable ? styles.close_button : styles.hidden}
              onClick={() => props.closeRoster?.()}
            >
              <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
            </span>
          </h4>
          <CardContent>{props.content}</CardContent>
        </Card>
      </div>
    </div>
  );
}
