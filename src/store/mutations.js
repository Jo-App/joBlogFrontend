import Constant from '../constant.js';

export default {
  [Constant.LIST_CODE]: (state, payload) => {
    state.contactlist = payload.contactlist;
  },

  //유저 목록
  [Constant.USER_LIST]: (state, payload) => {
    state.user.list = payload.list;
  },

  [Constant.DEV_BOARD_LIST]: (state, payload) => {
    state.boardList = payload.list;
  },

  //모달 열기
  [Constant.MODAL_OPEN]: (state, payload) => {
    state[payload.target][payload.name] = true;
  },

  //모달 닫기
  [Constant.MODAL_CLOSE]: (state, payload) => {
    state[payload.target][payload.name] = false;
  },
}