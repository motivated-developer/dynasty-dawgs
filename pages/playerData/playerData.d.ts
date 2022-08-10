// I don't know how to get typings for the JSON object playerData

import playerData from 'playerData.json';

export interface playerDetails {
  fantasy_data_id: string;
  fantasy_positions: string[];
  age: number;
  news_updated: string;
  practice_description: string;
  search_full_name: string;
  injury_status: string;
  rotoworld_id: string;
  gsis_id: number;
  search_first_name: string;
  hashtag: string;
  espn_id: number;
  birth_country: string;
  weight: string;
  status: string;
  metadata: string;
  last_name: string;
  birth_city: string;
  number: number;
  stats_id: number;
  position: string;
  sport: string;
  high_school: string;
  injury_start_date: string;
  college: string;
  birth_date: string;
  years_exp: number;
  depth_chart_order: string;
  height: string;
  pandascore_id: number;
  yahoo_id: number;
  first_name: string;
  injury_body_part: string;
  swish_id: number;
  depth_chart_position: string;
  rotowire_id: number;
  search_rank: number;
  full_name: string;
  practice_participation: null;
  birth_state: string;
  injury_notes: string;
  active: boolean;
  team: string;
  sportradar_id: string;
  search_last_name: string;
  player_id: string;
}

export interface playerDataInterface {
  [playerId: string]: playerDetails;
}

declare module 'playerRawData' {
  const playerData: playerDataInterface;
  export = playerData;
}
