import IProfile from './IProfile';

export default interface IProfileService {
  getData: (platform: string, gamerID: string) => Promise<IProfile>;
}
