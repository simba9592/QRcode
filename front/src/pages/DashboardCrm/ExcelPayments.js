import React, { useEffect, useState } from "react";  
import { read, utils, writeFile } from 'xlsx';

const ExcekPayments = () => {
    const [movies, setMovies] = useState([]);

    const handleImport = ($event) => {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    setMovies(rows)
                }
            }
            reader.readAsArrayBuffer(file);
        }
    }


    const handleExport = () => {
        const headings = [[
            'CustomerID',
            'First Name',
            'Last Name',
            'Region',
            'Floor Number',
            'Address',
            'Subscriptiontype',
            'MonthlyFee',
            'Phone Number',
            'Title',
            'Date of Subscription',
            'Active',
            'End of Subscription',
            'building ID',

        ]];
        const wb = utils.book_new();
        const ws = utils.json_to_sheet([]);
        utils.sheet_add_aoa(ws, headings);
        utils.sheet_add_json(ws, movies, { origin: 'A2', skipHeader: true });
        utils.book_append_sheet(wb, ws, 'Report');
        writeFile(wb, 'Movie Report.xlsx');
    }
    console.log(movies);

    return (
        <>
            <div className="row" style={{marginTop:'100px'}}>
                <div className="col-sm-6 offset-1">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleImport}
                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
                                    <label className="custom-file-label" htmlFor="inputGroupFile">Choose file</label>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6">
                            <button onClick={handleExport} className="btn btn-primary float-right">
                                Export <i className="fa fa-download"></i>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">PaymentID</th>
                                <th scope="col">Month</th>
                                <th scope="col">Year</th>
                                <th scope="col">CustomerID</th>
                                <th scope="col">PaymentH</th>
                                <th scope="col">PaymentFor</th>
                                <th scope="col">Paid?</th>
                                <th scope="col">Amount Paid(L.L.)</th>
                                <th scope="col">realamount</th>
                            </tr>
                        </thead>
                        <tbody> 
                                {
                                    movies.length
                                    ?
                                    movies.map((movie, index) => (
                                        <tr key={index}>
                                            <th scope="row">{ movie.PaymentID }</th>
                                            <td>{ movie.Month }</td>
                                            <td>{ movie.Year }</td>
                                            <td>{ movie.CustomerID }</td>
                                            <td>{ movie.PaymentH }</td>
                                            <td>{ movie.PaymentFor }</td>
                                            <td>{ movie.Paid }</td>
                                            <td>{ movie.AmountPaid }</td>
                                            <td>{ movie.realamount }</td>
                                           
                                            <td><span className="badge bg-warning text-dark">{ movie.Rating }</span></td>
                                        </tr> 
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="5" className="text-center">No Movies Found.</td>
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