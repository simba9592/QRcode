import React, { useEffect, useState } from "react";

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

import {

  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "reactstrap";

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
  const [qrcodedata, setQrcodeData] = useState();

  const togglemodal = () => {
    getCustomerID();
    setModal(!modal);
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
      setQrcodeData(responseJson);
    } catch (error) {
      console.error(error);
    }
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
            <Form>
              <div className="mb-3">
                <Label for="addaddress-Name" className="form-label">
                  Time
                </Label>
              </div>

              <div className="mb-3">
                <Label for="addaddress-textarea" className="form-label">
                  Fuel
                </Label>
              </div>

              <div className="mb-3">
                <Label for="addaddress-Name" className="form-label">
                  Oils
                </Label>

              </div>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    </div>


  );
};

export default InvoiceCreate;
