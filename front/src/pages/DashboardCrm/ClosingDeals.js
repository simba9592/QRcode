import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { closingDeals } from "../../common/data";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getAllPilot } from "../../store/actions";
import URLname from "../../common/const"

const ClosingDeals = () => {


    const dispatch = useDispatch();
    const data = { user: "pilotlist" };
    useEffect(() => {
        dispatch(getAllPilot(data));
    }, []);

    const { pilot, pilotListError } = useSelector(state => ({
        pilot: state.getAllPilotReducer.allPilot,
        pilotListError: state.getAllPilotReducer.pilotListError,
    }));

    return (
        <React.Fragment>
            <Col xxl={5}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Pilots List</h4>
                    </CardHeader>
                    <CardBody>
                        <div className="table-responsive">
                            <table className="table table-bordered table-nowrap align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ width: "20%" }}>Name</th>
                                        <th scope="col" style={{ width: "20%" }}>Company</th>
                                        <th scope="col" style={{ width: "20%" }}>PhoneNumber</th>
                                        <th scope="col" style={{ width: "20%" }}>EmailAddress</th>
                                        <th scope="col" style={{ width: "20%" }}>avatar</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {(pilot || []).map((minidata, item) => (
                                        <tr key={item}>
                                            <td>{minidata.fullname}</td>
                                            <td>{minidata.company}</td>
                                            <td>{minidata.phonenumber}</td>
                                            <td>{minidata.emailaddress}</td>

                                            <td>
                                            <img src={URLname + '/pilotavatars/' + minidata.imagename}   alt="" className="avatar-xs rounded-circle me-2" />
                                                {/* <Link to="#" className="text-body fw-medium">{item.amount}</Link> */}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default ClosingDeals;