import Constant from '../constant.js';

export default {
  [Constant.LIST_CODE]: (state, payload) => {
    state.contactlist = payload.contactlist;
  },

  //유저 목록
  [Constant.USER_LIST]: (state, payload) => {
    let result = payload.response.data; //db에서 조회된 값 저장
    let content = state.user.content; //아이템이 담길 변수
    let contents = state.user.contents; //목록을 쌓을 변수
    let keys = Object.keys(content);
    if(result.length > 0) {
      result.map(data => {
        for (var i in keys) {
          content[keys[i]] = data[keys[i]];
        }
        contents.push({
          ...content
        })
      })
    }
    //state 초기화
    for (var i in keys) {
      content[keys[i]] = '';
    }
    state.user.list = contents;
  },
  
  //유저목록 초기화
  [Constant.USER_LIST_RESET] : (state, payload) => {
    state.user.list.splice(0, state.user.list.length);
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