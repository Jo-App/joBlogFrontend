import contactAPI from '../api/ContactsAPI.js';
import Constant from '../constant.js';

export default {
  [Constant.LIST_CODE]: (store, payload) => {
    var pageno;
    if (typeof payload === "undefined" || typeof payload.pageno === "undefined")
      pageno = 1;
    else
      pageno = payload.pageno;
    var pagesize = store.state.contactlist.pagesize;
    contactAPI.listCode(pageno, pagesize)
      .then((response) => {
        console.log(response);
        store.commit(Constant.LIST_CODE, {
          contactlist: response
        });
      })
  },

  //유저 목록
  [Constant.USER_LIST]: async (store, payload) => {
    await store.commit("userReset")
    const response = await contactAPI.userList(1, 10);
    await store.commit(Constant.USER_LIST, { list: response });
  },

  //유저 등록
  [Constant.USER_SAVE]: async (store, payload) => {
    var name = payload.name;
    var email = payload.email;
    var password = payload.password;

    const response = await contactAPI.userSave(name, email, password);
    if(response.data){
      store.dispatch(Constant.USER_LIST);
      store.commit(Constant.MODAL_CLOSE, { target: "user" });
    }
  },

  //유저 상세
  [Constant.USER_DETAIL]: (store, payload) => {
    
    var No = payload.No;
    contactAPI.userDetail(No)
    .then((response) => {
      if(response.status == 200){
        store.commit(Constant.USER_DETAIL, { detailData : response.data[0] });
        store.commit(Constant.MODAL_OPEN, { target : "user", mode: "edit" })
      } else {
        alert("조회 실패");
      }
    })
  },

  //유저 삭제
  [Constant.USER_DELETE]: (store, payload) => {
    var no = payload.no;
    contactAPI.userDelete(no)
      .then((response) => {
        if(response.data){
          alert("삭제 완료");
        } else {
          alert("삭제 실패");
        }
      })
  },

  [Constant.DEV_BOARD_LIST]: (store, payload) => {
    console.log("test");
    contactAPI.devBoardList(1, 10)
      .then((response) => {
        console.log(response);
        store.commit(Constant.DEV_BOARD_LIST, {
          list: response
        });
      })
  },
}