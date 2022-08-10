import React, { useState, useEffect } from 'react';
import styles from './pageStyles/newtrade.module.css';
import PrimaryButton from '../public/utils/primaryButton';
import TradeInput from '../components/tradeInput/tradeInput';
import TradeString from '../components/tradeString/tradeString';
import { getTeams, getPicks, getRoster } from '../public/utils/sleeperGetters';

interface teamFormat {
  metadata?: {
    team_name: string;
  };
  user_id?: string;
}

function NewTrade() {
  const [team1, setTeam1] = useState<string>('');
  const [team2, setTeam2] = useState<string>('');
  const [players1, setPlayers1] = useState<string[]>(['']);
  const [players2, setPlayers2] = useState<string[]>(['']);
  const [picks1, setPicks1] = useState<string[]>(['']);
  const [picks2, setPicks2] = useState<string[]>(['']);

  const [teams, setTeams] = useState<object[]>([{ value: '', label: '' }]);
  const [roster1, setRoster1] = useState<object[]>([{}]);
  const [roster2, setRoster2] = useState<object[]>([{}]);

  const draftPicks = [
    { value: '2022 1st', label: '2022 1st' },
    { value: '2022 2nd', label: '2022 2nd' },
    { value: '2022 3rd', label: '2022 3rd' },
    { value: '2022 4th', label: '2022 4th' },
    { value: '2023 1st', label: '2023 1st' },
    { value: '2023 2nd', label: '2023 2nd' },
    { value: '2023 3rd', label: '2023 3rd' },
    { value: '2023 4th', label: '2023 4th' },
    { value: '2023 1st', label: '2023 1st' },
    { value: '2023 2nd', label: '2023 2nd' },
    { value: '2023 3rd', label: '2023 3rd' },
    { value: '2023 4th', label: '2023 4th' },
  ];

  const updateTrade = (
    selection: { value: string; label: string },
    updateCategory: string
  ): void => {
    switch (updateCategory) {
      case 'team1':
        setTeam1(selection.label);
        fillRoster(selection.value, 'roster1');
        break;
      case 'team2':
        setTeam2(selection.label);
        fillRoster(selection.value, 'roster2');
        break;
      case 'players1':
        const addNewPlayer1 = [...players1, selection.value];
        // Only set the players list with unique players
        setPlayers1([...new Set(addNewPlayer1)]);
        break;
      case 'players2':
        const addNewPlayer2 = [...players2, selection.value];
        // Only set the players list with unique players
        setPlayers2([...new Set(addNewPlayer2)]);
        break;
      case 'picks1':
        setPicks1([...picks1, selection.value]);
        break;
      case 'picks2':
        setPicks2([...picks2, selection.value]);
        break;
      default:
        console.error('Update Category not recognized');
    }
  };

  const fillRoster = (teamId: string, rosterToSet: string) => {
    console.log('incoming params', teamId, rosterToSet);
    getRoster(teamId).then((roster: any) => {
      const formattedRoster: object[] = [];

      roster.forEach((player: string) => {
        console.log({ value: player, label: player });
        formattedRoster.push({ value: player, label: player });
      });

      console.log(formattedRoster);
      if (rosterToSet === 'roster1') {
        setRoster1(formattedRoster);
      }
      if (rosterToSet === 'roster2') {
        setRoster2(formattedRoster);
      }
    });
  };

  useEffect(() => {
    getPicks();

    getTeams().then((teamsRaw: object[]) => {
      const teams = teamsRaw.map((teamData: teamFormat) => {
        const teamObj = {
          value: teamData.user_id,
          label: teamData.metadata?.team_name,
        };
        return teamObj;
      });
      console.log(teams);
      setTeams(teams);
    });
  }, []);

  return (
    <div className={styles.fantasy_page}>
      <h2 className={styles.dd_title}>Input Trade</h2>
      <div className={styles.trade_input_box}>
        <TradeInput
          receivingTeam={team2}
          teams={teams}
          roster={roster1}
          draftPicks={draftPicks}
          updateValues={['team1', 'players1', 'picks1', 'team2']}
          updateTrade={updateTrade}
        ></TradeInput>
        <TradeInput
          receivingTeam={team1}
          teams={teams}
          roster={roster2}
          draftPicks={draftPicks}
          updateValues={['team2', 'players2', 'picks2', 'team1']}
          updateTrade={updateTrade}
        ></TradeInput>
      </div>
      <div className={team1 ? '' : 'hide'}>
        <TradeString
          sendingTeam={team1}
          sendingPlayers={players1}
          receivingPlayers={players2}
          sendingPicks={picks1}
          receivingPicks={picks2}
        ></TradeString>
      </div>
      <div className={team2 ? '' : 'hide'}>
        <TradeString
          sendingTeam={team2}
          sendingPlayers={players2}
          receivingPlayers={players1}
          sendingPicks={picks2}
          receivingPicks={picks1}
        ></TradeString>
      </div>
      <div className={styles.submit_trade_button}>
        <PrimaryButton
          buttonText="Submit Trade"
          onClick={() => {
            alert('clicked');
          }}
        ></PrimaryButton>
      </div>
    </div>
  );
}

export default NewTrade;
