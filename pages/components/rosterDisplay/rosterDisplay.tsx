import React from 'react';
import styles from './rosterDisplay.module.css';

import { playerDetails } from '../../playerData/playerData';
// import {playerDataInterface} from '../../playerData/playerData'
import playerData from '../../playerData/playerData';
import PlayerInfo from '../playerInfo/playerInfo';

interface props {
  roster: {
    players: string[];
    starters: string[];
  }[];
}

export default function RosterDisplay(props: props) {
  const roster = props.roster[0];
  let starters: React.ReactNode[] = [];
  let benchPlayers1: React.ReactNode[] = [];
  let benchPlayers2: React.ReactNode[] = [];

  const addPlayer = (player: playerDetails, playerArray: React.ReactNode[]) => {
    playerArray.push(
      <PlayerInfo
        key={player.first_name + Math.random()}
        name={player.full_name || player.first_name + ' D/ST'}
        weight={player.weight}
        college={player.college}
        age={player.age}
        team={player.team}
        yearsExperience={player.years_exp}
      ></PlayerInfo>
    );
  };

  roster.players.map((playerNum: any) => {
    // @ts-ignore
    const playerInfo: playerDetails = playerData[playerNum];
    if (roster.starters.includes(playerNum)) {
      addPlayer(playerInfo, starters);
    } else if (benchPlayers1.length < 12) {
      addPlayer(playerInfo, benchPlayers1);
    } else {
      addPlayer(playerInfo, benchPlayers2);
    }
  });

  return (
    <div id={styles.players_column}>
      <div>
        <b>Starters</b>
        <div id={styles.starters}>
          <div>{starters}</div>
        </div>
      </div>
      <div>
        <b>Bench</b>
        <div id={styles.bench_players}>
          <div>{benchPlayers1}</div>
          <div>{benchPlayers2}</div>
        </div>
      </div>
    </div>
  );
}
