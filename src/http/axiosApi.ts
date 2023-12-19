import axios from 'axios';
import {MAIN_URL} from '../constansts/contansts';

const axiosApi = axios.create({
  baseURL: MAIN_URL,
});

export default axiosApi;