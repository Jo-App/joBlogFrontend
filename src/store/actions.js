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
  [Constant.USER_LIST]: (store, payload) => {
    contactAPI.userList(1, 10)
      .then((response) => {
        store.commit(Constant.USER_LIST, {
          list: response
        });
      })
  },

  //유저 등록
  [Constant.USER_SAVE]: (store, payload) => {
    var name = payload.name;
    var email = payload.email;
    var password = payload.password;

    contactAPI.userSave(name, email, password)
      .then((response) => {
        console.log(response)
      })
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
        console.log(response)
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