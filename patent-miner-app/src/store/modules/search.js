import search from '@/api/search';


const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SEARCH_SET_TYPE = 'SEARCH_SET_TYPE';
export const SEARCH_SET_QUERY = 'SEARCH_SET_QUERY';
export const SEARCH_SET_PAGEINDEX = 'SEARCH_SET_PAGEINDEX';
export const SEARCH_SET_PAGESIZE = 'SEARCH_SET_PAGESIZE';


export default {
  namespaced: true,
  state: {
    searchState: {
      type: 'auto',
      query: '',
      pageIndex: 1,
      pageSize: 10,
    },
    pageSizeList: [10, 20, 50],
    started: false,
    result: null,
  },
  actions: {
    search({ commit, state }) {
      const model = state.searchState;
      search.search(model,
        (response) => {
          commit(SEARCH_SUCCESS, response);
        },
        (error) => {
          let strError = '';
          if (error.response === null) {
            strError = '接口错误，请联系管理员。';
          } else {
            strError = '服务器内部错误，请联系管理员。';
          }
          commit(SEARCH_FAILURE, strError);
        });
    },
  },
  mutations: {
    /* eslint no-param-reassign: ["error",
           { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
    [SEARCH_SET_TYPE](state, type) {
      state.started = true;
      state.searchState.type = type;
    },
    [SEARCH_SET_QUERY](state, query) {
      state.started = true;
      state.searchState.query = query;
    },
    [SEARCH_SET_PAGEINDEX](state, pageIndex) {
      state.started = true;
      state.searchState.pageIndex = pageIndex;
    },
    [SEARCH_SET_PAGESIZE](state, pageSize) {
      state.started = true;
      state.searchState.pageSize = pageSize;
    },
    [SEARCH_SUCCESS](state, response) {
      state.result = response.data;
    },
    [SEARCH_FAILURE](state, strError) {
      state.error = strError;
    },
  },
};
