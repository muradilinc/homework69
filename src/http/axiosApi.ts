import axios from 'axios';

const dynamicAxios = (dynamicUrl: string) => {
  return axios.create({
    baseURL: dynamicUrl,
  });
};


export default dynamicAxios;