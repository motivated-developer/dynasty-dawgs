import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import styles from './tradeInput.module.css';

interface Props {
  receivingTeam: string;
  teams: object[];
  roster: object[];
  draftPicks: object[];
  updateValues: string[];
  updateTrade: (
    selection: { value: string; label: string },
    updateCategory: string
  ) => void;
}

export default function TradeInput(props: Props) {
  const [teamName, setTeamName] = useState<any>();
  const [selectedPlayers, pushSelectedPlayer] = useState<
    [{ label: string; value: string }] | any
  >([{ label: 'Select...', value: '' }]);
  const [selectedPicks, pushSelectedPick] = useState<
    [{ label: string; value: string }] | any
  >([{ label: 'Select...', value: '' }]);
  const [playerSelections, addPlayerSelection] = useState<number>(1);
  const [pickSelections, addPickSelection] = useState<number>(1);

  const selectStyle: StylesConfig = {
    option: (provided) => ({
      ...provided,
      color: 'black',
    }),
    container: (provided) => ({
      ...provided,
      width: '150px',
    }),
  };

  return (
    <div className={styles.trade_input}>
      <Select
        id="teams-selection"
        instanceId="teams-selection"
        styles={selectStyle}
        options={props.teams}
        onChange={(selection: { value: string; label: string } | any) => {
          setTeamName(selection);
          props.updateTrade(selection, props.updateValues[0]);
        }}
      ></Select>
      <p className={styles.trade_input_text}>sends</p>
      <div className={styles.players_group}>
        {
          // Dynamically create select components for each player selected
          Array.from(Array(playerSelections)).map((_, index) => (
            <div
              className={styles.player_selections}
              key={Math.random() + index}
            >
              <Select
                id="player-selection"
                instanceId="player-selection"
                styles={selectStyle}
                options={props.roster}
                // The first value in the selected Players array reads:
                // "Please Select a team", so that's why the value
                // holds the index + 1
                value={
                  !teamName
                    ? selectedPlayers[index]
                    : selectedPlayers[index + 1]
                }
                isDisabled={!teamName}
                onChange={(selection) => {
                  pushSelectedPlayer([...selectedPlayers, selection]);
                  addPlayerSelection(playerSelections + 1);
                  props.updateTrade(selection, props.updateValues[1]);
                }}
              ></Select>
            </div>
          ))
        }
      </div>
      <p className={styles.trade_input_text}>&</p>
      <div className={styles.picks_group}>
        {
          // Dynamically create select components for each pick selected
          Array.from(Array(pickSelections)).map((_, index) => (
            <div className={styles.pick_selections} key={Math.random() + index}>
              <Select
                id="draft-pick-selection"
                instanceId="draft-pick-selection"
                styles={selectStyle}
                options={props.draftPicks}
                // The first value in the selected Picks array reads:
                // "Please Select a team", so that's why the value
                // holds the index + 1
                value={
                  !teamName ? selectedPicks[index] : selectedPicks[index + 1]
                }
                isDisabled={!teamName}
                onChange={(selection) => {
                  pushSelectedPick([...selectedPicks, selection]);
                  addPickSelection(pickSelections + 1);
                  props.updateTrade(selection, props.updateValues[1]);
                }}
              ></Select>
            </div>
          ))
        }
      </div>
      {props.receivingTeam ? (
        <p className={styles.trade_input_text}>to {props.receivingTeam}</p>
      ) : null}
    </div>
  );
}
