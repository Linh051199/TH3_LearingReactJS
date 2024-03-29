import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import routesConfig from "../../config/routes";
import styles from "./DashBoardPage.module.scss";

const cx = classNames.bind(styles);

function DashboardPage() {
  return (
    <div>
      <h2>DashboardPage</h2>
      <Link className={cx("btn-goHomePage")} to={routesConfig.home}>
        Go HomePage
      </Link>
    </div>
  );
}

export default DashboardPage;
