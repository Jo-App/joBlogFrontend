import Constant from '../constant.js';

export default {
    [Constant.LIST_CODE] : (state, payload) => {
        state.contactlist = payload.contactlist;
    },
    [Constant.DEV_BOARD_LIST] : (state, payload) => {
        state.boardList = payload.list;
    },
}