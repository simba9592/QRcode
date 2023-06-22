import { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Input, Col } from 'reactstrap';
import { getAllUser } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const UserList = () => {

    const dispatch = useDispatch();
    const data = {user: "userlist"};
    useEffect(() => {
        dispatch(getAllUser(data));
    }, []);


    const { user, userListError } = useSelector(state => ({
        user: state.getAllUserReducer.allUser,
        userListError: state.getAllUserReducer.userListError,
    }));

    return (
        <React.Fragment>
            <Col xxl={12}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">User List</h4>
                    </CardHeader>
                    <CardBody>
                        <div className="table-responsive">
                            <table className="table table-bordered table-nowrap align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ width: "20%" }}>User Name</th>
                                        <th scope="col" style={{ width: "30%" }}>User Email</th>
                                        <th scope="col" style={{ width: "20%" }}>User Password</th>
                                        {/* <th scope="col" style={{ width: "20%" }}>User Role</th> */}
                                        {/* <th scope="col" >permit</th> */}
                                    </tr>
                                </thead>

                                <tbody>
                                    {(user || []).map((item, key) => (
                                        <tr key={key}>

                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>${item.password}K</td>
                                            {/* <td>{item.roles}</td> */}
                                            {/* <td>
                                            <div className="form-check form-switch form-switch-custom form-switch-primary mb-3">
                                                        <Input className="form-check-input" type="checkbox" role="switch" id={item._id} />
                                                    </div>
                                            </td> */}
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

export default UserList;