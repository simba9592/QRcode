import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { getOwnerProflie, apiError } from "../../../store/actions";

//import images
import avatar1 from '../../../assets/images/users/avatar-8.jpg';

const Settings = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [form, setForm] = useState({
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
        EmailAddress: "",
        Location: "",
        Amount: ""
    })


    const [file, setFile] = useState();

    const dispatch = useDispatch();

    const [postImage, setPostImage] = useState({
        myFile: "",
      });

    const [sendOwner, setSendOwner] = useState()

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


    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleUploadClick = () => {
        document.getElementById("avatarupload").click();
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

    const sendOwnerProfile = () => {
        const sendData = {...form, file}   
        dispatch(getOwnerProflie(sendData));
    }

    document.title = "profile settings";
    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <Row>
                        <Col xxl={3}>
                            <Card >
                                <CardBody className="p-4">
                                    <div className="text-center">

                                        <div className='"profile-user position-relative d-inline-block mx-auto  mb-4"'>

                                            <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                                                <img src={avatar1} id='avatar_img'
                                                    className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                                                    alt="user-profile" />
                                                <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                    <Input id="avatarupload" type="file"
                                                        className="profile-img-file-input" onChange={handleImageChange} />
                                                    <Label htmlFor="profile-img-file-input"
                                                        className="profile-photo-edit avatar-xs">
                                                        <span className="avatar-title rounded-circle bg-light text-body">
                                                            <i className="ri-camera-fill" onClick={handleUploadClick} ></i>
                                                        </span>
                                                    </Label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xxl={9}>
                            <Card >
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
                                            <Form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    return false;
                                                }}
                                            >
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">First
                                                                Name</Label>
                                                            <Input type="text" className="form-control" name='FirstName' id="firstnameInput"
                                                                value={form.FirstName} onChange={handleChange} />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="lastnameInput" className="form-label">Last
                                                                Name</Label>
                                                            <Input type="text" className="form-control" name='LastName' id="lastnameInput"
                                                                value={form.LastName} onChange={handleChange} />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="phonenumberInput" className="form-label">Phone
                                                                Number</Label>
                                                            <Input type="text" className="form-control"
                                                                id="phonenumberInput"
                                                                name='PhoneNumber' value={form.PhoneNumber} onChange={handleChange} />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="emailInput" className="form-label">Email
                                                                Address</Label>
                                                            <Input type="email" className="form-control" id="emailInput"
                                                                name='EmailAddress' value={form.EmailAddress} onChange={handleChange} />
                                                        </div>
                                                    </Col>

                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="Location" className="form-label">Location</Label>
                                                            <Input type="text" className="form-control" id="Location"
                                                                name='Location' value={form.Location} onChange={handleChange} />
                                                        </div>
                                                    </Col>

                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="AirplaneAmount" className="form-label">Airplane Amount</Label>
                                                            <Input type="number" className="form-control" id="AirplaneAmount"
                                                                name='Amount' value={form.Amount} onChange={handleChange} />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <Link to="/apps-aircraft-register">
                                                            <button type="button" 
                                                                className="btn btn-primary" onClick={sendOwnerProfile}>Updates</button></Link>
                                                                <Link to="/apps-aircraft-register">
                                                            <button type="button" to="/apps-aircraft-register"
                                                                className="btn btn-soft-success shadow-none">Cancel</button></Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>

                                        {/* <TabPane tabId="2">
                                            <Form>
                                                <Row className="g-2">
                                                    <Col lg={4}>
                                                        <div>
                                                            <Label htmlFor="oldpasswordInput" className="form-label">Old
                                                                Password*</Label>
                                                            <Input type="password" className="form-control"
                                                                id="oldpasswordInput"
                                                                placeholder="Enter current password" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={4}>
                                                        <div>
                                                            <Label htmlFor="newpasswordInput" className="form-label">New
                                                                Password*</Label>
                                                            <Input type="password" className="form-control"
                                                                id="newpasswordInput" placeholder="Enter new password" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={4}>
                                                        <div>
                                                            <Label htmlFor="confirmpasswordInput" className="form-label">Confirm
                                                                Password*</Label>
                                                            <Input type="password" className="form-control"
                                                                id="confirmpasswordInput"
                                                                placeholder="Confirm password" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="mb-3">
                                                            <Link to="#"
                                                                className="link-primary text-decoration-underline">Forgot
                                                                Password ?</Link>
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="text-end">
                                                            <button type="button" className="btn btn-success">Change
                                                                Password</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane> */}
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