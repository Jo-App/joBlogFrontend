import contactAPI from "../api/ContactsAPI.js";
import Constant from "../constant.js";

export default {
  
  //유저 목록
  [Constant.USER_LIST]: async (store, payload) => {
    const response = await contactAPI.userList(1, 10);
    await store.commit(Constant.USER_LIST, { response });
  },

  //유저 등록
  [Constant.USER_SAVE]: async (store, payload) => {
    var name = payload.name;
    var email = payload.email;
    var password = payload.password;

    const response = await contactAPI.userSave(name, email, password);
    if(response.data){
      alert("유저 등록 완료");
      store.dispatch(Constant.USER_LIST);
      store.commit(Constant.MODAL_CLOSE, { target: "user" });
    } else {
      alert("유저 등록 실패");
    }
  },

  //유저 상세
  [Constant.USER_DETAIL]: (store, payload) => {
    var no = payload.no;
    contactAPI.userDetail(no)
    .then((response) => {
      if(response.status == 200){
        store.commit(Constant.USER_DETAIL, { detailData : response.data[0] });
        store.commit(Constant.MODAL_OPEN, { target : "user", mode: "edit" })
      } else {
        alert("조회 실패");
      }
    })
  },

  //유저 수정
  [Constant.USER_UPDATE]: async(store, payload) => {
    var no = payload.no;
    var name = payload.name;
    var email = payload.email;
    var password = payload.password; 
    const response = await contactAPI.userUpdate(no, name, email, password);
    if(response.data){
      console.log(response)
    }

  },

  //유저 삭제
  [Constant.USER_DELETE]: async (store, payload) => {
    var no = payload.no;
    const response = await contactAPI.userDelete(no);
    if(response.data){
      store.dispatch(Constant.USER_LIST);
      alert("삭제 완료");
    } else {
      store.dispatch(Constant.USER_LIST);
      alert("삭제 실패");
    }
  },

}