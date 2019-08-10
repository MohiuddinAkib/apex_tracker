import { Container } from 'inversify';
// service provider
import ServiceProvider from '@/providers/service.provider';
import IServiceProvider from '@/interfaces/IServiceProvider';
// Profile service
import IProfileService from '@/interfaces/IProfileService';
import ProfileService from '@/services/profile.service';
// service provider types
import serviceProviderTypes from '@/constants/serviceProviderTypes';

const appContainer = new Container();

appContainer
  .bind<IProfileService>(serviceProviderTypes.ProfileService)
  .to(ProfileService);

appContainer
  .bind<IServiceProvider>(serviceProviderTypes.ServiceProvider)
  .to(ServiceProvider);

const container = (): Container => appContainer;

export default container;
