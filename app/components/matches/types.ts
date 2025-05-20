export type BetOption = {
  label: string;
  odds: string;
  icon?: React.ReactNode;
};

export type BetType = {
  title: string;
  options: BetOption[];
};

export type Wager = {
  id: number;
  player_one: string;
  player_two: string;
  time_remaining: string;
  game_type: string;
  bets: Record<string, BetType>;
};

export type Tournament = {
  id: string;
  title: string;
  status: 'live' | 'upcoming' | 'completed';
  prizePool: string;
  participants: number;
  maxParticipants: number;
};

export type SelectedBet = {
  optionIndex: number;
  odds: string;
  matchInfo: {
    playerOne: string;
    playerTwo: string;
    betType: string;
  };
};

export type SelectedBets = Record<number, Record<string, SelectedBet>>;