import routesConfig from "../config/routes";

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import HomePage from "../pages/Home";

const publicRoutes = [
  { path: routesConfig.home, component: HomePage, layout: HomePage },
  { path: routesConfig.login, component: LoginPage },
  { path: routesConfig.dashboard, component: DashboardPage },
];

export { publicRoutes };
