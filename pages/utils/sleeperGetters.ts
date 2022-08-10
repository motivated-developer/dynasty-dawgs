// @ts-ignore
import playerRawData from '../playerData/playerData.json';

const leagueId = '846905968229986304';
const draftId = '846905968229986305';

export const getTeams = async () => {
  try {
    const response = await fetch(
      `https://api.sleeper.app/v1/league/${leagueId}/users`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (err) {
    return `Error! Error: ${err}`;
  }
};

export const getTeamData = async () => {
  try {
    const response = await fetch(
      `https://api.sleeper.app/v1/league/${leagueId}/rosters`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error! ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (err) {
    return `Error! ${err}`;
  }
};

export const getSingleTeam = async (teamId: string) => {
  const teamData = await getTeamData();

  const team = teamData.filter((currentTeam: { owner_id: string }) => {
    if (currentTeam.owner_id === teamId) return currentTeam;
  });

  return team;
};

export const getRoster = (teamId: string) => {
  const roster = getSingleTeam(teamId).then((team) => {
    const rosterRawData = team[0].players;
    const rosterData: string[] = [];
    const playerData: any = playerRawData;
    rosterRawData.forEach((playerCode: keyof typeof playerData) =>
      rosterData.push(
        playerData[playerCode].full_name ||
          playerData[playerCode].first_name + ' D/ST'
      )
    );
    return rosterData;
  });

  return roster;
};

export const getPicks = async () => {
  try {
    const response = await fetch(
      `https://api.sleeper.app/v1/draft/${draftId}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error! status:  ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (err) {
    console.log('Error: ', err);
  }
};

export const getTradedPicks = async () => {
  try {
    const response = await fetch(
      `https://api.sleeper.app/v1/draft/${draftId}/traded_picks`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error! status:  ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (err) {
    console.log('Error: ', err);
  }
};
