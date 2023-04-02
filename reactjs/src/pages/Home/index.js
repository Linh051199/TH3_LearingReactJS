import { Link } from "react-router-dom";
import routesConfig from "../../config/routes";

function Home() {
  return (
    <ul>
      <li>
        <Link to={routesConfig.login}>login</Link>
      </li>
      <li>
        <Link to={routesConfig.dashboard}>Dashboard</Link>
      </li>
    </ul>
  );
}

export default Home;
