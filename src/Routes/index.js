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
import UpgradeiCloud from "../pages/Public/UpgradeiCloud";
import TreeModel from "../pages/Public/Tree3D";
import ConvertText from "../pages/Public/ConvertText";

//Public routes
const publicRoutes = [
  { path: "/", component: Home, title: "Trang chủ | Webdio" },
  { path: "/login", component: Login, title: "Đăng nhập | Webdio" },
  { path: "/get-started", component: Signup, title: "Đăng ký | Webdio" },
  { path: "/about", component: About, title: "Giới thiệu | Webdio" },
  { path: "/contact", component: Contact, title: "Liên hệ | Webdio" },
  { path: "/team", component: Contact, title: "Liên hệ | Webdio" },
  { path: "/feedback", component: Feedback, title: "Phản hồi | Webdio" },
  { path: "/services", component: Service, title: "Dịch vụ | Webdio" },
  { path: "/tree3d", component: TreeModel, title: "Dịch vụ | Webdio" },
  { path: "/upgrade/icloud", component: UpgradeiCloud, title: "Nâng cấp iCloud | Webdio" },
  { path: "/services/locketgold/guide", component: Guide, title: "Hướng dẫn LocketGold | Webdio" },
  { path: "/services/create/warranty", component: DangKyBaoHanh, title: "Đăng ký bảo hành | Webdio" },
  { path: "/services/find/warranty", component: TraCuuBaoHanh, title: "Tra cứu bảo hành | Webdio" },
  { path: "/converttext", component: ConvertText, title: "Chuyển đổi chữ | Webdio" },
];

//Private routes
const privateRoutes = [
  { path: "/auth/", component: AuthHome, title: "Trang chủ | Webdio" },
  { path: "/auth/profile", component: Profile, title: "Hồ sơ | Webdio" },
  { path: "/auth/service", component: AuthService, title: "Dịch vụ | Webdio" },
  { path: "/auth/warranty", component: TraCuuBaoHanh, title: "Tra cứu bảo hành | Webdio" },
  { path: "/auth/locketgold", component: LocketGold, title: "LocketGold | Webdio" },
  { path: "/auth/contact", component: Contact, title: "Liên hệ | Webdio" },
  { path: "/auth/feedback", component: Feedback, title: "Phản hồi | Webdio" },
  { path: "/auth/locketgold/guide", component: Guide, title: "Hướng dẫn LocketGold | Webdio" },
];

//Admin routes
const adminRoutes = [
  { path: "/admin/", component: AuthHome, title: "Trang chủ Admin | Webdio" },
  { path: "/admin/profile", component: Profile, title: "Hồ sơ Admin | Webdio" },
];

export { publicRoutes, privateRoutes, adminRoutes };
