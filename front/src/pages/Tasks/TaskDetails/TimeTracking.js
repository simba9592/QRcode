import React from 'react';
import { Card, CardBody, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Table, CardHeader } from "reactstrap";

import avatar10 from "../../../assets/images/users/avatar-10.jpg";
import avatar8 from "../../../assets/images/users/avatar-8.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import { Link } from 'react-router-dom';

const TimeTracking = () => {
    return (
        <React.Fragment>


            <Card>
                <CardBody>
                    <h5 className="card-title mb-3">Info</h5>
                    <div className="table-responsive">
                        <Table className="table-borderless mb-0">
                            <tbody>
                                <tr>
                                    <th className="ps-0" scope="row">Full Name :</th>
                                    <td className="text-muted">Marc Jose Nachar</td>
                                </tr>
                                <tr>
                                    <th className="ps-0" scope="row">Mobile :</th>
                                    <td className="text-muted">+(1) 987 6543</td>
                                </tr>
                                <tr>
                                    <th className="ps-0" scope="row">E-mail :</th>
                                    <td className="text-muted">daveadame@velzon.com</td>
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
                </CardBody>
            </Card>
            {/* <Card className="mb-3">
                <CardBody>
                    <h4 className='content-right'>List of Assigned aircraft</h4>
                    <div className="table-card">
                        <table className="table mb-0">
                            <tbody>
                                <tr>
                                    <td className="fw-medium">Tasks No</td>
                                    <td>#VLZ456</td>
                                </tr>
                                <tr>
                                    <td className="fw-medium">Tasks Title</td>
                                    <td>Profile Page Satructure</td>
                                </tr>
                                <tr>
                                    <td className="fw-medium">Project Name</td>
                                    <td>Velzon - Admin Dashboard</td>
                                </tr>
                                <tr>
                                    <td className="fw-medium">Priority</td>
                                    <td><span className="badge badge-soft-danger">High</span></td>
                                </tr>
                                <tr>
                                    <td className="fw-medium">Status</td>
                                    <td><span className="badge badge-soft-secondary">Inprogress</span></td>
                                </tr>
                                <tr>
                                    <td className="fw-medium">Due Date</td>
                                    <td>05 Jan, 2022</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card> */}
              <Card>
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">List of Assigned Airplane</h4>
                        {/* <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown">
                                <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                    <span className="text-muted">02 Nov 2021 to 31 Dec 2021<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem>Today</DropdownItem>
                                    <DropdownItem>Last Week</DropdownItem>
                                    <DropdownItem>Last Month</DropdownItem>
                                    <DropdownItem>Current Year</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div> */}
                    </CardHeader>

                    <CardBody>
                        <div className="table-responsive mt-4 mt-xl-0">
                            <Table className="table-success table-striped table-nowrap align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-medium">01</td>
                                        <td>
                                            <Link to="#">
                                                Cessna 310
                                            </Link>
                                            </td>
                                        <td>
                                            N314HB</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium">02</td>
                                        <td><Link to="#">Pa31</Link></td>
                                        <td>N733JT</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium">03</td>
                                        <td><Link to="#">BE9L</Link></td>
                                        <td>QTRBC</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium">04</td>
                                        <td><Link to="#">BE9L</Link></td>
                                        <td>QTRBC</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            <Card>
                <CardBody>
                    <h5 className="card-title mb-3">List of Report</h5>
                    <div className="vstack gap-2">
                        <div className="border rounded border-dashed p-2">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm">
                                        <div className="avatar-title bg-light text-secondary rounded fs-24 shadow">
                                            <i className="bx bxs-report"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <h5 className="fs-13 mb-1"><Link to="#" className="text-body text-truncate d-block">Report Data -1</Link></h5>
                                    <div>2.2MB</div>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <div className="d-flex gap-1">
                                        <button type="button" className="btn btn-icon text-muted btn-sm fs-18 shadow-none"><i className="ri-download-2-line"></i></button>
                                        <UncontrolledDropdown>
                                            <DropdownToggle tag="button" className="btn btn-icon text-muted btn-sm fs-18 dropdown shadow-none" type="button">
                                                <i className="ri-more-fill"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <li><DropdownItem><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> View</DropdownItem></li>
                                                <li><DropdownItem><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</DropdownItem></li>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border rounded border-dashed p-2">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm">
                                        <div className="avatar-title bg-light text-secondary rounded fs-24 shadow">
                                            <i className="bx bxs-report"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <h5 className="fs-13 mb-1"><Link to="#" className="text-body text-truncate d-block">Report Data -2</Link></h5>
                                    <div>2.4MB</div>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <div className="d-flex gap-1">
                                        <button type="button" className="btn btn-icon text-muted btn-sm fs-18 shadow-none"><i className="ri-download-2-line"></i></button>
                                        <UncontrolledDropdown>
                                            <DropdownToggle tag="button" className="btn btn-icon text-muted btn-sm fs-18 dropdown shadow-none" type="button">
                                                <i className="ri-more-fill"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <li><DropdownItem><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> View</DropdownItem></li>
                                                <li><DropdownItem><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</DropdownItem></li>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border rounded border-dashed p-2">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm">
                                        <div className="avatar-title bg-light text-secondary rounded fs-24 shadow">
                                            <i className="bx bxs-report"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <h5 className="fs-13 mb-1"><Link to="#" className="text-body text-truncate d-block">Report Data -3</Link></h5>
                                    <div>1.2MB</div>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <div className="d-flex gap-1">
                                        <button type="button" className="btn btn-icon text-muted btn-sm fs-18 shadow-none"><i className="ri-download-2-line"></i></button>
                                        <UncontrolledDropdown>
                                            <DropdownToggle tag="button" className="btn btn-icon text-muted btn-sm fs-18 dropdown shadow-none" type="button">
                                                <i className="ri-more-fill"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <li><DropdownItem><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> View</DropdownItem></li>
                                                <li><DropdownItem><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</DropdownItem></li>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 text-center">
                            <button type="button" className="btn btn-success">View more</button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default TimeTracking;