
import Vue from 'vue';
import VueRouter from 'vue-router';

import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';
import Index from '../components/Index.vue';
import Contact from '../components/Contact.vue';

import Test from '../components/Test.vue';
import test2 from '../components/test2.vue';
import test3 from '../components/test3.vue';
import DevBoardList from '../components/DevBoardList.vue';



Vue.use(VueRouter);

const routes = [
      {  
        path: '/', 
        redirect:'/index'
      },
      {
        path: '/index',
        name: 'index',
        components:{
          header: Header,
          content: Index,
          footer: Footer
        },
      },
      {
        path: '/contact',
        name: 'contact',
        components:{
          header: Header,
          content: Contact,
          footer: Footer
        }
      },
      {
        path: '/test',
        name: 'test',
        components:{
          header: Header,
          content: Test,
          footer: Footer,
        },
        meta: { authRequired : true }
      },
      {
        path: '/test2',
        name: 'test2',
        components:{
          content: test2,
        },
      },
      {
        path: '/test3',
        name: 'test3',
        components:{
          content: test3,
        },
      },
      {
        path: '/devBoardList',
        name: 'devBoardList',
        components:{
          content: DevBoardList,
        },
      }
    ]

  export const router = new VueRouter({
    //mode: 'history',
    routes
    // get rid of #
  });
  