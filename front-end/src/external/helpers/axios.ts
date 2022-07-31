import axios, { AxiosRequestConfig } from 'axios';

export default {
  async axiosGet(url: string, header: AxiosRequestConfig): Promise<any> {
    try {
      const response = await axios.get(url, header);
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  async axiosPost(url: string, body: any, options: any) {
    try {
      const response = await axios.post(url, body, options);
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  async axiosPut(url: string, body: any, options: any) {
    try {
      const response = await axios.put(url, body, options);
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  async axiosPatch(url: string, body: any, options: any) {
    try {
      const response = await axios.patch(url, body, options);
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  async axiosDelete(url: string, options: any) {
    try {
      const response = await axios.delete(url, options);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
};
