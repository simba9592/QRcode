import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
// import { userActions } from "../../redux/user";
import { Row, Col, Tooltip, message } from "antd";
// import { baseurl, streamBaseUrl } from "../../const/const";
// import "antd/dist/antd.css";
import "./Settings.css";

const Settings = ({
  history,
  user,
  status,
  saveSettingsRequest,
  loginFromLocalStroage,
  logout,
  companyName
}) => {

  const key = "updatable";
  const [showPassword, setShowPassword] = useState(false);
  
  useEffect(() => {
    if (companyName) {
      document.title = companyName;
    }   
    let link = document.querySelector("link[rel~='icon']");
    link.href = "/assets/images/logo.png";
  }, [companyName]);

  useEffect(() => {
    if (!user) {
      let localUser = localStorage.getItem("user");
      if (localUser) {
        loginFromLocalStroage(JSON.parse(localUser));
      } else {
        history.push("/");
      }
      return;
    } else {
      localStorage.setItem("user", JSON.stringify(user));
    }

    if (status === "request_pending") {
      
    } else if (status === "save_settings_request_success") {
      message.success({ content: "Saved!", key, duration: 2 });
    } else if (status === "save_settings_request_fail") {
      message.error({ content: "Saved!", key, duration: 2 });
    }
    if (!user.hasOwnProperty("inviteLink")) {
      const hash = Number(new Date()).toString(36);
      document.getElementById("inviteLink").value =
        window.location.origin + "/" + hash;
    } else {
      document.getElementById("inviteLink").value =
        window.location.origin + "/" + user.inviteLink;
    }

    if (!user.hasOwnProperty("serverUrl")) {
      const streamHash = Number(new Date()).toString(36);
      // document.getElementById("serverUrl").value = streamBaseUrl;
      document.getElementById("streamKey").value = streamHash;
    } else {
      document.getElementById("serverUrl").value = user.serverUrl;
      document.getElementById("streamKey").value = user.streamKey;
    }

    if (user.hasOwnProperty("project"))
      document.getElementById("project").value = user.project;
    if (user.hasOwnProperty("director"))
      document.getElementById("director").value = user.director;
    if (user.hasOwnProperty("dp"))
      document.getElementById("dp").value = user.dp;
    if (user.hasOwnProperty("agency"))
      document.getElementById("agency").value = user.agency;
    if (user.hasOwnProperty("product"))
      document.getElementById("product").value = user.product;

    if (user.hasOwnProperty("thumb")) {
      document.getElementById("thumbnail").src = user.thumb;
    } else {
      document.getElementById("thumbnail").src = "/assets/images/logo.png";
    }
  }, [user]);

  const onClickSaveSetting = (e) => {
    let settignData = {
      email: user.email,
      inviteLink: document
        .getElementById("inviteLink")
        .value.replace(window.location.origin + "/", ""),
      serverUrl: document.getElementById("serverUrl").value,
      streamKey: document.getElementById("streamKey").value,
      project: document.getElementById("project").value,
      director: document.getElementById("director").value,
      dp: document.getElementById("dp").value,
      agency: document.getElementById("agency").value,
      product: document.getElementById("product").value,
      password: document.getElementById("password").value,
    };
    var imgFile = document.getElementById("thumbFile").files[0];
    if (imgFile) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        // Base64 Data URL 👇
        var base64String = reader.result
          .replace("data:", "")
          .replace(/^.+,/, "");
        settignData["thumb"] = base64String;
        saveSettingsRequest(settignData);
      });
      reader.readAsDataURL(imgFile);
    } else {
      settignData["thumbUrl"] = document.getElementById("thumbLabel").value;
      saveSettingsRequest(settignData);
    }
  };

  const onClickLogout = () => {
    localStorage.removeItem("user");
    logout();
  };

  const onClickForRemoveThumbnail = (e) => {
    document.getElementById("thumbnail").src = "";
    document.getElementById("thumbLabel").value = "";
  };

  const selectThumbFile = (e) => {
    document.getElementById("thumbFile").click();
  };

  const onChangeThumbnail = (e) => {
    const thumbFile = document.getElementById("thumbFile");
    if (!thumbFile.value) return;

    var value = thumbFile.value.replace(/^.*[\\\/]/, "");
    document.getElementById("thumbLabel").value = value;

    var files = e.target.files;
    if (FileReader && files && files.length) {
      var fr = new FileReader();
      fr.onload = function () {
        document.getElementById("thumbnail").src = fr.result;
      };
      fr.readAsDataURL(files[0]);
    }
  };

  const copyInviteurlToClipboard = () => {
    navigator.clipboard.writeText(document.getElementById("inviteLink").value);
  };

  const copyServerUrlToClipboard = () => {
    navigator.clipboard.writeText(document.getElementById("serverUrl").value);
  };

  const copyStreamKeyToClipboard = () => {
    navigator.clipboard.writeText(document.getElementById("streamKey").value);
  };

  const openViewPage = () => {
    const url = document.getElementById("inviteLink").value;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const regenerateLink = () => {
    const hash = Number(new Date()).toString(36);
    document.getElementById("inviteLink").value =
      window.location.origin + "/" + hash;
  };

  const regenerateStreamKey = () => {
    const hash = Number(new Date()).toString(36);
    document.getElementById("streamKey").value = hash;
  };

  const showAndHidePassword = () => {
    setShowPassword(!showPassword);
  }
  
  return (
    <div className="settingsContainer">
      <Row>
        <Col span={2}></Col>
        <Col span={9} style={{ height: "100%", paddingTop: "100px" }}>
          <div className="inviteLinkBox">
            <span>Invite Link</span>
            <div>
              <div className="inviteDiv">
                <input id="inviteLink" readOnly />
                <img
                  src="/assets/images/regenerate.png"
                  onClick={regenerateLink}
                />
              </div>
              <Tooltip
                placement="right"
                title={"Copied!"}
                trigger="click"
                overlayClassName={"overlay"}
              >
                <button onClick={copyInviteurlToClipboard}>Copy</button>
              </Tooltip>
              <button onClick={openViewPage}>Open</button>
            </div>
          </div>
          <div className="thumbnailBox">
            <span>Current Image</span>
            <img id="thumbnail" />
            <button onClick={onClickForRemoveThumbnail}>Remove</button>
          </div>
          <div className="fileInput">
            <input id="thumbFile" type="file" onChange={onChangeThumbnail} />
            <span className="button" onClick={selectThumbFile}>
              Choose
            </span>
            <input id="thumbLabel" />
          </div>
          <span className="encoderTitle">Encoder Setup</span>
          <div className="encoderSetup">
            <span>Server URL</span>
            <div>
              <input id="serverUrl" readOnly />
              <Tooltip
                placement="right"
                title={"Copied!"}
                trigger="click"
                overlayClassName={"overlay"}
              >
                <button onClick={copyServerUrlToClipboard}>Copy</button>
              </Tooltip>
            </div>
            <span>Stream Key</span>
            <div>
              <div className="inviteDiv">
                <input id="streamKey" readOnly />
                <img
                  src="/assets/images/regenerate.png"
                  onClick={regenerateStreamKey}
                />
              </div>
              <Tooltip
                placement="right"
                title={"Copied!"}
                trigger="click"
                overlayClassName={"overlay"}
              >
                <button onClick={copyStreamKeyToClipboard}>Copy</button>
              </Tooltip>
            </div>
            <span>New Password</span>
            <div>
              <div className="inviteDiv">
                <input id="password" type={showPassword? "text": "password"}/>
                <img
                  src={showPassword ? "/assets/images/hide_password.png" : "/assets/images/show_password.png"}
                  type="password"
                  onClick={showAndHidePassword}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col span={2}></Col>
        <Col span={9} style={{ height: "100%", paddingTop: "100px" }}>
          <span className="projectTitle">Project Details</span>
          <div className="detailBox">
            <span>Project</span>
            <input id="project" />
            <span>Director</span>
            <input id="director" />
            <span>DP</span>
            <input id="dp" />
            <span>Agency</span>
            <input id="agency" />
            <span>Product</span>
            <input id="product" />
          </div>
        </Col>
        <Col span={2}></Col>
      </Row>
      <Row>
        <Col span={3} offset={9} style={{ padding: "10px" }}>
          <button className="saveButton" onClick={onClickSaveSetting}>
            Save Settings
          </button>
        </Col>
        <Col span={3} style={{ padding: "10px" }}>
          <button className="logoutButton" onClick={onClickLogout}>
            Logout
          </button>
        </Col>
      </Row>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   user: state.user.user,
//   status: state.user.status,
//   companyName : state.user.companyName
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     saveSettingsRequest: (payload) => {
//       dispatch(userActions.saveSettings(payload));
//     },
//     loginFromLocalStroage: (user) => {
//       dispatch(userActions.signInFulfilled(user));
//     },
//     logout: () => {
//       dispatch(userActions.signInFulfilled(null));
//     },
//   };
// };

export default compose(connect(mapStateToProps, mapDispatchToProps))(Settings);
