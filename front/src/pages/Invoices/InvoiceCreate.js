import React, { useEffect, useState } from "react";
// import AmiriFont from '../../assets/fonts/Amiri-Regular.ttf';
// import './App.css'; 
import {
  CardBody,
  Row,
  Col,
  Card,
  Container,
  Form,
  Input,
  Label,
  Table,
} from "reactstrap";

import { Link } from "react-router-dom";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import MetaTags from 'react-meta-tags';
import Select from "react-select";

import logoDark from "../../assets/images/qrcode.jfif";
import logoLight from "../../assets/images/logo-light.png";
import { useSelector, useDispatch } from "react-redux";
import { sendInvoice } from "../../store/actions";
import { getOneInvoice } from "../../store/actions";
import jsPDF from "jspdf";
import QRCode from "qrcode";

import {

  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "reactstrap";
// import QRCode from 'qrcode.react';

const InvoiceCreate = () => {
  const [regionvalue, setisRegion] = useState();
  const [monthvalue, setisMonth] = useState();
  const [yearvalue, setisYear] = useState();
  const [invoicenumber, setInvoiceNumber] = useState(1);
  const [setdate, setDate] = useState('');
  const dispatch = useDispatch();
  const [defaultCounter, setdefaultCounter] = useState(1);
  const [invoicenum, setInvoiceNum] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [modal, setModal] = useState(false);
  const [qrcodedata, setQrcodeData] = useState([]);
  const [filtercustomer, setFilterCustomer] = useState([]);


  const togglemodal = async () => {
    await getCustomerID();
    await getCustomerData();
    // setModal(!modal);
    createPdf();
  };

  const getCustomerID = async () => {
    const getfilters = { monthvalue, yearvalue };
    try {
      const response = await fetch('http://localhost:8080/api/test/get_filters', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(getfilters),
      });
      const responseJson = await response.json();

      setFilterCustomer(responseJson);
      // console.log(responseJson, "customer");
    } catch (error) {
      console.error(error);
    }
  };

  const getCustomerData = async () => {
    const customerdata = [];
    console.log(filtercustomer.length);

    for (let i = 0; i < filtercustomer.length; i++) {
      const customerid = filtercustomer[i].CustomerID;
      const region = regionvalue.value;
      const getfilters = { customerid, region };
      try {
        const response = await fetch('http://localhost:8080/api/test/get_customer', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(getfilters),
        }).then(response => {
          return response.json();
        }).then(data => {

          customerdata.push(data);

        }
        );


      } catch (error) {
        console.error(error);
      }
    }

    const filteredArray = customerdata.filter(value => value.length > 0);

    setQrcodeData(filteredArray);
  };



  function countUP(id, invoicenumber) {
    if (invoicenumber < invoicenum) {
      id(invoicenumber + 1);
      invoicenumber = invoicenumber + 1;
      initInvoice({ invoicenumber });

      // initInvoice({invoicenumber});
    }
    else
      invoicenumber = invoicenum;
  }

  function countDown(id, invoicenumber) {
    if (invoicenumber > 1) {
      id(invoicenumber - 1);
      invoicenumber = invoicenumber - 1;
      initInvoice({ invoicenumber });
    }
    else
      invoicenumber = 1;
    // initInvoice({invoicenumber});
  }

  function countFullDown(id, invoicenumber) {

    id(invoicenumber - (invoicenumber - 1));
    invoicenumber = 1;
    initInvoice({ invoicenumber });

  }

  function countFullUP(id, invoicenumber) {
    id(invoicenumber + (invoicenum - invoicenumber));
    invoicenumber = invoicenumber + (invoicenum - invoicenumber);
    initInvoice({ invoicenumber });
  }

  const region = [
    {
      options: [
        { label: "عمشيت", value: "عمشيت" },
        { label: "ساحل علما", value: "ساحل علما" },
      ],
    },
  ];

  const month = [
    {
      options: [
        { label: "Jnuary", value: "1" },
        { label: "February", value: "2" },
        { label: "March", value: "3" },
        { label: "April", value: "4" },
        { label: "May", value: "5" },
        { label: "June", value: "6" },
        { label: "July", value: "7" },
        { label: "August", value: "8" },
        { label: "September", value: "9" },
        { label: "October", value: "10" },
        { label: "November", value: "11" },
        { label: "December", value: "12" },

      ],
    },
  ];

  const year = [
    {
      options: [
        { label: "2021", value: "2021" },
        { label: "2022", value: "2022" },
        { label: "2023", value: "2023" },
        { label: "2024", value: "2024" },
      ],
    },
  ];

  function handleisRegion(regionvalue) {
    setisRegion(regionvalue);
  }

  function handleisMonth(monthvalue) {
    setisMonth(monthvalue);
  }

  function handleisYear(yearvalue) {
    setisYear(yearvalue);
  }

  const setSendInvoice = () => {
    const data = { monthvalue, yearvalue, regionvalue, invoicenumber, setdate };
    console.log(data);
    dispatch(sendInvoice(data));
  }

  const setInitInvoice = () => {
    setisMonth("");
    setisRegion("");
    setisYear("");
    setDate("");
    console.log(invoicenum);
    setInvoiceNumber(invoicenum + 1);
    setIsChecked(false);
  }

  const initInvoice = async (data) => {
    try {
      console.log("number", data);
      const response = await fetch('http://localhost:8080/api/test/init_invoice_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const fag = true
      const responseJson = await response.json();
      console.log(responseJson);
      setisRegion(responseJson.regionvalue);
      setisMonth(responseJson.monthvalue);
      setisYear(responseJson.yearvalue);
      const dateobj = new Date(responseJson.setdate);
      console.log(dateobj)
      setIsChecked(fag);
      setDate(dateobj.toISOString().substring(0, 10))
    } catch (error) {
      console.error(error);
    }
  };

  const getInvoiceNumber = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/api/test/get_invoice_number', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const invoice_number = await response.json();
      console.log(invoice_number.length);
      setInvoiceNum(invoice_number.length)
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {

    initInvoice({ invoicenumber });
    getInvoiceNumber({ "data": "data" });

  }, [])


  //create pdf function
  async function createPdf() {
    const qrcodedatalength = qrcodedata ? qrcodedata.length : 5
    const pageCount = Math.ceil(qrcodedatalength / 5);
    const pageWidth = 595.28; // A4 page width in points
    const pageHeight = 841.89; // A4 page height in points
    const invoiceWidth = 400.5;
    const invoiceHeight = 168.3;
    const margin = 0;
    let invoiceIndex = 0;
    const borderThickness = 1;
    const codeWidth = 195.28;

    const pdf = new jsPDF("p", "pt", "a4");
    pdf.addFont("Amiri-Regular.ttf", "Amiri-Regular", "normal"); 
    pdf.setFont("Amiri-Regular", "normal");
    // pdf.setR2L(true);
        // pdf.addFont("NotoSansArabic-Regular.ttf", "NotoSansArabic", "normal"); 
    // pdf.setFont("NotoSansArabic", "normal");
    // pdf.setR2L(true);

    for (let i = 1; i <= pageCount; i++) {
      if (i > 1) {
        pdf.addPage();
      }

      for (let j = 0; j < 5; j++) {
        let invoice = {}
        if (qrcodedata[invoiceIndex]) {
          invoice = qrcodedata[invoiceIndex][0];
          console.log(invoice,"invoice");
        }

        if (!invoice) {
          break;
        }

        const x = margin;
        const y = margin + Math.floor(j) * (invoiceHeight + margin);
        const qrData = `عميل ${invoice.CustomerID}`
        const qrCode = await QRCode.toDataURL(qrData)

        pdf.rect(x, y, invoiceWidth, invoiceHeight);
        // pdf.rect(x+250, y, invoiceWidth-40, y+30);
        pdf.setFontSize(20);
        pdf.rect(x+20, y+30, invoiceWidth-40, invoiceHeight-40);

        pdf.text(`شبكة الكابل `, x+250 , y+20 );
        pdf.setFontSize(14);
        pdf.text(`مجموعة هوية الزبون : ${invoice.CustomerID} `, x + 10, y + 20);
        pdf.setFontSize(10);

        pdf.text(x + 150, y + 40, `منطقة: ${invoice.Region}`);
        pdf.text(`مبنى: ${invoice.Title}`, x + 250, y + 60);
        pdf.text(`كمية: ${invoice.MonthlyFee}`, x + 250, y + 80);
        pdf.text(`عميل: ${invoice.FirstName} ${invoice.LastName}`, x + 250, y + 100);
        pdf.text(`تاريخ: ${monthvalue.value + ",   " + yearvalue.value}`, x + 250, y + 120);

        pdf.addImage(qrCode, "JPEG", x + 30, y + 40, 100, 100);

        pdf.rect(x + invoiceWidth, y, codeWidth, invoiceHeight)
        pdf.setFontSize(14);
        pdf.text(`هوية الزبون ${invoice.CustomerID}`, x + invoiceWidth + 10, y + 20);

        pdf.setFontSize(10);
        pdf.text(`منطقة: ${invoice.Region}`, x + invoiceWidth +  30, y + 40);
        pdf.text(`عميل: ${invoice.FirstName} ${invoice.LastName}`, x + invoiceWidth +30, y + 60);
        pdf.text(`مبنى: ${invoice.Title}`, x + invoiceWidth +30, y + 80);
        pdf.text(`تاريخ: ${monthvalue.value +",   "+ yearvalue.value}`, x + invoiceWidth +30, y + 100);
        pdf.text(`كمية: ${invoice.MonthlyFee}`, x + invoiceWidth +30, y + 120);

        invoiceIndex++;
      }
    }
    // pdf.setR2L(false);
    pdf.save("invoices.pdf");

  }



  document.title = "Create Invoice";
  return (
    <div className="page-content">

      <Container fluid>
        <BreadCrumb title="Create Invoice" pageTitle="Invoices" />
        <Row className="justify-content-center">
          <Col xxl={9} >
            <Card>
              <Form className="needs-validation">
                <CardBody className="border-bottom border-bottom-dashed p-4">
                  <Row>
                    <Col lg={4}>
                      <div className="profile-user mx-auto  mb-3">
                        <Input
                          id="profile-img-file-input"
                          type="file"
                          className="profile-img-file-input"
                        />
                        <Label for="profile-img-file-input" className="d-block">
                          <span
                            className="overflow-hidden border border-dashed d-flex align-items-center justify-content-center rounded"
                            style={{ height: "60px", width: "256px" }}
                          >
                            <img
                              src={logoDark}
                              className="card-logo card-logo-dark user-profile-image img-fluid"
                              alt="logo dark"
                            />

                          </span>
                        </Label>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardBody className="p-4">
                  <Row className="g-3">
                    <Col lg={4} sm={6}>
                      <Label for="invoicenoInput">Invoice No</Label>
                      <Input
                        type="number"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        name="invoicenumber"
                        value={invoicenumber}
                        onChange={(e) => {
                          setInvoiceNumber(e.target.value);
                        }}
                      />
                    </Col>
                    <Col lg={4} sm={6}>
                      <div>
                        <Label for="date-field">Date</Label>
                        <Input
                          type="date"
                          className="form-control bg-light border-0"
                          id="date-field"
                          data-provider="flatpickr"
                          data-time="true"
                          placeholder="Select Date-time"
                          name="setdate"
                          value={setdate}
                          onChange={(e) => {
                            setDate(e.target.value);
                          }}
                        />
                      </div>
                    </Col>

                    <Col lg={4} sm={6}>
                      <Row>
                        <Label for="choices-payment-status">Region</Label>
                        <div className="input-light">
                          <Select
                            className="bg-light border-0"
                            value={regionvalue}
                            onChange={
                              handleisRegion}
                            options={region}
                            id="choices-payment-status"
                          ></Select>
                        </div>
                        <Label for="choices-payment-status">Month</Label>
                        <div className="input-light">
                          <Select
                            className="bg-light border-0"
                            value={monthvalue}
                            onChange={
                              handleisMonth
                            }
                            options={month}
                            id="choices-payment-status"
                          ></Select>
                        </div>
                        <Label for="choices-payment-status">Year</Label>
                        <div className="input-light">
                          <Select
                            className="bg-light border-0"
                            value={yearvalue}
                            onChange={
                              handleisYear}
                            options={year}
                            id="choices-payment-status"
                          ></Select>
                        </div>
                      </Row>
                      <Row>
                        <Col sm={6}>
                          <div>
                            <h5 className="fs-13 fw-medium text-muted">
                              Default
                            </h5>
                            <div className="input-step">
                              <button
                                type="button"
                                className="minus"
                                onClick={() => {
                                  countFullDown(setInvoiceNumber, invoicenumber);
                                }}
                              >
                                <i className="ri-rewind-mini-line"></i>
                              </button>
                              <button
                                type="button"
                                className="minus"
                                onClick={() => {
                                  countDown(setInvoiceNumber, invoicenumber);
                                }}
                              >
                                <i className="ri-skip-back-mini-line"></i>
                              </button>
                              <Input
                                type="number"
                                className="product-quantity"
                                value={invoicenumber}
                                min="0"
                                max="100"
                                readOnly
                              />
                              <button
                                type="button"
                                className="plus"
                                onClick={() => {
                                  countUP(setInvoiceNumber, invoicenumber);
                                }}
                              >
                                <i className=" ri-skip-forward-mini-line"></i>
                              </button>
                              <button
                                type="button"
                                className="plus"
                                onClick={() => {
                                  countFullUP(setInvoiceNumber, invoicenumber);
                                }}
                              >
                                <i className=" ri-speed-mini-line"></i>
                              </button>
                            </div>
                          </div>
                        </Col>
                      </Row>

                    </Col>
                  </Row>

                </CardBody>
              </Form>
              <CardBody>
                <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                  <button
                    className="btn btn-soft-secondary fw-medium" onClick={setInitInvoice}
                  >
                    <i className="ri-add-fill me-1 align-bottom"></i>
                    Create Invoice
                  </button>
                  <button className="btn btn-success" onClick={setSendInvoice}>
                    <i className="ri-printer-line align-bottom me-1"></i> QR code Generate
                  </button>
                  <button className="btn btn-primary" onClick={togglemodal}>
                    <i className="ri-download-2-line align-bottom me-1"></i>
                    Download Invoice
                  </button>
                  <div className="form-check">
                    <Input className="form-check-input" type="checkbox" defaultValue="" id="dashboardTask" checked={isChecked} />
                    <Label className="form-check-label" htmlFor="dashboardTask">
                      Generated
                    </Label>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal
          isOpen={modal}
          role="dialog"
          autoFocus={true}
          size="xl"
          id="addAddressModal"
          toggle={togglemodal}
        >
          <ModalHeader
            toggle={() => {
              setModal(!modal);
            }}
          >
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                setModal(!modal);
              }}
            >
              Save
            </button>
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-sm-12" style={{ paddingTop: "100px" }}>
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
                      filtercustomer
                        ?
                        filtercustomer.map((filtercustomer, index) => (
                          <tr key={index}>
                            <th scope="row">{filtercustomer.PaymentID}</th>
                            <td>{filtercustomer.Month}</td>
                            <td>{filtercustomer.Year}</td>
                            <td>{filtercustomer.CustomerID}</td>
                            <td>{filtercustomer.PaymentH}</td>
                            {/* <td>{ filtercustomer.PaymentFor }</td>
                                            <td>{ filtercustomer.Paid }</td> */}
                            <td>{filtercustomer.AmountPaid}</td>
                            <td>{filtercustomer.realamount}</td>

                            <td><span className="badge bg-warning text-dark">{filtercustomer.Rating}</span></td>
                          </tr>
                        ))
                        :
                        <tr>
                          <td colSpan="5" className="text-center">No filtercustomers Found.</td>
                        </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Container>
    </div>


  );
};

export default InvoiceCreate;
