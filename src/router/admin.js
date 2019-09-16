import Header from '../components/admin/common/Header.vue';
import Footer from '../components/admin/common/Footer.vue';

import Index from '../components/admin/Index.vue';
import Board from '../components/admin/Board/Index.vue';

import UserList from '../components/admin/User/UserList.vue';


export default [{
    path: '/admin/index',
    name: 'adminIndex',
    components: {
      header: Header,
      content: Index,
      footer: Footer
    },
  },
  {
    path: '/admin/userList',
    name: 'userList',
    components: {
      header: Header,
      content: UserList,
      footer: Footer
    },
  },
  {
    path: '/admin/board',
    name: 'adminBoard',
    components: {
      header: Header,
      content: Board,
      footer: Footer
    },
  }
];