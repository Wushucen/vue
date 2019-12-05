import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
        path: '/index',
        component: ()=>import('../layouts/Index.vue'),
        children:[
                {
                    path: 'index',
                    name :'index',
                    meta: {'A': 'index'},
                    component: ()=>import('../views/index/index.vue')
                }
            ]
        },
        {
            path: '*',
            redirect: {
                name: 'index'
            }
        }
    ]
});

export default router;












           