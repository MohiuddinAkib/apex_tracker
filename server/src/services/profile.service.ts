import { injectable } from 'inversify';
import api from '@/config/api';
import IProfileService from '@/interfaces/IProfileService';
import { AxiosError, AxiosResponse } from 'axios';
import { profileDebug } from '@/utils/debug';
import IProfile from '@/interfaces/IProfile';

@injectable()
class ProfileService implements IProfileService {
  getData = async (platform: string, gamerID: string): Promise<IProfile> => {
    const response: AxiosResponse = await api.get<IProfile>(
      `/profile/${platform}/${gamerID}`
    );

    return response.data;
  };
}

export default ProfileService;
