import Vue from 'vue';
import VueRouter from 'vue-router';

import user from './user.js';
import admin from './admin.js';

Vue.use(VueRouter);

const routes = [...user, ...admin]

export const router = new VueRouter({
  //mode: 'history',
  routes
  // get rid of #
});