import axios from 'axios';


export default {

  async filter (url, query) {
    return axios({
      method: 'get',
      url: `${url}/`,
      params: query,
    });
  },

};
