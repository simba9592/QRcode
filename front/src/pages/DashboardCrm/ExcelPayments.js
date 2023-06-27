import React, { useEffect, useState } from "react";  
import { read, utils, writeFile } from 'xlsx';
import { useSelector, useDispatch } from "react-redux";
import { getPayments } from "../../store/actions";

const ExcekPayments = () => {

    const dispatch = useDispatch();
    const data = {user: "customerlist"};
    useEffect(() => {
        dispatch(getPayments(data));
    }, []);

    const { payments, userListError } = useSelector(state => ({
        payments: state.getPaymentsDetails.paymentsdata,
    }));

    console.log(payments, "payments")


    return (
        <>

            <div className="row">
                <div className="col-sm-12" style={{paddingTop:"100px"}}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">PaymentID</th>
                                <th scope="col">Month</th>
                                <th scope="col">Year</th>
                                <th scope="col">CustomerID</th>
                                <th scope="col">PaymentH</th>
                                {/* <th scope="col">PaymentFor</th>
                                <th scope="col">Paid?</th> */}
                                <th scope="col">Amount Paid(L.L.)</th>
                                <th scope="col">realamount</th>
                            </tr>
                        </thead>
                        <tbody> 
                                {
                                    payments
                                    ?
                                    payments.map((payments, index) => (
                                        <tr key={index}>
                                            <th scope="row">{ payments.PaymentID }</th>
                                            <td>{ payments.Month }</td>
                                            <td>{ payments.Year }</td>
                                            <td>{ payments.CustomerID }</td>
                                            <td>{ payments.PaymentH }</td>
                                            {/* <td>{ payments.PaymentFor }</td>
                                            <td>{ payments.Paid }</td> */}
                                            <td>{ payments.AmountPaid }</td>
                                            <td>{ payments.realamount }</td>
                                           
                                            <td><span className="badge bg-warning text-dark">{ payments.Rating }</span></td>
                                        </tr> 
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="5" className="text-center">No paymentss Found.</td>
                                    </tr> 
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};

export default ExcekPayments;