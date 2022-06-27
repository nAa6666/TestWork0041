import AllNews from './components/AllNews.vue';
import CreatePost from './components/CreatePost.vue';
import EditPost from './components/EditPost.vue';
import ShowPost from "./components/ShowPost";

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllNews,
        props: true
    },
    {
        name: 'create',
        path: '/create',
        component: CreatePost
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditPost
    },
    {
        name: 'post',
        path: '/news/:id',
        component: ShowPost
    }
];
