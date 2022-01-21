import axios from 'axios';

const actions = {
  async getCountries({ commit }) {
    const url = 'https://restcountries.com/v2/all';
    await axios
      .get(url)
      .then((response) => {
        commit('SET_COUNTRIES', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export default actions;
