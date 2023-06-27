import React, { useEffect, useState } from "react";  
import { read, utils, writeFile } from 'xlsx';
import { useSelector, useDispatch } from "react-redux";
import { sendGetCustomer } from "../../store/actions";

const ExcekCustomer = () => {

    const dispatch = useDispatch();
    const data = {user: "customerlist"};
    useEffect(() => {
        dispatch(sendGetCustomer(data));
    }, []);

    const { customers, userListError } = useSelector(state => ({
        customers: state.getCustomersDetails.customer,
    }));

    console.log(customers, "customer")

    return (
        <>
            <div className="row">
                <div className="col-sm-12" style={{paddingTop:"100px"}}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">CustomerID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Region</th>
                                <th scope="col">Address</th>
                                <th scope="col">Subscriptiontype</th>
                                <th scope="col">MonthlyFee</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Title</th>
                                <th scope="col">building ID</th>

                            </tr>
                        </thead>
                        <tbody> 
                                {
                                    customers
                                    ?
                                    customers.map((customers, index) => (
                                        <tr key={index}>
                                            <th scope="row">{ customers.CustomerID }</th>
                                            <td>{ customers.FirstName }</td>
                                            <td>{ customers.LastName }</td>
                                            <td>{ customers.Region }</td>
                                            <td>{ customers.Address }</td>
                                            <td>{ customers.Subscriptiontype }</td>
                                            <td>{ customers.MonthlyFee }</td>
                                            <td>{ customers.PhoneNumber }</td>
                                            <td>{ customers.Title }</td>
                                            <td>{ customers.buildingid }</td>
                                            <td><span className="badge bg-warning text-dark">{ customers.Rating }</span></td>
                                        </tr> 
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="5" className="text-center">No customers Found.</td>
                                    </tr> 
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};

export default ExcekCustomer;