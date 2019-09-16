import Header from '../components/user/common/Header.vue';
import Footer from '../components/user/common/Footer.vue';
import Index from '../components/user/Index.vue';
import Contact from '../components/user/Contact.vue';

import Test from '../components/user/Test.vue';
import test2 from '../components/user/test2.vue';
import test3 from '../components/user/test3.vue';
import DevBoardList from '../components/user/DevBoardList.vue';

export default [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    components: {
      header: Header,
      content: Index,
      footer: Footer
    },
  },
  {
    path: '/contact',
    name: 'contact',
    components: {
      header: Header,
      content: Contact,
      footer: Footer
    }
  },
  {
    path: '/test',
    name: 'test',
    components: {
      header: Header,
      content: Test,
      footer: Footer,
    },
    meta: {
      authRequired: true
    }
  },
  {
    path: '/test2',
    name: 'test2',
    components: {
      content: test2,
    },
  },
  {
    path: '/test3',
    name: 'test3',
    components: {
      content: test3,
    },
  },
  {
    path: '/devBoardList',
    name: 'devBoardList',
    components: {
      content: DevBoardList,
    },
  }
];