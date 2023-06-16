import React, { useEffect, useState, useRef } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { userActions } from "./../../redux/user";
import "./Viewer.css";
import "antd/dist/antd.css";
import OvenPlayer from "ovenplayer";
import { Row, Col, message, notification, Layout } from "antd";
// import io from "socket.io-client";
import { baseurl } from "../../const/const";

const { Header, Content, Footer, Sider } = Layout;

// const socket = io(baseurl);

const Viewer = ({
  history,
  broadcastInfo,
  getBroadcastInfoRequest,
}) => {

  const playerRef = useRef();
  const [showStream, setShowStream] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  // const [isConnected, setIsConnected] = useState(socket.connected);
  const [members, setMembers] = useState([]);

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     setIsConnected(true);
  //   });

  //   socket.on("disconnect", () => {
  //     setIsConnected(false);
  //   });
  //   socket.on("members", (members) => {
  //     setMembers(members);
  //   });
  //   return () => {
  //     socket.off("connect");
  //     socket.off("disconnect");
  //     socket.off("members");
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!broadcastInfo) {
  //     const path = history.location.pathname.replace("/", "");
  //     getBroadcastInfoRequest(path);
  //   } else {
  //     if (isConnected) {
  //       const roomId = history.location.pathname.replace("/", "");
  //       const userName = localStorage.getItem(roomId);        
  //       if (userName) {
  //         setShowStream(true);
  //         socket.emit("join", {
  //           roomId,
  //           userName,
  //         });
  //       }
  //     }
  //     document.title = broadcastInfo.project;
  //     let link = document.querySelector("link[rel~='icon']");
  //     if (broadcastInfo.thumb)
  //       link.href = broadcastInfo.thumb;
  //   }
  // }, [broadcastInfo]);

  useEffect(() => {
    if (showStream) {
      console.log("ws://46.137.208.251:3333/app/" + broadcastInfo.streamKey);
      const player = OvenPlayer.create(playerRef.current, {
        autoStart: true,
        autoFallback: true,
        mute: false,
        controls: false,
        loop: true,
        // showBigPlayButton: false,
        sources: [
          {
            label: "Test Streaming",
            type: "webrtc",
            file: "ws://46.137.208.251:3333/app/" + broadcastInfo.streamKey,
          },
        ],
      });
      player.play();
      document.getElementById("companyName").innerHTML =
        broadcastInfo.companyName;
      document.getElementById("project").innerHTML = broadcastInfo.project;
      document.getElementById("director").innerHTML = broadcastInfo.director;
      document.getElementById("dp").innerHTML = broadcastInfo.dp;
      document.getElementById("agency").innerHTML = broadcastInfo.agency;
      document.getElementById("product").innerHTML = broadcastInfo.product;
      document.getElementById("username").innerHTML = broadcastInfo.name;
    }
  }, [showStream]);

  const onClickSignIn = (e) => {
    e.preventDefault();
    if (broadcastInfo) {
      setShowStream(true);
      const roomId = history.location.pathname.replace("/", "");
      const userName = document.getElementById("guestName").value;
      // socket.emit("join", {
      //   roomId,
      //   userName,
      // });
      localStorage.setItem(roomId, userName);
    } 
     else if (!broadcastInfo) {
      notification.open({
        message: "Error",
        description: "Broadcaster does not exist.",
      });
    }
  };

  const onClickShowSideMenuButton = (e) => {
    if (collapsed) {
      setCollapsed(false);
      document.getElementById("sideMenuIcon").innerHTML = ">";
    } else {
      setCollapsed(true);
      document.getElementById("sideMenuIcon").innerHTML = "<";
    }
  };

  return showStream ? (
    <Layout style={{ height: "100%" }}>
      <Layout>
        <Content>
          <div className="viewContainer">
            <div className="logo">
              <img id="thumbnail" src={broadcastInfo.thumb?broadcastInfo.thumb : "/assets/images/logo.png"}/>
            </div>
            <div className="player-wrapper">
              <div id="player_id" ref={playerRef}></div>
            </div>
          </div>
        </Content>
        <Sider
          collapsible
          collapsed={collapsed}
          trigger={null}
          collapsedWidth={18}
          width={300}
          style={{ background: "#000" }}
        >
          <div className="sideMenuDiv">
            <div
              style={{
                width: collapsed ? 0 : 282,
              }}
              className="sideMenu"
            >
              <div className="infoDiv">
                <span id="companyName" />
                <span>Project:</span>
                <span id="project"></span>
                <span>Director:</span>
                <span id="director"></span>
                <span>DP:</span>
                <span id="dp"></span>
                <span>Agency:</span>
                <span id="agency"></span>
                <span>Product:</span>
                <span id="product"></span>
              </div>
              <div className="hline"></div>
              <div className="participantDiv">
                <span>Participants:</span>
                {members.map((member, index) => {
                  return <span key={index}>{member}</span>;
                })}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="lds-default">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="coloristDiv">
                <span id="username"></span>
                <span>Colorist</span>
              </div>
            </div>
            <span
              className="sideMenuIcon"
              id="sideMenuIcon"
              onClick={onClickShowSideMenuButton}
            >
              {"<"}
            </span>
          </div>
        </Sider>
      </Layout>
      <Footer style={{ padding: 0 }}>
        <img src="/assets/images/steps.png" style={{ width: "100%" }} />
      </Footer>
    </Layout>
  ) : (
    <div className="loginContainer">
      <Row style={{ height: "100%" }}>
        <Col span={4}></Col>
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
              <label>Guest Name</label>
              <br />
              <input id={"guestName"} />
              <br />
              <button onClick={onClickSignIn}>Login</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  broadcastInfo: state.user.broadcastInfo,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getBroadcastInfoRequest: (path) => {
      dispatch(userActions.getBroadcastInfo(path));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(Viewer);
