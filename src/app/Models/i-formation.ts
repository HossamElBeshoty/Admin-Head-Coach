export interface IFormation {
  id?: string;
  teamId: string;
  matchId?: string;
  playerId: string;
  time: Date;
  changedPlayerId?: string;
  status: number;
}
