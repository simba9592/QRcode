import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { userActions } from "./../../redux/user";
import { Row, Col } from "antd";
import "./Signup.css";
import "antd/dist/antd.css";

const Signup = ({ signUpRequest, isAuth, history, status, companyName }) => {
  
  useEffect(() => {
    if (companyName) {
      document.title = companyName;
    }   
    let link = document.querySelector("link[rel~='icon']");
    link.href = "/assets/images/logo.png";
  }, [companyName]);

  useEffect(() => {
    if (isAuth) {
      history.push("/settings");
    }
  }, [isAuth]);

  useEffect(() => {
    if (status === "request_pending") {
      history.push("/login");
    } else if (status === "sign_up_request_success") {
      history.push("/settings");
    } else if (status === "sign_up_request_fail") {
    }
  }, [status]);

  const onClickForSignUp = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("username").value;
    signUpRequest({ email, password, name, isAdmin : false });
  };
  
  const onClickForSignin = (e) => {
    history.push("/login");
  }

  return (
    <div className="loginContainer">
      <Row style={{ height: "100%" }}>
        <Col span={4}>col-10</Col>
        <Col span={10} style={{ height: "100%" }}>
          <img
            src="/assets/images/logo_black.png"
            style={{
              width: "100%",
              height: "100%",
              paddingTop: "100px",
              paddingBottom: "100px",
              objectFit: "contain",
            }}
          />
        </Col>
        <Col span={10} style={{ height: "100%", paddingLeft: "20px" }}>
          <div style={{ position: "absolute", top: "32%" }}>
            <div className="login_title">
              <span className="login_title_header">BONEYARD</span>
              <span className="login_title_bottom">
                Powered by Barebones Inc.
              </span>
            </div>
            <br />
            <div className="login_message">
              <span className="login_message_header">
                "Your credit is good but we need cash"
              </span>
              <span className="login_message_bottom">- Panchito</span>
            </div>

            <div className="login_box">
              <label>Email</label>
              <br />
              <input type={"email"} id={"email"} />
              <br />
              <br />
              <label>User Name</label>
              <br />
              <input type={"text"} id={"username"} />
              <br />
              <br />
              <label>Password</label>
              <br />
              <input type={"password"} id={"password"} />
              <br />
              <button onClick={onClickForSignUp}>Signup</button>             
              <div>
                <label>Already have an account?</label>
                <button className="signinButton" onClick={onClickForSignin}>Sign In</button>
              </div> 
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.user.user ? true : false,
  status: state.user.status,
  companyName: state.user.companyName,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signUpRequest: (payload) => {
      dispatch(userActions.signUp(payload));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(Signup);
