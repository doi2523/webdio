
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Warranty from "../pages/Auth/Warranty";

import AuthHome from "../pages/Auth/Home";
import Profile from "../pages/Auth/Profile";
import AuthService from "../pages/Auth/Service";
import LocketGold from "../pages/Auth/LocketGold";
import Contact from "../pages/Auth/Contact";
import Guide from "../pages/Auth/Guide";

//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/get-started', component: Signup },
    { path: '/locketgold/guide', component: Guide },

]

//Private routes
const privateRoutes = [
    { path: '/auth/', component: AuthHome },
    { path: '/auth/profile', component: Profile },
    { path: '/auth/service', component: AuthService },
    { path: '/auth/warranty', component: Warranty },
    { path: '/auth/locketgold', component: LocketGold },
    { path: '/auth/contact', component: Contact },
    { path: '/auth/locketgold/guide', component: Guide },
]

export { publicRoutes, privateRoutes }