<template>
  <v-content>
    <section>
      <v-parallax :src="this.img2" height="200">
        <v-layout column align-center justify-center>
          <div
            class="headline white--text mb-3 text-xs-center"
          >Dev Story</div>
          <em>Kick-start your application today</em>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-5" align-center>
        <PhotoItemList
        ></PhotoItemList>
      </v-layout>
    </section>



  </v-content>
</template>

<script>
import PhotoItemList from "../common/PhotoItemList.vue";

import Constant from "../../../constant.js";
import { mapState } from "vuex";
import Paginate from "vuejs-paginate";
import _ from "lodash";

export default {
  components:{
    PhotoItemList
  },
  data(){
    return {
      img1 : process.env.VUE_APP_INDEX_IMG1,
      img2 : process.env.VUE_APP_INDEX_IMG2,
    }
  },
  mounted(){
    //console.log(process.env)
  }
}
</script>