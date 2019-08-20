<template>
  <v-toolbar class="white">
    <v-toolbar-title v-text="'JoBlog'" @click="goPage('index')"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat to="/">My Story</v-btn>
      <v-btn flat to="/">Dev Story</v-btn>
      <v-btn flat to="/contact">Contact</v-btn>
      <v-btn icon>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      goPage(target){
        console.log(target)
        this.$router.push({ name: target });
      }
    }
  }
</script>