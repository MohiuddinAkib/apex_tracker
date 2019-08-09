import { Response, Request, NextFunction } from 'express';
import { profileDebug } from '@/utils/debug';
import container from '@/dependencyRegisterer';
import IServiceProvider from '@/interfaces/IServiceProvider';
import serviceProviderTypes from '@/constants/serviceProviderTypes';

// resolving service
const profileService = container().get<IServiceProvider>(
  serviceProviderTypes.ServiceProvider
).profileService;

export const show = async (req: Request, res: Response, next: NextFunction) => {
  const { platform, gamerId } = req.params;

  const data = await profileService.getData(platform, gamerId);

  res.send(data);
};
