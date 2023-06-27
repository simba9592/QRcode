import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

const CollectionData = () => {

    useEffect(() => {
        sendInvoiceData();
    }, []);

    const [tabledata, setTableData] = useState([]);

    const sendInvoiceData = async () => {
        const invoicedata = { invoice: "data" }
        try {
            const response = await fetch('http://localhost:8080/api/test/invoice_data', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(invoicedata),
            });
            const responseJson = await response.json();

            setTableData(responseJson);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <React.Fragment>
            <Col xxl={12}>
                <Card style={{ padding: "10%" }}>
                    <CardHeader className="align-items-center d-flex">
                        <h2 className="card-title mb-0 flex-grow-1">Invoice List</h2>
                    </CardHeader>
                    <CardBody>
                        <div className="table-responsive" >
                            <table className="table table-bordered table-nowrap align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ width: "10%" }} >CustomerId</th>
                                        <th scope="col" style={{ width: "10%" }}>Name</th>
                                        <th scope="col" style={{ width: "10%" }}>Address</th>
                                        <th scope="col" style={{ width: "10%" }}>Monthlyfee</th>
                                        <th scope="col" style={{ width: "10%" }}>Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {(tabledata || []).map((minidata, item) => (
                                        <tr key={item}>
                                            <td>{minidata.customerid}</td>
                                            <td>{minidata.fullname}</td>
                                            <td>{minidata.address}</td>
                                            <td>{minidata.monthlyfee}</td>

                                            <td>
                                                {minidata.date}
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                    <div className='button' style={{ marginLeft: "50%", marginTop: "10%" }}>
                        <Link to="/apps-invoice-states">
                            <button
                                type="button"
                                className="btn btn-success"
                            >
                                preview Page
                            </button>
                        </Link>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default CollectionData;