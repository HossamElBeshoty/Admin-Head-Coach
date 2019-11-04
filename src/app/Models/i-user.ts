import DateTimeFormat = Intl.DateTimeFormat;

export interface IUser {
  id: string;
  email: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEndDateUtc: DateTimeFormat;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  userName: string;
  Discriminator: string;
}
