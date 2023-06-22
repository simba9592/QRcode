import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { getPilotProflie, apiError } from "../../../../store/actions";
import MetaTags from 'react-meta-tags';
import Flatpickr from "react-flatpickr";

//import images
import progileBg from '../../../../assets/images/profile-bg.jpg';
import avatar1 from '../../../../assets/images/users/avatar-1.jpg';

const Settings = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [form, setForm] = useState({
        FullName: "",
        Company: "",
        PhoneNumber: "",
        EmailAddress: "",
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
                document.getElementById("avatar_img").src= reader.result;            
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
        const sendData = {...form, file}   
        dispatch(getPilotProflie(sendData));
    }

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
                                                className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                                                alt="user-profile" />
                                            <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                <Input id="avatarupload" type="file"
                                                    className="profile-img-file-input" onChange={handleImageChange}/>
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
                                                Personal Details
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
                                                            <Label htmlFor="firstnameInput" className="form-label">Full Name</Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your firstname" name='FullName' value={form.FullName} onChange={handleChange}/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="lastnameInput" className="form-label">Company</Label>
                                                            <Input type="text" className="form-control" id="lastnameInput"
                                                                placeholder="Enter your lastname" name='Company'value={form.Company} onChange={handleChange}/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="phonenumberInput" className="form-label">Phone
                                                                Number</Label>
                                                            <Input type="text" className="form-control"
                                                                id="phonenumberInput"
                                                                placeholder="Enter your phone number"
                                                                name='PhoneNumber' value={form.PhoneNumber} onChange={handleChange}/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="emailInput" className="form-label">Email
                                                                Address</Label>
                                                            <Input type="email" className="form-control" id="emailInput"
                                                                placeholder="Enter your email"
                                                                name='EmailAddress' value={form.EmailAddress} onChange={handleChange}/>
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

export default Settings;