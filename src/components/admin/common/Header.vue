<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item-group v-model="model" mandatory color="indigo">
          <v-list-item v-for="(item, i) in items" :key="i" @click="movePage(item.target)">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
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
      // { icon: 'dashboard', text: 'Dashboard', target : 'deviceList' },
      // { icon: 'settings', text: 'Settings', target : 'deviceList' },
      { icon: "people", text: "User", target: "userList" },
      { icon: "assignment", text: "Board", target: "adminBoard" }
    ],
    model: 1
  }),
  methods: {
    movePage(target) {
      this.$router.push({ name: target, query: { page: 1 } });
    }
  }
};
</script>

<style>
</style>