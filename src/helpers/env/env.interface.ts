export interface IEnv {
  getAppPort(): number;
  getJwtSecret(): string;
  getJwtExpirationTime(): string;
}
