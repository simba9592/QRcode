import React, { useEffect, useState } from "react";  
import { read, utils, writeFile } from 'xlsx';
import { useSelector, useDispatch } from "react-redux";
import { getPayments } from "../../store/actions";
import URLname from "../../common/const";

const ExcekPayments = () => {

    const dispatch = useDispatch();
    const [paiddata, setPaidData] = useState()

    const sendDataToServer = async (data) => {
        try {
          const response = await fetch(URLname + '/api/test/getpaid', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const responseJson = await response.json();
          console.log(responseJson,"paid data");
          setPaidData(responseJson)
        } catch (error) {
          console.error(error);
        }
      };


    useEffect(() => {
        
    const data = {user: "customerlist"};
    sendDataToServer(data);
    }, []);



    return (
        <>

            <div className="row">
                <div className="col-sm-12" style={{paddingTop:"100px"}}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">CustomerID</th>
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">MonthlyFee</th>
                                <th scope="col">PaidSubscription</th>
                                <th scope="col">Remain</th>

                            
                            </tr>
                        </thead>
                        <tbody> 
                                {
                                    paiddata
                                    ?
                                    paiddata.map((paiddata, index) => (
                                        <tr key={index}>
                                            <th scope="row">{ paiddata.customerid }</th>
                                            <td>{ paiddata.firstname }</td>
                                            <td>{ paiddata.lastname }</td>
                                            <td>{ paiddata.monthlyfee }</td>
                                            <td>{ paiddata.paidsubscription }</td>
                                            <td>{ paiddata.monthlyfee - paiddata.paidsubscription }</td>
                                        </tr> 
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="5" className="text-center">No paiddata Found.</td>
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