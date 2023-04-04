import routesConfig from "../config/routes";

import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import HomePage from "../pages/Home";
import ClockPage from "../pages/life-circle/ClockPage";
import Couter from "../pages/redux/Couter";

const publicRoutes = [
  { path: routesConfig.home, component: HomePage, layout: HomePage },
  { path: routesConfig.login, component: LoginPage },
  { path: routesConfig.dashboard, component: DashboardPage },
  { path: routesConfig.clock, component: ClockPage },
  { path: routesConfig.couter, component: Couter },
];

export { publicRoutes };
