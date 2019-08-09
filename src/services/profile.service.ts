import { injectable } from 'inversify';
import api from '@/config/api';
import IProfileService from '@/interfaces/IProfileService';
import { AxiosError, AxiosResponse } from 'axios';
import { profileDebug } from '@/utils/debug';

@injectable()
class ProfileService implements IProfileService {
  getData = async (platform: string, gamerID: string) => {
    const response: AxiosResponse = await api.get(
      `/profile/${platform}/${gamerID}`
    );

    return response.data;
  };
}

export default ProfileService;
