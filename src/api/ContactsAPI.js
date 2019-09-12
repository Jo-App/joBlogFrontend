import axios from 'axios';
import CONF from '../Config.js';
import Constant from '../constant.js';

export default {

  [Constant.LIST_CODE] : function (pageno, pagesize) {
    return axios.get('/api/boardResult', {
      params: {
        pageno: pageno,
        pagesize: pagesize
      }
    })
  },

  // async [Constant.LIST_CODE] () {
  //   const res = await axios.post('http://localhost:5555/graphql', {
  //     query: `{
  //       getCodes {
  //         No
  //         UpCodeId{
  //           CodeId
  //         }
  //         CodeId
  //         CodeName
  //         Description
  //         CreatedDate
  //         ModifiedDate
  //       }
  //     }`
  //   })
  //   return res.data.data
  // },

  //async 처리 해줘야됨
  [Constant.DEV_BOARD_LIST] (pageno, pagesize) {
    return axios.get(CONF.DEV_BOARD_LIST, {
      params: {
        pageno: pageno,
        pagesize: pagesize
      }
    })
  },

  [Constant.USER_LIST] (pageno, pagesize) {
    return axios.get(CONF.USER_LIST, {
      params: {
        pageno: pageno,
        pagesize: pagesize
      }
    })
  }

  
}
