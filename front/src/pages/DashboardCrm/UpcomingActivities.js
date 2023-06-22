import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody,Table, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import { activities } from "../../common/data";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import {receiveReport} from "../../store/actions"

const UpcomingActivities = (props) => {

    const dispatch = useDispatch();
    
    const data = {user: "receive report data"};
    useEffect(() => {
        dispatch(receiveReport(data));
    }, []);

    const { receivedata, receivedataerror } = useSelector(state => ({
        receivedata: state.receiveReportData.receivedata,
        receivedataerror: state.receiveReportData.receivedataerror,
    }));

    return (
        <React.Fragment>
            <Col xxl={6}>
                <Card>
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Reports</h4>

                    </CardHeader>
                    <CardBody className="card-body pt-0">
                        <ul className="list-group list-group-flush border-dashed">
                            {(receivedata || []).map((minidata,item) => (
                                <li className="list-group-item ps-0" key={item}>
                                    <Row className="align-items-center g-3">
                                        <div className="col-auto">
                                            <div className="avatar-sm p-1 py-2 h-auto bg-light rounded-3 shadow">
                                                <div className="text-center">
                                                    <h5 className="mb-0">{minidata.selectedAirplane && minidata.selectedAirplane.value}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <h5 className="text-muted mt-0 mb-1 fs-13">{minidata.selectedDates}</h5>
                                            <Link to={`apps-report-management/${minidata._id}`} className="text-reset fs-14 mb-0" >{minidata.selectedAirplane && minidata.selectedMark.value}</Link>
                                        </div>
                                    </Row>
                                </li>
                            ))}
                        </ul>
                    </CardBody>

                </Card>
            </Col>
        </React.Fragment>
    );
};

export default UpcomingActivities;