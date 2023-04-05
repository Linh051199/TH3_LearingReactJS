import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Fragment } from "react";
import "antd/dist/reset.css";

import "./App.css";
import { publicRoutes } from "./routes";
import DefaultLayout from "../src/views/DefaultLayout/DefaultLayout";
import routesConfig from "./config/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            } else Layout = DefaultLayout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          <Route
            path="*"
            element={<Navigate to={routesConfig.page404} replace />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
