
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Nav, Row, TabContent, Table, TabPane, } from 'reactstrap';
import SwiperCore, { Autoplay } from "swiper";

import { useSelector } from "react-redux";

//Images
import profileBg from '../../../assets/images/profile-bg.jpg';
import avatar8 from '../../../assets/images/users/avatar-8.jpg';


const SimplePage = () => {

    SwiperCore.use([Autoplay]);

    const [activeTab, setActiveTab] = useState('1');



    document.title = "profile page";
    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <div className="profile-foreground position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg">
                            <img src={profileBg} alt="" className="profile-wid-img" />
                        </div>
                    </div>
                    <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
                        <Row className="g-4">
                            <div className="col-auto">
                                <div className="avatar-lg">
                                    <img src={avatar8} alt="user-img"
                                        className="img-thumbnail rounded-circle" />
                                </div>
                            </div>

                            <Col>
                                <div className="p-2">
                                    <h3 className="text-white mb-1">Michael Wanger</h3>
                                    <p className="text-white-75">Owner</p>
                                    <div className="hstack text-white-50 gap-1">
                                        <div className="me-2"><i
                                            className="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle"></i>California,
                                            United States</div>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col lg={12}>
                            <div>
                                <div className="d-flex">
                                    <Nav pills className="animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
                                        role="tablist">
                                    </Nav>
                                    <div className="flex-shrink-0">
                                        <Link to="/pages-team" className="btn btn-success"><i
                                            className="ri-edit-box-line align-bottom"></i> Edit Profile</Link>
                                    </div>
                                </div>

                                <TabContent activeTab={activeTab} className="pt-4">
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col xxl={3}>
                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-3">Info</h5>
                                                        <div className="table-responsive">
                                                            <Table className="table-borderless mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Full Name :</th>
                                                                        <td className="text-muted">Michael Wanger</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Mobile :</th>
                                                                        <td className="text-muted">+(1) 331 6543</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">E-mail :</th>
                                                                        <td className="text-muted">Michael@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Location :</th>
                                                                        <td className="text-muted">California, United States
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row"># of Airplane</th>
                                                                        <td className="text-muted">2</td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default SimplePage;