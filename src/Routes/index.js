//Public
import Home from "../pages/Public/Home";
import Login from "../pages/Public/Login";
import Signup from "../pages/Public/Signup";
import DangKyBaoHanh from "../pages/Public/DangKyBaoHanh";
import Service from "../pages/Public/Services";
//Auth
import TraCuuBaoHanh from "../pages/Auth/TraCuuBaoHanh";
import AuthHome from "../pages/Auth/Home";
import Profile from "../pages/Auth/Profile";
import AuthService from "../pages/Auth/Service";
import LocketGold from "../pages/Auth/LocketGold";
import Contact from "../pages/Public/Contact";
import Guide from "../pages/Auth/GuideLocketGold";
//Admin
import ListWarranty from "../pages/Admin/ListWarranty";
import About from "../pages/Public/About";
import Feedback from "../pages/Public/Feedback";

//Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/get-started", component: Signup },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/feedback", component: Feedback },

  { path: "/services", component: Service },
  { path: "/services/locketgold/guide", component: Guide },
  { path: "/services/create/warranty", component: DangKyBaoHanh },
  { path: "/services/find/warranty", component: TraCuuBaoHanh },
];

//Private routes
const privateRoutes = [
  { path: "/auth/", component: AuthHome },
  { path: "/auth/profile", component: Profile },
  { path: "/auth/service", component: AuthService },
  { path: "/auth/warranty", component: TraCuuBaoHanh },
  { path: "/auth/locketgold", component: LocketGold },
  { path: "/auth/contact", component: Contact },
  { path: "/auth/feedback", component: Feedback },
  { path: "/auth/locketgold/guide", component: Guide },
];

//admin routes
const adminRoutes = [
  { path: "/admin/", component: AuthHome },
  { path: "/admin/profile", component: Profile },
];

export { publicRoutes, privateRoutes, adminRoutes };
