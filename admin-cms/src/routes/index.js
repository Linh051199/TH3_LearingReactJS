import routesConfig from "../config/routes";

import HomePage from "../views/pages/Home";
import Login from "../views/pages/Login";
import Dashboard from "../views/pages/Dashboard";
import Page404 from "../views/pages/Page404";

const publicRoutes = [
  { path: routesConfig.home, component: HomePage },
  { path: routesConfig.login, component: Login },
  { path: routesConfig.dashboard, component: Dashboard },
  { path: routesConfig.page404, component: Page404, layout: Page404 },
];

export { publicRoutes };
