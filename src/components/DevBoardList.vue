<template>
    <div>
      
      {{boardList.data}}
    </div>
</template>

<script>
import Constant from "../constant.js";
import { mapState } from "vuex";
import Paginate from "vuejs-paginate";
import _ from "lodash";

export default {
  computed: _.extend(
    mapState(["boardList"])
  ),
  created(){
    this.$store.dispatch(Constant.DEV_BOARD_LIST);
  },
  
};
</script>

<style>

</style>