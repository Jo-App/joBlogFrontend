import axios from 'axios';
import CONF from '../Config.js';
import Constant from '../constant.js';
import state from '../store/state.js';

export default {

  //유저 목록
  async [Constant.USER_LIST](pageno, pagesize) {
    const res = await axios.get(CONF.USER_LIST, {
      params: {
        pageno: pageno,
        pagesize: pagesize
      }
    })
    return res;
  },

  //유저 등록
  [Constant.USER_SAVE](name, email, password) {
    return axios.post(CONF.USER_SAVE, {
      params: {
        name,
        email,
        password
      }
    })
  },

  //유저 상세
  [Constant.USER_DETAIL](no){
    return axios.post(CONF.USER_DETAIL, {
      params: {
        no
      }
    })
  },

  //유저 수정
  [Constant.USER_UPDATE](no, name, email, password) {
    return axios.post(CONF.USER_UPDATE, {
      params:{
        no,
        name,
        email,
        password
      }
    })
  },

  //유저 삭제
  [Constant.USER_DELETE](no) {
    return axios.post(CONF.USER_DELTE, {
      params: {
        no
      }
    })
  }


}