import axios from 'axios';
import CONF from '../Config.js';
import Constant from '../constant.js';

export default {

  [Constant.LIST_CODE]: function (pageno, pagesize) {
    return axios.get('/api/boardResult', {
      params: {
        pageno: pageno,
        pagesize: pagesize
      }
    })
  },

  //async 처리 해줘야됨
  [Constant.DEV_BOARD_LIST](pageno, pagesize) {
    return axios.get(CONF.DEV_BOARD_LIST, {
      params: {
        pageno: pageno,
        pagesize: pagesize
      }
    })
  },

  //유저 목록
  [Constant.USER_LIST](pageno, pagesize) {
    return axios.get(CONF.USER_LIST, {
      params: {
        pageno: pageno,
        pagesize: pagesize
      }
    })
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

  //유저 수정
  [Constant.USER_UPDATE]() {

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