export interface IFormation {
  id?: string;
  teamId: string;
  matchId?: string;
  playerId: string;
  time: string;
  changedPlayerId?: string;
  status: number;
}
