import VueRouter from "vue-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Me from "../pages/Me";
import HomeIndex from "../pages/HomeIndex";

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '',
            component: Home,
            children: [
                {
                    path: '',
                    component: HomeIndex
                },
                {
                    path: 'me',
                    component: Me
                }
            ]
        }
    ]
})

export default router