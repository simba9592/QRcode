import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { userActions } from "./../../redux/user";
import { Row, Col, message } from "antd";
import "./Login.css";
import "antd/dist/antd.css";

const Login = ({ signInRequest, user, history, status, error, companyName}) => {

  const key = "updatable";
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (companyName) {
      document.title = companyName;      
    }
    let link = document.querySelector("link[rel~='icon']");
    link.href = "/assets/images/QR.jfif";
  }, [companyName]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      if (user.hasOwnProperty('isAdmin') && user.isAdmin) {
        history.push("/admin");
      } else {
        history.push("/settings");
      }
    }
  }, [user]);


  useEffect(() => {
    if (status === "sign_in_request_fail") {
      message.error({
        content: error,
        key,
        duration: 1,
      });
    }
  }, [status]);
  
  const onClickForSignIn = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInRequest({ email, password });
  };

  const onClickForSignup = (e) => {
    history.push("/signup");
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
      onClickForSignIn(e);
    }
  }
  
  const showAndHidePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="loginContainer">
      <Row style={{ height: "100%" }}>
        <Col span={4}></Col>
        <Col span={10} style={{ height: "100%" }}>
          <img
            src="/assets/images/QR.jfif"
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
              <span className="login_title_header">QRcodeScan</span>
              <span className="login_title_bottom">
                BankAutomatice
              </span>
            </div>
            <br />
            <div className="login_message">
              <span className="login_message_header">
                "Your credit is good but we need cash"
              </span>
            </div>
            
            <div className="login_box">
              <label>Email</label>
              <br />
              <input type={"email"} id={"email"} />
              <br />
              <br />
              <label>Password</label>
              <br />
              <div className="inviteDiv">
                <input id="password" type={showPassword? "text": "password"} onKeyDown={handleKeyDown}/>
                <img
                  src={showPassword ? "/assets/images/hide_password.png" : "/assets/images/show_password.png"}
                  type="password"
                  onClick={showAndHidePassword}
                />
              </div>
              <br />
              <button onClick={onClickForSignIn}>Sign In</button>
              <br/>
              <div>
                <label>create new account?</label>
                <button className="signupButton" onClick={onClickForSignup}>Create account</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  error : state.user.error,
  status: state.user.status,
  companyName : state.user.companyName
});

const mapDispatchToProps = (dispatch) => {
  return {
    signInRequest: (payload) => {
      dispatch(userActions.signIn(payload));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(Login);
