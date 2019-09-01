import Header from '../components/admin/common/Header.vue';
import Footer from '../components/admin/common/Footer.vue';
import Index from '../components/admin/Index.vue';


export default
[
    {
      path: '/admin/index',
      name: 'adminIndex',
      components:{
        header: Header,
        content: Index,
        footer: Footer
      },
    },
];
