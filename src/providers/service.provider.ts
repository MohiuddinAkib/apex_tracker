import { injectable, inject } from 'inversify';
import TYPES from '@/constants/serviceProviderTypes';
import IProfileService from '@/interfaces/IProfileService';
import IServiceProvider from '@/interfaces/IServiceProvider';

@injectable()
class ServiceProvider implements IServiceProvider {
  constructor(
    @inject(TYPES.ProfileService)
    private readonly _profileService: IProfileService
  ) {}

  public get profileService(): IProfileService {
    return this._profileService;
  }
}

export default ServiceProvider;
