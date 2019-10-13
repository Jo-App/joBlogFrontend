import Constant from '../constant.js';

export default {
  [Constant.LIST_CODE]: (state, payload) => {
    state.contactlist = payload.contactlist;
  },

  //유저 목록
  [Constant.USER_LIST]: (state, payload) => {
    state.user.list = payload.list;
  },

  //유저 상세
  [Constant.USER_DETAIL]: (state, payload) => {
    state.user.content = payload.detailData;
  },

  [Constant.DEV_BOARD_LIST]: (state, payload) => {
    state.boardList = payload.list;
  },

  //모달 열기
  [Constant.MODAL_OPEN]: (state, payload) => {
    state[payload.target].modalView = true;
    state[payload.target].mode = payload.mode;
  },

  //모달 닫기
  [Constant.MODAL_CLOSE]: (state, payload) => {
    state[payload.target].modalView = false;
    state[payload.target].mode = '';
    var keys = Object.keys(state[payload.target].content);
    for (var i in keys) {
      state[payload.target].content[keys[i]] = '';
    }
  },
}