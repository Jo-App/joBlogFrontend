<template>
    <div>
        test
      {{contactlist}}
    </div>
</template>

<script>
import Constant from "../constant.js";
import { mapState } from "vuex";
import Paginate from "vuejs-paginate";
import _ from "lodash";


export default {
  computed: _.extend(
    {
      totalpage() {
        var totalcount = this.contactlist.totalcount;
        var pagesize = this.contactlist.pagesize;
        return Math.floor((totalcount - 1) / pagesize) + 1;
      }
    },
    mapState(["contactlist"])
  ),
  mounted(){
      this.$store.dispatch(Constant.LIST_CODE, { pageno: 1 });
  },
  
};
</script>

<style>

</style>