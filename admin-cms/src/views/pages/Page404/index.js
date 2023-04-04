import { Button, Result } from "antd";
import { Link } from "react-router-dom";

import routerConfig from "../../../config/routes";

function Page404() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={routerConfig.home}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
}

export default Page404;
