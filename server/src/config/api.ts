import Axios from 'axios';
import config from 'config';
// Setting default base url
Axios.defaults.baseURL = config.get('TRACKER_NETWORK_API_URL');
// Setting auth header
Axios.defaults.headers.common['TRN-Api-Key'] = config.get(
  'TRACKER_NETWORK_API_KEY'
);

export default Axios;
