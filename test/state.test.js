import actions from '../src/store/actions';
import getters from '../src/store/getters';
import mutations from '../src/store/mutations';
import trueState from '../src/store/state';

const countries = [
  {
    name: 'Colombia',
    capital: 'Bogotá',
  },
  {
    name: 'Romania',
    capital: 'Bucharest',
  },
];
const state = { countries };
let url = '';
let mockError = false;

jest.mock('axios', () => ({
  get: (_url) => {
    return new Promise((resolve) => {
      if (mockError) throw Error();
      url = _url;
      resolve(true);
    });
  },
}));

const commit = jest.fn();
commit.mockReturnValue('SET_COUNTRIES', countries);

describe('actions', () => {
  actions.getCountries({ commit });

  it('url check', () => {
    expect.assertions(2);
    expect(url).toBeDefined();
    expect(url).toBe('https://restcountries.eu/rest/v2/all');
  });

  it('commit', () => {
    expect.assertions(2);
    expect(commit).toBeCalled();
    expect(commit).toHaveBeenCalledTimes(1);
  });
});

describe('getters', () => {
  const testGetters = getters.allCountries(state);
  it('returns countries', () => {
    expect.assertions(2);
    expect(testGetters).toBeDefined();
    expect(testGetters).toEqual(state.countries);
  });
});

describe('mutations', () => {
  it('adds countries to the state', () => {
    expect.assertions(2);
    mutations.SET_COUNTRIES(state, countries);
    expect(mutations).toBeDefined();
    expect(state).toEqual({
      countries,
    });
  });
});
describe('state', () => {
  it('state exists and has countries', () => {
    expect.assertions(3);
    expect(trueState).toBeDefined();
    expect(trueState).toHaveProperty('countries');
    expect(trueState).not.toHaveProperty('cats');
  });
});
