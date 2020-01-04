export interface IPlayer {
  id?: string;
  nameAr: string;
  nameEn: string;
  nickNameAr: string;
  nickNameEn: string;
  clubNameAr?: string;
  clubNameEn?: string;
  teamId: string;
  nationalityId?: string;
  birthDate?: Date;
  height?: number;
  postions?: number;
  teamNameAr?: string;
  teamNameEn?: string;
  preferred?: number;
  gender?: number;
  playerNum?: number;
  imagePath?: string;
  positionName?: string;
}
