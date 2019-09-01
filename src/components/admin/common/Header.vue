<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <template v-for="item in items">
          <v-list-item @click="movePage(item.target)">
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>JoBlog Admin</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { icon: 'dashboard', text: 'Dashboard', target : 'deviceList' },
      { icon: 'settings', text: 'Settings', target : 'deviceList' },
      { icon: 'assignment', text: 'Board', target : 'adminBoard' },
    ]
  }),
  methods:{
    movePage(target){
      this.$router.push({ name: target, query: { page: 1 } });
    }
  }
};
</script>

<style>
</style>