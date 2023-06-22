import React from 'react';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import { dealsStatus } from "../../common/data";
import { useSelector, useDispatch } from "react-redux";
import { getAllOwner } from "../../store/actions";
import { useEffect } from 'react';
import URLname from "../../common/const"

const DealsStatus = () => {

        const dispatch = useDispatch();
        const data = {user: "ownerlist"};
        useEffect(() => {
            dispatch(getAllOwner(data));
        }, []);

        const { owner, owenrListError } = useSelector(state => ({
            owner: state.getAllOwnerReducer.allOwner,
            owenrListError: state.getAllOwnerReducer.owenrListError,
        }));

    return (
        <React.Fragment>
            <Col xl={6}>
                <Card>
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Owners</h4>
                    </CardHeader>

                    <CardBody>
                        <div className="table-responsive table-card">
                            <table className="table table-borderless table-hover table-nowrap align-middle mb-0">
                                <thead className="table-light">
                                    <tr className="text-muted">
                                        <th scope="col">Name</th>
                                        <th scope="col" >Airplain Amount</th>
                                        <th scope="col" >Email</th>
                                        <th scope="col" >Phone Number</th>
                                        <th scope="col" style={{ width: "25%" }}></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {(owner || []).map((minidata,item) => (
                                        <tr key={item}>
                                            <td>{minidata.firstname + minidata.lastname}</td>
                                            <td>{minidata.amount}</td>
                                            <td><div className="text-nowrap">{minidata.emailaddress}</div></td>
                                            <td>{minidata.phonenumber}</td>
                                            <td><img src={URLname + '/avatars/' + minidata.imagename}   alt="" className="avatar-xs rounded-circle me-2" />
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

export default DealsStatus;