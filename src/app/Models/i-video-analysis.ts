export interface IVideoAnalysis {
  id?: string; // ID
  ai?: string; // AttackId
  fd?: string; // AttackDurationFliter
  ad?: string; // AttackDuration
  tf: string; // TimeFrom
  tt: string; // TimeTo
  d: string; // Duration
  ti: string; // TimeInVideo
  aa: string; // ActionsOfTeamA
  ab: string; // ActionsOfTeamB
  ca: string; // TacticsOfTeamA
  cb: string; // TacticsOfTeamB
  pa: string; // PlayersA
  pb: string; // PlayersB
  ta: string; // TeamA
  tb: string; // TeamB
  ha?: string; // ChildActionOfA
  hb?: string; // ChildActionOfB
  sa?: string; // Start Action Of Team A
  sb?: string; // Start Action Of Team B
  ea?: string; // End Action Of Team A
  eb?: string; // End Action Of Team B
}

export interface IPostAnalyze {
  timeFrom?: string;
  timeTo?: string;
  duration?: number;
  timeInVideo?: number;
  teamAId?: string;
  playerAId?: string;
  actionOfTeamA?: string;
  tacticOfTeamA?: string;
  teamBId?: string;
  playerBId?: string;
  actionOfTeamB?: string;
  tacticOfTeamB?: string;
  childActionOfTeamA?: string;
  childActionOfTeamB?: string;
  startActionOfTeamA?: string;
  startActionOfTeamB?: string;
  endActionOfTeamA?: string;
  endActionOfTeamB?: string;
}
