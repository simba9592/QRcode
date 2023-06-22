import React, { useEffect, useState, useMemo } from "react";
import MetaTags from 'react-meta-tags';

import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Card,
  CardHeader,
  Col,
  Input,
  Label,
  CardBody,
  Form,
} from "reactstrap";
import classnames from "classnames";
import { getAirplaneProflie, apiError } from "../../../store/actions";

// RangeSlider
import "nouislider/distribute/nouislider.css";
import avatar1 from '../../../assets/images/aircraft/aircraft1.png';

//redux
import { useSelector, useDispatch } from "react-redux";


const EcommerceProducts = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [form, setForm] = useState({
    AirplaneName: "",
    AirplaneMark: "",
    Owner: "",
    Pilot: "",
  })

  const [file, setFile] = useState();
  const dispatch = useDispatch();

  const [postImage, setPostImage] = useState({
    myFile: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImageChange = async (e) => {
    if (e.target.files.length === 0) {
      return;
    }

    setFile(e.target.files[0]);

    const base64 = await convertToBase64(e.target.files[0]);
    setPostImage({ ...postImage, myFile: base64 });

    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        document.getElementById("avatar_img").src = reader.result;
      },
      false
    );
    reader.readAsDataURL(e.target.files[0]);
  }


  const handleUploadClick = () => {
    document.getElementById("avatarupload").click();
  };

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const sendPilotProfile = () => {
    const sendData = { ...form, file }
    dispatch(getAirplaneProflie(sendData));
  }
  console.log(file, form)
  document.title = "profile settings";
  return (
    <React.Fragment>
      <div className="page-content">

        <Container fluid>
          <Row>
            <Col xxl={3}>
              <Card className="mt-n5">
                <CardBody className="p-4">
                  <div className="text-center">
                    <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                      <img src={avatar1} id='avatar_img'
                        alt="user-profile" />
                      <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                        <Input id="avatarupload" type="file"
                          className="profile-img-file-input" onChange={handleImageChange} />
                        <Label htmlFor="profile-img-file-input"
                          className="profile-photo-edit avatar-xs">
                          <span className="avatar-title rounded-circle bg-light text-body">
                            <i className="ri-camera-fill" onClick={handleUploadClick}></i>
                          </span>
                        </Label>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>

            </Col>

            <Col xxl={9}>
              <Card className="mt-xxl-n5">
                <CardHeader>
                  <Nav className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                    role="tablist">
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "1" })}
                        onClick={() => {
                          tabChange("1");
                        }}>
                        <i className="fas fa-home"></i>
                        Airplane Details
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody className="p-4">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <Form>
                        <Row>

                          <Col lg={6}>
                            <div className="mb-3">
                              <Label htmlFor="firstnameInput" className="form-label">Airplain Name</Label>
                              <Input type="text" className="form-control" id="firstnameInput" name='AirplaneName' value={form.AirplaneName} onChange={handleChange} />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label htmlFor="lastnameInput" className="form-label">Airplane Mark</Label>
                              <Input type="text" className="form-control" id="lastnameInput" name='AirplaneMark' value={form.AirplaneMark} onChange={handleChange} />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label htmlFor="phonenumberInput" className="form-label">Owner</Label>
                              <Input type="text" className="form-control"
                                id="phonenumberInput"
                                name='Owner' value={form.Owner} onChange={handleChange} />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label htmlFor="emailInput" className="form-label">Pilot</Label>
                              <Input type="email" className="form-control" id="emailInput"
                                name='Pilot' value={form.Pilot} onChange={handleChange} />
                            </div>
                          </Col>
                        </Row>
                        <button type="button"
                          className="btn btn-primary" onClick={sendPilotProfile}>Updates</button>
                      </Form>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EcommerceProducts;
