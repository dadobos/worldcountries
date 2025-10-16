// ...existing code...
import axios from 'axios';

const actions = {
  async getCountries({ commit }) {
    const fields = 'name,cca3,population,region,capital,flags';
    const urlV3 = 'https://restcountries.com/v3.1/all?fields=' + fields;
    const urlV2 = 'https://restcountries.com/v2/all';

    const mapV3 = function (data) {
      return data.map(function (c) {
        return {
          name: (c.name && c.name.common) ? c.name.common : c.name,
          alpha3Code: c.cca3 || c.alpha3Code,
          population: c.population,
          region: c.region,
          capital: Array.isArray(c.capital) ? c.capital[0] : c.capital,
          flag: (c.flags && (c.flags.png || c.flags.svg)) || c.flag
        };
      });
    };

    try {
      const res = await axios.get(urlV3);
      commit('SET_COUNTRIES', mapV3(res.data));
      return;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('restcountries v3 (fields) request failed:', {
        message: err.message,
        status: err.response && err.response.status,
        responseData: err.response && err.response.data
      });
    }

    // fallback to v2 endpoint
    try {
      const res2 = await axios.get(urlV2);
      commit('SET_COUNTRIES', res2.data);
      return;
    } catch (err2) {
      // eslint-disable-next-line no-console
      console.error('restcountries v2 fallback failed:', {
        message: err2.message,
        status: err2.response && err2.response.status,
        responseData: err2.response && err2.response.data
      });
    }
  },
};
export default actions;