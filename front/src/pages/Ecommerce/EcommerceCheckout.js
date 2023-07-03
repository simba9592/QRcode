import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
//Import Breadcrumb
import { CardBody, Row, Col, Card, Table, CardHeader, Container, FormFeedback } from "reactstrap";
import { Nav, NavItem, NavLink, TabContent, TabPane, Button } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import { read, utils, writeFile } from 'xlsx';
import * as Yup from "yup";
import { useFormik } from "formik";
import URLname from "../../common/const";

import {

  Form,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Label,
  Input,
} from "reactstrap";

import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { sendPayments, sendReport } from "../../store/actions";
import { sendCustomers } from "../../store/actions";
import { sendBuilding } from "../../store/actions";


const EcommerceCheckout = () => {
  const [selectedRegion, setselectRegion] = useState("");
  const [selectedMark, setselectedMark] = useState("");
  const [selectedDates, setSelectedDates] = useState('');
  const [passedSteps, setPassedSteps] = useState([1]);
  const [modal, setModal] = useState(false);
  const [modal_fo, setModal_fo] = useState(false)
  const [selectedFiles, setselectedFiles] = useState([]);
  const [selectedFiles_oils, setselectedFiles_oils] = useState([]);
  const [selectedfiles_service, setselectedFiles_service] = useState([]);
  const [selectedfiles_fbo, setselectedFiles_fbo] = useState([]);
  const [formpredata, setFormPreData] = useState({
    hobbs: 0,
    tach: 0,
    heates: 0,
    fuelleft: 0,
    fuelright: 0,
    oilsleft: 0,
    oilsright: 0,
  });
  const [formpostdata, setFormPostData] = useState({
    posthobbstime: 0,
    posttachtime: 0,
    postheatetime: 0,
    postfuelleft: 0,
    postfuelright: 0,
    postoilsleft: 0,
    postoilsright: 0,
  })
  const [hobbsresult, setHobbsResult] = useState(0);
  const [tachresult, setTachResult] = useState(0);
  const [heateresult, setHeateResult] = useState(0);
  const [fuelleftresult, setFuelLeftResult] = useState(0);
  const [fuelrightresult, setFuelRightResult] = useState(0);
  const [oilsleftresult, setOilsLeftResult] = useState(0);
  const [oilsrightresult, setOilsRightResult] = useState(0);

  const [fuelexpenss, setFuelExpenss] = useState("");
  const [regionmonthlyfee, setRegionMonthlyFee] = useState(0);
  const [personmonthlyfee, setPersonMonthlyFee] = useState(0);
  const [clientfirstname, setClientFirstName] = useState('');
  const [clientlastname, setClientLastName] = useState('');
  const [oilsexpenss, setOilsExpenss] = useState("");
  const [serviceexpenss, setServiceExpenss] = useState("");
  const [fboexpenss, setFboExpenss] = useState("");
  const [customer, setCustomer] = useState([]);
  const [payments, setPayments] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [customerid, setCustomerID] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [monthlyfee, setMonthlyFee] = useState(0);
  const [paidsubscription, setPaidSubscription] = useState(0);
  const handleCustomerImport = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setCustomer(rows)
        }
      }
      reader.readAsArrayBuffer(file);
    }
  }

  const handlePaymentsImport = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setPayments(rows)
        }
      }
      reader.readAsArrayBuffer(file);
    }
  }

  const handleBuildingsImport = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setBuildings(rows)
        }
      }
      reader.readAsArrayBuffer(file);
    }
  }

  const sendCustomerData = () => {
    dispatch(sendCustomers(customer));
  }

  const postSendPaymentsData = () => {
    dispatch(sendPayments(buildings));
  }

  const postSendBuildingsData = () => {
    dispatch(sendBuilding(payments));
  }

  const togglemodal = () => {
    setModal(!modal);
  };

  const togglemodal_fo = () => {
    setModal_fo(!modal_fo);
  };

  const [activeTab, setactiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };

  const [pillsTab, setpillsTab] = useState("1");
  const pillsToggle = (tab) => {
    if (pillsTab !== tab) {
      setpillsTab(tab);
    }
  };


  const [verticalTab, setverticalTab] = useState("1");
  const toggleVertical = (tab) => {
    if (verticalTab !== tab) {
      setverticalTab(tab);
    }
  };

  const [customverticalTab, setcustomverticalTab] = useState("1");
  const customtoggleVertical = (tab) => {
    if (customverticalTab !== tab) {
      setcustomverticalTab(tab);
    }
  };

  const handleSelectRegion = (selectedRegion) => {
    setselectRegion(selectedRegion);
  }

  function handleselectMark(selectedMark) {
    setselectedMark(selectedMark);


  }
  const handleSelectDates = (dates) => {
    setSelectedDates(dates);
  }

  function toggleTab(tab) {

    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];

      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
  }

  const dispatch = useDispatch();



  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const handlePreDataChange = (event) => {
    setFormPreData({
      ...formpredata,
      [event.target.name]: event.target.value
    })
  }



  const handlePostDataChange = (event) => {
    setFormPostData({
      ...formpostdata,
      [event.target.name]: event.target.value
    })
  }

  const calculator = () => {
    const hobbsresult = formpostdata.posthobbstime - formpredata.hobbs;
    const tachresult = formpostdata.posttachtime - formpredata.tach;
    const heateresult = formpostdata.postheatetime - formpredata.heates;
    const fuelleftcal = formpostdata.postfuelleft - formpredata.fuelleft;
    const fuelrightcal = formpostdata.postfuelright - formpredata.fuelright;
    const oilsleftcal = formpostdata.postoilsleft - formpredata.oilsleft;
    const oilsrightcal = formpostdata.postoilsright - formpredata.oilsright;
    setHobbsResult(hobbsresult);
    setTachResult(tachresult);
    setHeateResult(heateresult);
    setFuelLeftResult(fuelleftcal);
    setFuelRightResult(fuelrightcal);
    setOilsLeftResult(oilsleftcal);
    setOilsRightResult(oilsrightcal);
  }

  const productCountry = [
    {
      options: [
        { label: "Select Region...", value: "Select Region" },
        { label: "ساحل علما", value: "ساحل علما" },
        { label: "عمشيت", value: "عمشيت" },
      ],
    },
  ];


  const sendRegionMonthlyfeeFixData = async () => {
    const sendregionmonthlyfeedata = { selectedRegion, regionmonthlyfee };
    try {
      const response = await fetch(URLname + '/api/test/region_monthlyfee_fix', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendregionmonthlyfeedata),
      });
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  };

  const sendPersonMonthlyFeeFixData = async () => {
    const sendpersonmonthlyfeedata = { clientfirstname, clientlastname, personmonthlyfee };
    console.log(sendpersonmonthlyfeedata);
    try {
      const response = await fetch(URLname + '/api/test/person_monthlyfee_fix', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendpersonmonthlyfeedata),
      });
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  };

  const sendPaidSubscription = async () => {
    const paidsubscriptiondata = { customerid, firstname, lastname, paidsubscription, monthlyfee }
    console.log(paidsubscriptiondata)
    try {
      const response = await fetch(URLname + '/api/test/paidsubscription', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paidsubscriptiondata),
      });
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  }
//customer variable
  const [customerid_create, setCustomerIDCreate] = useState('');
  const [firstname_create, setFirstNameCreate] = useState('');
  const [lastname_create, setLastNameCreate] = useState('');
  const [monthlyfee_create, setMonthlyFeeCreate] = useState(0);
  const [region_create, setRegionCreate] = useState('');
  const [address_create, setAddressCreate] = useState('');
  const [subscription_create, setSubscriptionCreate] = useState('');
  const [phonenumber_create, setPhoneNumberCreate] = useState('');
  const [title_create, setTitleCreate] = useState('');

  //payment variable
  const [customerid_payment, setCustomerIDPayment] = useState('');
  const [paymentid, setPaymentId] = useState('');
  const [month_payment, setMonthPayment] = useState('');
  const [year_payment, setYearPayment] = useState('');
  const [paymenth_payment, setPaymentHPayment] = useState(0);
  const [amount_payment, setAmountPaid] = useState(0);
  const [realamount_payment, setRealAmount] = useState(0);

  //building variable
  const [buildingid, setBldgID] = useState('');
  const [buildingname, setBldgName] = useState('');
  const [region_building, setRegionBuilding] = useState('');
  const [building_address, setBuildingAddress] = useState('');
  const [building_order, setBuildingOrder] = useState('');

  const sendCreatePayment = async () => {
    const sendcreatepaymentdata = { customerid_payment, paymentid, month_payment, year_payment, paymenth_payment, amount_payment, realamount_payment };
    console.log(sendcreatepaymentdata);
    try {
      const response = await fetch(URLname + '/api/test/sendpaymentdata', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendcreatepaymentdata),
      });
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

  const sendCreateBuilding = async () => {
    const sendcreatebuildingdata = { buildingid, buildingname, region_building, building_address, building_order };
    console.log(sendcreatebuildingdata);
    try {
      const response = await fetch(URLname + '/api/test/sendbuilding', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendcreatebuildingdata),
      });
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

  const sendCreateCustomer = async () => {
    const sendcreatecustomerdata = { customerid_create, firstname_create, lastname_create, monthlyfee_create, region_create, address_create, subscription_create, phonenumber_create, title_create}
    console.log(sendcreatecustomerdata);
    try {
      const response = await fetch(URLname + '/api/test/sendcustomer', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendcreatecustomerdata),
      });
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

  document.title = "Create Report";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xl="12">
              <Card>
                <CardBody className="checkout-tab">
                  <Form action="#">
                    <div className="step-arrow-nav mt-n3 mx-n3 mb-3">
                      <Nav
                        className="nav-pills nav-justified custom-nav"
                        role="tablist"
                      >
                        <NavItem role="presentation">
                          <NavLink href="#"
                            className={classnames({ active: activeTab === 1, done: (activeTab <= 4 && activeTab >= 0) }, "p-3")}
                            onClick={() => { toggleTab(1); }}
                          >
                            <i className="ri-user-2-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Insert Data
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink href="#"
                            className={classnames({ active: activeTab === 2, done: activeTab <= 4 && activeTab > 1 }, "p-3")}
                            onClick={() => { toggleTab(2); }}
                          >
                            <i className=" ri-pencil-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Set MonthlyFee
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink href="#"
                            className={classnames({ active: activeTab === 3, done: activeTab <= 4 && activeTab > 2 }, "p-3")}
                            onClick={() => { toggleTab(3); }}
                          >
                            <i className="ri-calendar-check-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Unpaid Amount Create
                          </NavLink>
                        </NavItem>
                        {/* <NavItem role="presentation">
                          <NavLink href="#"
                            className={classnames({ active: activeTab === 4, done: activeTab <= 4 && activeTab > 3 }, "p-3")}
                            onClick={() => { toggleTab(4); }}
                          >
                            <i className="ri-checkbox-circle-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Finish
                          </NavLink>
                        </NavItem> */}
                      </Nav>
                    </div>

                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={1} id="pills-bill-info">
                        <div>
                          <p className="text-muted mb-4">
                            Please choose Data
                          </p>
                        </div>

                        <div>
                          <Row>
                            <div className="row" >
                              <div className="col-sm-6 offset-1">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="input-group">
                                      <div className="custom-file">
                                        <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleCustomerImport}
                                          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile">Choose Customer file</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => {
                                sendCustomerData();
                              }}
                            >
                              Save
                            </button>
                          </Row>
                          <Row>
                            <div className="row" >
                              <div className="col-sm-6 offset-1">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="input-group">
                                      <div className="custom-file">
                                        <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handlePaymentsImport}
                                          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile">Choose payments file</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => {
                                postSendPaymentsData();
                              }}
                            >
                              Save
                            </button>
                          </Row>
                          <Row>
                            <div className="row" >
                              <div className="col-sm-6 offset-1">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="input-group">
                                      <div className="custom-file">
                                        <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleBuildingsImport}
                                          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile">Choose Buildings file</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => {
                                postSendBuildingsData();
                              }}
                            >
                              Save
                            </button>
                          </Row>

                        </div>
                      </TabPane>

                      <TabPane tabId={2} id="pills-bill-info">
                        <div>
                          <h5 className="mb-1">Monthlyfee Mode</h5>
                          <p className="text-muted mb-4">
                            Please Select the Mode
                          </p>
                        </div>
                        <div>
                          <CardBody>

                            <Nav pills className="nav-success mb-3 sm-12">
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: pillsTab === "1", })} onClick={() => { pillsToggle("1"); }} >
                                  MonthlyFee by Region
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: pillsTab === "2", })} onClick={() => { pillsToggle("2"); }} >
                                  MonthlyFee by Person
                                </NavLink>
                              </NavItem>
                            </Nav>

                            <TabContent activeTab={pillsTab} className="text-muted">
                              <TabPane tabId="1" id="Hobbs">
                                <CardBody className="p-4">
                                  <Row>
                                    <Col md={4}>
                                      <div className="mb-3">
                                        <Label htmlFor="country" className="form-label">
                                          Choose Region
                                        </Label>
                                        <Select
                                          value={selectedRegion}
                                          onChange={
                                            handleSelectRegion
                                          }
                                          options={productCountry}
                                          id="country"
                                        ></Select>
                                      </div>
                                    </Col>
                                    <Col md={4}>
                                      <Label for="addaddress-Name" className="form-label">
                                        MonthlyFee
                                      </Label>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        id="addaddress-textarea"
                                        name="regionmonthlyfee"
                                        value={regionmonthlyfee}
                                        onChange={e => setRegionMonthlyFee(e.target.value)}
                                      />
                                    </Col>
                                    <Col md={4} style={{ display: "flex", alignItems: "center" }}>
                                      <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => {
                                          sendRegionMonthlyfeeFixData();
                                        }}
                                      >
                                        Save
                                      </button>
                                    </Col>
                                  </Row>

                                </CardBody>
                              </TabPane>

                              <TabPane tabId="2" id="profile-1">

                                <TabPane tabId="1" id="Hobbs">
                                  <CardBody className="p-4">
                                    <Row>
                                      <Col md={3}>
                                        <Label for="addaddress-Name" className="form-label">
                                          Input Customer First Name
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="addaddress-textarea"
                                          name="clientfirstname"
                                          value={clientfirstname}
                                          onChange={e => setClientFirstName(e.target.value)}
                                        />
                                      </Col>
                                      <Col md={3}>
                                        <Label for="addaddress-Name" className="form-label">
                                          Input Customer Last Name
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="addaddress-textarea"
                                          name="clientlastname"
                                          value={clientlastname}
                                          onChange={e => setClientLastName(e.target.value)}
                                        />
                                      </Col>
                                      <Col md={3}>
                                        <Label for="addaddress-Name" className="form-label">
                                          MonthlyFee
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          id="addaddress-textarea"
                                          name="personmonthlyfee"
                                          value={personmonthlyfee}
                                          onChange={e => setPersonMonthlyFee(e.target.value)}
                                        />
                                      </Col>
                                      <Col md={3} style={{ display: "flex", alignItems: "end" }}>
                                        <button
                                          type="button"
                                          className="btn btn-success"
                                          onClick={() => {
                                            sendPersonMonthlyFeeFixData();
                                          }}
                                        >
                                          Save
                                        </button>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </TabPane>
                              </TabPane>
                            </TabContent>
                          </CardBody>
                        </div>
                      </TabPane>
                      <TabPane tabId={3} id="pills-bill-info">
                        <div>
                          <h5 className="mb-1">Create Paid Subscription</h5>
                        </div>
                        <div>
                          <CardBody>
                            <Form>

                              <div className="mb-3">
                                <Label htmlFor="customerID" className="form-label">CustomerID</Label>
                                <Input
                                  name="customerID"
                                  className="form-control"
                                  placeholder="Enter customerID"
                                  type="customerID"
                                  value={customerid}
                                  onChange={e => setCustomerID(e.target.value)}

                                />
                              </div>

                              <div className="mb-3">
                                <Label className="form-label" htmlFor="firstname-input">FirstName</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="firstname"
                                    value={firstname}
                                    type="firstname"
                                    className="form-control pe-5"
                                    placeholder="Enter firstname"
                                    onChange={e => setFirstName(e.target.value)}
                                  />
                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="firstname-addon"></button>
                                </div>
                              </div>

                              <div className="mb-3">
                                <Label className="form-label" htmlFor="lastname-input">LastName</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="lastname"
                                    value={lastname}
                                    type="lastname"
                                    className="form-control pe-5"
                                    placeholder="Enter lastname"
                                    onChange={e => setLastName(e.target.value)}
                                  />

                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="lastname-addon"></button>
                                </div>
                              </div>

                              <div className="mb-3">
                                <Label className="form-label" htmlFor="monthlyfee-input">MonthlyFee</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="monthlyfee"
                                    value={monthlyfee}
                                    type="number"
                                    className="form-control pe-5"
                                    placeholder="Enter monthlyfee"
                                    onChange={e => setMonthlyFee(e.target.value)}
                                  />

                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="monthlyfee-addon"></button>
                                </div>
                              </div>


                              <div className="mb-3">
                                <Label className="form-label" htmlFor="paidsubscription-input">Paid Subscription</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="paidsubscription"
                                    value={paidsubscription}
                                    type="number"
                                    className="form-control pe-5"
                                    placeholder="Enter paidsubscription"
                                    onChange={e => setPaidSubscription(e.target.value)}
                                  />

                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="paidsubscription-addon"></button>
                                </div>
                              </div>

                              <div className="mt-4">
                                <Button color="success" className="btn btn-success w-100" onClick={sendPaidSubscription}>Save</Button>
                              </div>
                            </Form>
                          </CardBody>
                        </div>

                        <div >
                          <div>
                            <h5 className="mb-1">Create Customer</h5>
                          </div>
                          <CardBody>
                            <Form>
                              <Row>
                                <Col lg={4} sm={6}>
                                  <Label htmlFor="customerID" className="form-label">CustomerID</Label>
                                  <Input
                                    name="customerID"
                                    className="form-control"
                                    placeholder="Enter customerID"
                                    type="customerID"
                                    value={customerid_create}
                                    onChange={e => setCustomerIDCreate(e.target.value)}

                                  />
                                </Col>

                                <Col lg={4} sm={6}>
                                  <Label className="form-label" htmlFor="firstname-input">FirstName</Label>
                                  <div className="position-relative auth-pass-inputgroup mb-3">
                                    <Input
                                      name="firstname"
                                      value={firstname_create}
                                      type="firstname"
                                      className="form-control pe-5"
                                      placeholder="Enter firstname"
                                      onChange={e => setFirstNameCreate(e.target.value)}
                                    />
                                    <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="firstname-addon"></button>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={4} sm={6}>
                                  <Label className="form-label" htmlFor="lastname-input">LastName</Label>
                                  <div className="position-relative auth-pass-inputgroup mb-3">
                                    <Input
                                      name="lastname"
                                      value={lastname_create}
                                      type="lastname"
                                      className="form-control pe-5"
                                      placeholder="Enter lastname"
                                      onChange={e => setLastNameCreate(e.target.value)}
                                    />

                                    <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="lastname-addon"></button>
                                  </div>
                                </Col>

                                <Col lg={4} sm={6}>
                                  <Label className="form-label" htmlFor="monthlyfee-input">MonthlyFee</Label>
                                  <div className="position-relative auth-pass-inputgroup mb-3">
                                    <Input
                                      name="monthlyfee"
                                      value={monthlyfee_create}
                                      type="number"
                                      className="form-control pe-5"
                                      placeholder="Enter monthlyfee"
                                      onChange={e => setMonthlyFeeCreate(e.target.value)}
                                    />

                                    <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="monthlyfee-addon"></button>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={4} sm={6}>
                                  <Label className="form-label" htmlFor="region-input">Region</Label>
                                  <div className="position-relative auth-pass-inputgroup mb-3">
                                    <Input
                                      name="region"
                                      value={region_create}
                                      type="text"
                                      className="form-control pe-5"
                                      placeholder="Enter Region"
                                      onChange={e => setRegionCreate(e.target.value)}
                                    />

                                    <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="paidsubscription-addon"></button>
                                  </div>
                                </Col>

                                <Col lg={4} sm={6}>
                                  <Label className="form-label" htmlFor="address-input">Address</Label>
                                  <div className="position-relative auth-pass-inputgroup mb-3">
                                    <Input
                                      name="address"
                                      value={address_create}
                                      type="text"
                                      className="form-control pe-5"
                                      placeholder="Enter Address"
                                      onChange={e => setAddressCreate(e.target.value)}
                                    />

                                    <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="paidsubscription-addon"></button>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={4} sm={6}>
                                  <Label className="form-label" htmlFor="subscription-input">Subscription</Label>
                                  <div className="position-relative auth-pass-inputgroup mb-3">
                                    <Input
                                      name="subscription"
                                      value={subscription_create}
                                      type="text"
                                      className="form-control pe-5"
                                      placeholder="Enter subscription"
                                      onChange={e => setSubscriptionCreate(e.target.value)}
                                    />

                                    <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="paidsubscription-addon"></button>
                                  </div>
                                </Col>

                                <Col lg={4} sm={6}>
                                  <Label className="form-label" htmlFor="phonenumber-input">PhoneNumber</Label>
                                  <div className="position-relative auth-pass-inputgroup mb-3">
                                    <Input
                                      name="phonenumber"
                                      value={phonenumber_create}
                                      type="text"
                                      className="form-control pe-5"
                                      placeholder="Enter PhoneNumber"
                                      onChange={e => setPhoneNumberCreate(e.target.value)}
                                    />

                                    <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="paidsubscription-addon"></button>
                                  </div>
                                </Col>
                              </Row>
                              <Col lg={4} sm={6}>
                                <Label className="form-label" htmlFor="title-input">Title</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="title"
                                    value={title_create}
                                    type="text"
                                    className="form-control pe-5"
                                    placeholder="Enter title"
                                    onChange={e => setTitleCreate(e.target.value)}
                                  />

                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="paidsubscription-addon"></button>
                                </div>
                              </Col>

                              <div className="mt-4">
                                <Button color="success" className="btn btn-success w-100" onClick={sendCreateCustomer}>Save</Button>
                              </div>
                            </Form>
                          </CardBody>
                        </div>

                        <div >
                          <div>
                            <h5 className="mb-1">Create Payment</h5>
                          </div>
                          <CardBody>
                            <Form>

                            <Col lg={4} sm={6}>
                                <Label htmlFor="customerID" className="form-label">CustomerID</Label>
                                <Input
                                  name="customerID"
                                  className="form-control"
                                  placeholder="Enter customerID"
                                  type="customerID"
                                  value={customerid_payment}
                                  onChange={e => setCustomerIDPayment(e.target.value)}

                                />
                              </Col>

                              <Col lg={4} sm={6}>
                                <Label className="form-label" htmlFor="firstname-input">PaymentID</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="paymentid"
                                    value={paymentid}
                                    type="paymentid"
                                    className="form-control pe-5"
                                    placeholder="Enter paymentid"
                                    onChange={e => setPaymentId(e.target.value)}
                                  />
                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="firstname-addon"></button>
                                </div>
                              </Col>

                              <Col lg={4} sm={6}>
                                <Label className="form-label" htmlFor="month-input">Month</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="month"
                                    value={month_payment}
                                    type="text"
                                    className="form-control pe-5"
                                    placeholder="Enter Month"
                                    onChange={e => setMonthPayment(e.target.value)}
                                  />

                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="lastname-addon"></button>
                                </div>
                              </Col>

                              <Col lg={4} sm={6}>
                                <Label className="form-label" htmlFor="monthlyfee-input">Year</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="year"
                                    value={year_payment}
                                    type="text"
                                    className="form-control pe-5"
                                    placeholder="Enter year"
                                    onChange={e => setYearPayment(e.target.value)}
                                  />

                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="monthlyfee-addon"></button>
                                </div>
                              </Col>


                              <Col lg={4} sm={6}>
                                <Label className="form-label" htmlFor="paymenth-input">PaymentH</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="paymenth"
                                    value={paymenth_payment}
                                    type="number"
                                    className="form-control pe-5"
                                    placeholder="Enter PaymentH"
                                    onChange={e => setPaymentHPayment(e.target.value)}
                                  />

                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="paidsubscription-addon"></button>
                                </div>
                              </Col>

                              <Col lg={4} sm={6}>
                                <Label className="form-label" htmlFor="paymenth-input">Amount Paid(L.L.)</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="amountpaid"
                                    value={amount_payment}
                                    type="number"
                                    className="form-control pe-5"
                                    placeholder="Enter Amount Paid"
                                    onChange={e => setAmountPaid(e.target.value)}
                                  />

                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="paidsubscription-addon"></button>
                                </div>
                              </Col>

                              <Col lg={4} sm={6}>
                                <Label className="form-label" htmlFor="paymenth-input">Realamount</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="realamount"
                                    value={realamount_payment}
                                    type="number"
                                    className="form-control pe-5"
                                    placeholder="Enter realamount"
                                    onChange={e => setRealAmount(e.target.value)}
                                  />

                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="paidsubscription-addon"></button>
                                </div>
                              </Col>

                              <div className="mt-4">
                                <Button color="success" className="btn btn-success w-100" onClick={sendCreatePayment}>Save</Button>
                              </div>
                            </Form>
                          </CardBody>
                        </div>

                        <div >
                          <div>
                            <h5 className="mb-1">Create Building</h5>
                          </div>
                          <CardBody>
                            <Form>

                              <div className="mb-3">
                                <Label htmlFor="customerID" className="form-label">BldgID</Label>
                                <Input
                                  name="BldgID"
                                  className="form-control"
                                  placeholder="Enter customerID"
                                  type="BldgID"
                                  value={buildingid}
                                  onChange={e => setBldgID(e.target.value)}

                                />
                              </div>

                              <div className="mb-3">
                                <Label className="form-label" htmlFor="firstname-input">BldgName</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="BldgName"
                                    value={buildingname}
                                    type="BldgName"
                                    className="form-control pe-5"
                                    placeholder="Enter BldgName"
                                    onChange={e => setBldgName(e.target.value)}
                                  />
                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="firstname-addon"></button>
                                </div>
                              </div>

                              <div className="mb-3">
                                <Label className="form-label" htmlFor="lastname-input">Region</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="Region"
                                    value={region_building}
                                    type="Region"
                                    className="form-control pe-5"
                                    placeholder="Enter Region"
                                    onChange={e => setRegionBuilding(e.target.value)}
                                  />

                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="lastname-addon"></button>
                                </div>
                              </div>

                              <div className="mb-3">
                                <Label className="form-label" htmlFor="monthlyfee-input">BldgAddress</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="BldgAddress"
                                    value={building_address}
                                    type="BldgAddress"
                                    className="form-control pe-5"
                                    placeholder="Enter BldgAddress"
                                    onChange={e => setBuildingAddress(e.target.value)}
                                  />

                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="monthlyfee-addon"></button>
                                </div>
                              </div>


                              <div className="mb-3">
                                <Label className="form-label" htmlFor="paidsubscription-input">BldgOrder</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <Input
                                    name="BldgOrder"
                                    value={building_order}
                                    type="BldgOrder"
                                    className="form-control pe-5"
                                    placeholder="Enter BldgOrder"
                                    onChange={e => setBuildingOrder(e.target.value)}
                                  />

                                  <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none" type="button" id="paidsubscription-addon"></button>
                                </div>
                              </div>

                              

                              <div className="mt-4">
                                <Button color="success" className="btn btn-success w-100" onClick={sendCreateBuilding}>Save</Button>
                              </div>
                            </Form>
                          </CardBody>
                        </div>

                      </TabPane>

                    </TabContent>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal
        isOpen={modal}
        role="dialog"
        autoFocus={true}
        centered
        id="addAddressModal"
        toggle={togglemodal}
      >
        <ModalHeader
          toggle={() => {
            setModal(!modal);
          }}
        >
          Pre Flight
        </ModalHeader>
        <ModalBody>
          <Form>
            <div className="mb-3">
              <Label for="addaddress-Name" className="form-label">
                Time
              </Label>
              <Input
                type="number"
                className="form-control"
                name="hobbs"
                value={formpredata.hobbs}
                onChange={handlePreDataChange}
              />
              <Input
                type="number"
                className="form-control"
                name="tach"
                value={formpredata.tach}
                onChange={handlePreDataChange}
              />
              <Input
                type="number"
                className="form-control"
                name="heates"
                value={formpredata.heates}
                onChange={handlePreDataChange}
              />
            </div>

            <div className="mb-3">
              <Label for="addaddress-textarea" className="form-label">
                Fuel
              </Label>
              <Input
                type="number"
                className="form-control"
                name="fuelleft"
                value={formpredata.fuelleft}
                onChange={handlePreDataChange}
              />
              <Input
                type="number"
                className="form-control"
                name="fuelright"
                value={formpredata.fuelright}
                onChange={handlePreDataChange}
              />
            </div>

            <div className="mb-3">
              <Label for="addaddress-Name" className="form-label">
                Oils
              </Label>
              <Input
                type="number"
                className="form-control"
                name="oilsleft"
                value={formpredata.oilsleft}
                onChange={handlePreDataChange}
              />
              <Input
                type="number"
                className="form-control"
                name="oilsright"
                value={formpredata.oilsright}
                onChange={handlePreDataChange}
              />
            </div>
          </Form>
        </ModalBody>

        <ModalFooter>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              setModal(!modal);
            }}
          >
            Save
          </button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default EcommerceCheckout;
