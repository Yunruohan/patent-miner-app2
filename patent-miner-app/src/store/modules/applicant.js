import applicant from '../../api/applicant';

export const SHOW_SUCCESS = 'SHOW_SUCCESS';
export const SHOW_FAILURE = 'SHOW_FAILURE';
export const SHOW_SET_ID = 'SHOW_SET_ID';
export const SHOW_SET_NAME = 'SHOW_SET_NAME';
export const SHOW_SET_ENNAME = 'SHOW_SET_ENNAME';
export const SHOW_SET_ADDRESS = 'SHOW_SET_ADDRESS';
export const SHOW_SET_POSTCODE = 'SHOW_SET_POSTCODE';


export default {
  namespace: true,
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    applicant: {
      namespace: true,
      // 前端数据库
      state: {
        id: '',
        name: '',
        enName: '',
        address: '',
        postCode: '',
      },
      // 与后端数据库进行交互
      actions: {
        applicant({ commit, state }) {
          commit(SHOW_FAILURE, '');
          const model = {
            id: state.id,
            name: state.name,
            enName: state.enName,
            address: state.address,
            postCode: state.Abstract,
          };
          applicant.show(model,
            () => {
              commit(SHOW_SUCCESS);
            },
            (error) => {
              let strError = '';
              if (error.response === null) {
                strError = '接口错误，请联系管理员。';
              } else {
                strError = '服务器内部错误，请联系管理员。';
              }
              commit(SHOW_FAILURE, strError);
            },
          );
        },
      },
      // 对数据状态的改变
      mutations: {
        /* eslint no-param-reassign: ["error",
           { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
        [SHOW_SUCCESS](state) {
          state.show = true;
        },
        [SHOW_FAILURE](state, strError) {
          state.error = strError;
          state.show = false;
        },
        [SHOW_SET_ID](state, id) {
          state.id = id;
        },
        [SHOW_SET_NAME](state, name) {
          state.name = name;
        },
        [SHOW_SET_ENNAME](state, enName) {
          state.enName = enName;
        },
        [SHOW_SET_ADDRESS](state, address) {
          state.address = address;
        },
        [SHOW_SET_POSTCODE](state, postCode) {
          state.postCode = postCode;
        },
      },
    },
  },
};
