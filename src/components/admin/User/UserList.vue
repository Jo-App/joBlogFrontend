<template>
  <v-content>
    <v-container style="max-width:100%;">
      <!-- 유저
      {{userList.list}}-->
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="user.list"
        item-key="name"
        show-select
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>유저 목록</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <div class="flex-grow-1"></div>
            <v-btn class="mx-2" fab dark small color="indigo" @click="userAddModal()">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
          <v-icon small @click="deleteItem(item)">delete</v-icon>
        </template>
      </v-data-table>
    </v-container>

    <v-dialog v-model="this.$store.state.user.modalView" persistent max-width="600px">
      <UserModal v-if="this.$store.state.user.modalView"></UserModal>
    </v-dialog>
    
  </v-content>
</template>

<script>
import Constant from "../../../constant.js";
import { mapState } from "vuex";
import _ from "lodash";

import UserAddModal from "./UserAddModal.vue";
import UserModal from "./UserModal.vue";

export default {
  components: {
    UserAddModal,
    UserModal
  },
  data() {
    return {
      selected: [],
      headers: [
        { text: "No", value: "No" },
        { text: "Email", value: "Email" },
        { text: "Name", value: "Name" },
        { text: "CreatedDate", value: "CreatedDate" },
        { text: "Actions", value: "action", sortable: false }
      ]
    };
  },
  computed: _.extend(mapState(["user"])),
  created() {
    this.getUserList();
  },
  methods: {
    getUserList() {
      this.$store.dispatch(Constant.USER_LIST);
    },
    userAddModal() {
      this.$store.commit(Constant.MODAL_OPEN, {
        target: "user",
        mode: "add"
      });
    },
    editItem(item) {
      console.log(item);
      this.$store.dispatch(Constant.USER_DETAIL, { no : item.No })
      // this.$store.commit(Constant.MODAL_OPEN, {
      //   target: "user",
      //   mode: "edit"
      // })
    },
    deleteItem(item) {
      var no = item.No;
      if (confirm( item.Name + " 계정을 삭제 하시겠습니까?") == true) {
        this.$store.dispatch(Constant.USER_DELETE, { no });
      } else {
        return false;
      }
    },
    beforeDestroy() {
      this.$store.commit(Constant.USER_LIST_RESET);
    }
  }
};
</script>