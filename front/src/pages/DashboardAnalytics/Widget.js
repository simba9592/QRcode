import React from 'react';
import { Card, CardBody, Col, Row, Table } from 'reactstrap';
import CountUp from "react-countup";

//Import Icons
import FeatherIcon from "feather-icons-react";

const Widget = () => {
    return (
        <React.Fragment>
                <Col lg={6}>
                        <h5 className="card-title mb-3">Info</h5>
                        <div className="table-responsive">
                            <Table className="table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th className="ps-0" scope="row">Full Name :</th>
                                        <td className="text-muted">Michael Wagner</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Mobile :</th>
                                        <td className="text-muted">+(1) 331 6543</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">E-mail :</th>
                                        <td className="text-muted">Michaelwagner@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Location :</th>
                                        <td className="text-muted">California, United States
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Joining Date</th>
                                        <td className="text-muted">24 Nov 2021</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                </Col>

            {/* <Row>
                <Col md={6}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fw-medium text-muted mb-0">Avg. Visit Duration</p>
                                    <h2 className="mt-4 ff-secondary fw-semibold">
                                        <span className="counter-value" data-target="3">
                                            <CountUp
                                                start={0}
                                                end={3}
                                                duration={4}
                                            />
                                        </span>m{" "}
                                        <span className="counter-value" data-target="40">
                                            <CountUp
                                                start={0}
                                                end={40}
                                                duration={4}
                                            />
                                        </span>sec</h2>
                                    <p className="mb-0 text-muted"><span className="badge bg-light text-danger mb-0">
                                        <i className="ri-arrow-down-line align-middle"></i> 0.24 %
                                    </span> vs. previous month</p>
                                </div>
                                <div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-warning rounded-circle fs-2">
                                            <FeatherIcon
                                                icon="clock"
                                                className="text-white"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fw-medium text-muted mb-0">Bounce Rate</p>
                                    <h2 className="mt-4 ff-secondary fw-semibold">
                                        <span className="counter-value" data-target="33.48">
                                            <CountUp
                                                start={0}
                                                end={33.48}
                                                decimals={2}
                                                duration={4}
                                            />
                                        </span>%</h2>
                                    <p className="mb-0 text-muted"><span className="badge bg-light text-success mb-0">
                                        <i className="ri-arrow-up-line align-middle"></i> 7.05 %
                                    </span> vs. previous month</p>
                                </div>
                                <div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-success rounded-circle fs-2">
                                            <FeatherIcon
                                                icon="external-link"
                                                className="text-white"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row> */}
        </React.Fragment>
    );
};

export default Widget;