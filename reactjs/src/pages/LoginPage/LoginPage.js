import { useNavigate } from "react-router-dom";
import { useState } from "react";
import validator from "validator";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./LoginPage.module.scss";
import routerConfig from "../../config/routes";

const cx = classNames.bind(styles);
function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  // console.log("🚀 ~ userName:", userName);
  // console.log("🚀 ~ password:", password);
  // console.log("🚀 ~ password:", email);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (userName === "") {
      setErrorUserName("Please enter your UserName!");
    } else if (userName.length < 3) {
      setErrorUserName("Your UserName more than 3 characters!");
    } else if (password === "") {
      setErrorPassword("Please enter your Password!");
    } else if (password.length < 3) {
      setErrorPassword("Your Password more than 3 characters!");
    } else if (!validator.isEmail(email)) {
      setErrorEmail("Your email is not correct!");
    } else {
      setErrorUserName("");
      setErrorPassword("");
      navigate(routerConfig.home);
    }
  };

  return (
    <div className={cx("login-container")}>
      <h2 className={cx("title")}>Login</h2>
      <div className={cx("userName")}>
        <div>
          <label className={cx("lable")} htmlFor="">
            UserName:{" "}
          </label>
          <input
            className={cx("input-userName", {
              error: errorUserName,
            })}
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
              setErrorUserName("");
            }}
          />
        </div>

        <span className={cx("error-message")}>{errorUserName}</span>
      </div>
      <div className={cx("password")}>
        <div>
          <label className={cx("lable")} htmlFor="">
            Password:{" "}
          </label>
          <input
            className={cx("input-password", {
              error: errorPassword,
            })}
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorPassword("");
            }}
          />
        </div>
        <span className={cx("error-message")}> {errorPassword}</span>
      </div>
      <div className={cx("email")}>
        <div>
          <label className={cx("lable")} htmlFor="">
            Email:{" "}
          </label>
          <input
            className={cx("input-email", {
              error: errorEmail,
            })}
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorEmail("");
            }}
          />
        </div>
        <span className={cx("error-message")}> {errorEmail}</span>
      </div>
      <br />
      <button className={cx("btn-submit")} onClick={handleSubmit}>
        Login
      </button>
      <Link className={cx("btn-goHomePage")} to={routerConfig.home}>
        Go HomePage
      </Link>
    </div>
  );
}

export default LoginPage;
