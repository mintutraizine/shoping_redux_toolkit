import axios from 'axios';
//export const BaseURL = `http://49.50.69.229:8800/api/v1`;//Preprod
//export const BaseURL = 'https://uatsfamt.godfreyphillips.co:3000/api/v1';//Preprod
export const BaseURL = 'https://fakestoreapi.com';//Preprod


const axiosinstance = axios.create({
  baseURL: BaseURL,
  headers: {
    Accept: "application/json",
    // "Content-Type": "multipart/form-data",
    //  "Content-Type": "application/x-www-form-urlencoded",
    //Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODAxLCJ1c2VybmFtZSI6InR5dUBtYWlsaW5hdG9yLmNvbSIsImV4cCI6MTY0ODAyMjA3MCwiZW1haWwiOiJ0eXVAbWFpbGluYXRvci5jb20iLCJvcmlnX2lhdCI6MTYyMjEwMjA3MH0.zkHW8Nxw2qGMNlghhXI_03lJ1QhXOFBzZ_KlFgkjG2M`
  },
  timeout: 1000 * 60,
});
// Add a request interceptor
axiosinstance.interceptors.request.use(
  config => {
    console.log('axios data config', config);
    return config;
  },
  error => Promise.reject(error),
);

axiosinstance.interceptors.response.use(
  response => {
    console.log('---------API RESPONSE', response);
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosinstance;
