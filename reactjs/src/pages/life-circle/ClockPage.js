// import {  } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import routesConfig from "../../config/routes";
import styles from "./Clock.module.scss";
import ShowTimer from "./ShowTimer";

const cx = classNames.bind(styles);

function ClockPage() {
  return (
    <div>
      <h2>ClockPage</h2>
      <ShowTimer />
      <Link className={cx("btn-goHomePage")} to={routesConfig.home}>
        Go HomePage
      </Link>
    </div>
  );
}

export default ClockPage;
