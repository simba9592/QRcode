import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Tooltip, message, Card, CardBody } from "antd";
import "./Settings.css";
import QRCode from 'qrcode.react';
import jsPDF from 'jspdf';
import { compose } from "redux";
import { connect } from "react-redux";
import html2canvas from 'html2canvas';
import { Link } from "react-router-dom";
import Column from "antd/lib/table/Column";

const InvoiceStates = ({
  history,
  user,
  status,
  saveSettingsRequest,
  loginFromLocalStroage,
  logout,
  companyName
}) => {


  const [qrcode, setQrCode] = useState();

  function handleDownload() {
    const element = document.getElementById('my-div');
    const pdf = new jsPDF('landscape', 'px', [400, 200]);
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, 400, 200);

      pdf.save('Invoice.pdf');
    });


  }

  const [formdata, setFormData] = useState({
    customerid: "",
    fullname: "",
    address: "",
    monthlyfee: "",
    date: "",
    // amount: "",
    // balance:"",
  })

  const handleDataChange = (event) => {
    setFormData({
      ...formdata,
      [event.target.name]: event.target.value
    })
  }

  const codeGenerate = () => {
    setQrCode(JSON.stringify(formdata));
    // sendDataToServer(formdata);
  }

  const sendDataToServer = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/api/test/scan_data', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="settingsContainer">
      <Row >
        <Col span={2}></Col>
        <Col span={5} style={{ height: "100%", paddingTop: "100px" }}>
          <span className="projectTitle">Invoice Details</span>
          <form className="detailBox">
            <span>CustomerId</span>
            <input id="project" type="text" name="customerid" value={formdata.customerid} onChange={handleDataChange} />
            <span>Full Name</span>
            <input id="director" type="text" name="fullname" value={formdata.fullname} onChange={handleDataChange} />
            <span>Address</span>
            <input id="dp" type="text" name="address" value={formdata.address} onChange={handleDataChange} />
            <span>Monthly fee</span>
            <input id="agency" type="text" name="monthlyfee" value={formdata.monthlyfee} onChange={handleDataChange} />
            <span>Date</span>
            <input id="product" type="date" name="date" value={formdata.date} onChange={handleDataChange} />
          </form>

          <button className="saveButton" onClick={codeGenerate}>
            Generate QR Code
          </button>
        </Col>
        <Col span={4}></Col>
        <Col span={12} style={{ paddingTop: "250px", }}>

          <div id="my-div" style={{ display: "flex", width: "fit-content", borderTop: "2px dotted black", borderBottom: "2px dotted black" }}>
            <div style={{ marginTop: "20px", paddingLeft: "20px" }}><h4><b>Collector Part</b></h4>
              <QRCode value={qrcode} level="H" style={{ width: '100px', height: '100px', marginLeft: "10px" }} />
              <div style={{ display: "flex", paddingTop: "10px" }}>
                <p className="printfont" style={{ fontSize: "10px" }}><b>monthly fee</b></p >
                <p className="printfont" style={{ fontSize: "10px", marginLeft: "20px" }}>{formdata.monthlyfee}</p >
              </div>
            </div>

            <div style={{ display: "flex", paddingTop: "20px", flexDirection: "column", borderRight: " 2px dotted black", marginLeft: "30px", paddingRight: "30px" }}>

              <p className="printfont" style={{ fontSize: "10px" }}><b>ID</b></p >
              <p style={{ fontSize: "10px" }} >{formdata.customerid}</p>
              <p className="printfont" style={{ fontSize: "10px" }}><b>Name</b></p >
              <p style={{ fontSize: "10px" }}>{formdata.fullname}</p >
              <p className="printfont" style={{ fontSize: "10px" }}><b>Address</b></p >
              <p style={{ fontSize: "10px" }}>{formdata.address}</p >

              <p className="printfont" style={{ fontSize: "10px" }}><b>date</b></p >
              <p style={{ fontSize: "10px" }}>{formdata.date}</p >
            </div>

            {/* <QRCode value={qrcode} level="H" style={{ width: '200px', height: '200px' }} /> */}
            <div style={{ display: "flex", paddingTop: "20px", flexDirection: "column", paddingRight: "10px", paddingLeft: "10px" }}>
              <h4><b>Customer part</b></h4>


              <p className="printfont" style={{ fontSize: "10px" }}><b>ID</b></p >
              <p style={{ fontSize: "10px" }} >{formdata.customerid}</p>
              <p className="printfont" style={{ fontSize: "10px" }}><b>Name</b></p >
              <p style={{ fontSize: "10px" }}>{formdata.fullname}</p >
              <p className="printfont" style={{ fontSize: "10px" }}><b>Address</b></p >
              <p style={{ fontSize: "10px" }}>{formdata.address}</p >
              <p className="printfont" style={{ fontSize: "10px" }}><b>monthly fee</b></p >
              <p style={{ fontSize: "10px" }}>{formdata.monthlyfee}</p >
              <p className="printfont" style={{ fontSize: "10px" }}><b>date</b></p >
              <p style={{ fontSize: "10px" }}>{formdata.date}</p >
            </div>


            {/* <QRCode value={qrcode} level="H" style={{ width: '200px', height: '200px' }} /> */}
          </div>
        </Col>

      </Row>
      <Row>
        <Col md={12}></Col>
        <Col md={4} style={{ padding: "10px" }}>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              handleDownload();
            }}
          >
            Print
          </button>

        </Col>
        <Col md={4} style={{ padding: "10px" }}>
          <div >
            <Link to="/apps-collection-data">
              <button
                type="button"
                className="btn btn-success"
              >
                Next Page
              </button>
            </Link>
          </div>
        </Col>
      </Row>

    </div>
  );
};



// export default compose(connect(mapStateToProps, mapDispatchToProps))(Settings);
export default InvoiceStates;