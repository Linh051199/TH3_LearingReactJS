import { Link } from "react-router-dom";
import routesConfig from "../../config/routes";

function Home() {
  return (
    <ul>
      <li>
        <Link style={{ fontSize: "2rem" }} to={routesConfig.login}>
          Login
        </Link>
      </li>
      <li>
        <Link style={{ fontSize: "2rem" }} to={routesConfig.dashboard}>
          Dashboard
        </Link>
      </li>
      <li>
        <Link style={{ fontSize: "2rem" }} to={routesConfig.clock}>
          Clock
        </Link>
      </li>
      <li>
        <Link style={{ fontSize: "2rem" }} to={routesConfig.couter}>
          Couter
        </Link>
      </li>
    </ul>
  );
}

export default Home;
