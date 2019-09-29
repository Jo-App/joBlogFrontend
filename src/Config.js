var BASE_URL = "/api";

export default {
  LIST_CODE: "/api/boardProduct",

  //개발 게시판 목록 조회
  DEV_BOARD_LIST: BASE_URL + "/devBoardList",


  USER_LIST: BASE_URL + "/userList", //유저 목록 조회
  USER_SAVE: BASE_URL + "/userSave", //유저 저장
  USER_UPDATE: BASE_URL + "/userUpdate", //유저 수정
  USER_DELTE: BASE_URL + "/userDelete", //유저 삭제
}