import { injectable } from 'inversify';
import IProfileService from '@/interfaces/IProfileService';

@injectable()
class ProfileService implements IProfileService {}

export default ProfileService;
