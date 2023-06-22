import React from 'react';
import { Link } from 'react-router-dom';
import { tasks } from "../../common/data";
import { Card, CardBody, CardHeader, Table, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { getAllAirplane } from "../../store/actions";
import { useEffect } from 'react';
import URLname from "../../common/const"
import { readFile } from 'xlsx';
//SimpleBar
import SimpleBar from "simplebar-react";

const MyTasks = () => {


    const dispatch = useDispatch();
    const data = {user: "airplanelist"};
    useEffect(() => {
        dispatch(getAllAirplane(data));
    }, []);

    const { airplane, airplaneListError } = useSelector(state => ({
        airplane: state.getAllAirplaneReducer.allAirplane,
        airplaneListError: state.getAllAirplaneReducer.airplaneListError,
    }));


    return (
        <React.Fragment>
            <Col xl={12}>
                <Card>
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Airplane</h4>
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
                                        <th scope="col">AirplaneName</th>
                                        <th scope="col">AirplaneMark</th>
                                        <th scope="col">Owner</th>
                                        <th scope="col">Pilot</th>
                                        <th scope="col">Avatar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(airplane || []).map((minidata,item) => (
                                        <tr key={item}>
                                            <td>{minidata.airplanename}</td>
                                            <td>{minidata.airplanemark}</td>
                                            <td>{minidata.owner}</td>
                                            <td>{minidata.pilot}</td>
                                            <td><img src={URLname + '/airplaneimages/' + minidata.imagename}   alt="" className="avatar-xs rounded-circle me-2" />
                                                </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default MyTasks;