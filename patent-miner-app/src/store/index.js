import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import account from './modules/account';
import patent from './modules/patent';
import applicant from './modules/applicant';
import search from './modules/search';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    account,
    patent,
    applicant,
    search,
  },
  strict: debug,
});

