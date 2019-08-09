export default interface IProfileService {
  getData: (platform: string, gamerID: string) => void;
}
