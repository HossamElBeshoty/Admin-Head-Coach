export interface IVideoAnalysis {
  id: string;
  ai: string;
  fd: string;
  ad: string;
  tf: string;
  tt: string;
  d: string;
  ti: string;
  aa: string;
  ab: string;
  ca: string;
  cb: string;
  pa: string;
  pb: string;
  ta: string;
  tb: string;
  ha?: string;
  hb?: string;
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
}
