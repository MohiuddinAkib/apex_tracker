// file inversify.config.ts

import { Container } from 'inversify';
import ProfileService from '@/services/profile.service';
import IProfileService from '@/interfaces/IProfileService';
import serviceProviderTypes from '@/constants/serviceProviderTypes';

const appContainer = new Container();

appContainer
  .bind<IProfileService>(serviceProviderTypes.ProfileService)
  .to(ProfileService);

export default appContainer;
