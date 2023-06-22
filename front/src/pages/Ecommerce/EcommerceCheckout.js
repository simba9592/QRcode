import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
//Import Breadcrumb
import { CardBody, Row, Col, Card, Table, CardHeader, Container } from "reactstrap";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Dropzone from "react-dropzone";

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
import { sendReport } from "../../store/actions";

const EcommerceCheckout = () => {
  const [selectedAirplane, setselectAirplane] = useState("");
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
    hobbs:0,
    tach : 0,
    heates :0, 
    fuelleft : 0,
    fuelright : 0,
    oilsleft : 0,
    oilsright :0,
  });
  const [formpostdata, setFormPostData] = useState({
    posthobbstime : 0,
    posttachtime: 0,
    postheatetime : 0,
    postfuelleft : 0,
    postfuelright :0,
    postoilsleft : 0,
    postoilsright : 0,
  })
  const [hobbsresult, setHobbsResult] = useState(0);
  const [tachresult, setTachResult] = useState(0);
  const [heateresult, setHeateResult] = useState(0);
  const [fuelleftresult, setFuelLeftResult] = useState(0);
  const [fuelrightresult, setFuelRightResult] = useState(0);
  const [oilsleftresult, setOilsLeftResult] = useState(0);
  const [oilsrightresult, setOilsRightResult] = useState(0);

  const [fuelexpenss, setFuelExpenss] = useState("");
  const [oilsexpenss, setOilsExpenss] = useState("");
  const [serviceexpenss, setServiceExpenss] = useState("");
  const [fboexpenss, setFboExpenss] = useState("");
  const dispatch = useDispatch();


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

  const handleSelectAirplane = (selectedAirplane) => {
    setselectAirplane(selectedAirplane);
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

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  function handleAcceptedFiles_oils(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles_oils(files);
  }

  function handleAcceptedFiles_service(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles_service(files);
  }

  function handleAcceptedFiles_fbo(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles_fbo(files);
  }


  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  const productState = [
    {
      options: [
        { label: "Select State...", value: "Select State" },
        { label: "N314HB", value: "N314HB" },
        { label: "N365JT", value: "N365JT" },
        { label: "N157OC", value: "N157OC" },

      ],
    },
  ];
  const productCountry = [
    {
      options: [
        { label: "Select Airplane...", value: "Select Country" },
        { label: "Cessna 210", value: "Cessna 210" },
        { label: "Cessna 310", value: "Cessna 310" },
        { label: "Navajo PA31", value: "Navajo PA31" },
      ],
    },
  ];

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


const sendReportData = () => {
  const sendreportdate = {selectedAirplane, selectedMark, selectedDates, formpredata, formpostdata, fuelexpenss, oilsexpenss, serviceexpenss, fboexpenss };
  dispatch(sendReport(sendreportdate));
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
                            Select the Aircarft
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink href="#"
                            className={classnames({ active: activeTab === 2, done: activeTab <= 4 && activeTab > 1 }, "p-3")}
                            onClick={() => { toggleTab(2); }}
                          >
                            <i className=" ri-pencil-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Airplane Mode
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink href="#"
                            className={classnames({ active: activeTab === 3, done: activeTab <= 4 && activeTab > 2 }, "p-3")}
                            onClick={() => { toggleTab(3); }}
                          >
                            <i className="ri-calendar-check-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Airplane Mode Reports
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink href="#"
                            className={classnames({ active: activeTab === 4, done: activeTab <= 4 && activeTab > 3 }, "p-3")}
                            onClick={() => { toggleTab(4); }}
                          >
                            <i className="ri-checkbox-circle-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Finish
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>

                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={1} id="pills-bill-info">
                        <div>
                          <p className="text-muted mb-4">
                            Please choose Airplane
                          </p>
                        </div>

                        <div>

                          <Row>
                            <Col md={4}>
                              <div className="mb-3">
                                <Label htmlFor="country" className="form-label">
                                  Choose Airplane
                                </Label>
                                <Select
                                  value={selectedAirplane}
                                  onChange={
                                    handleSelectAirplane
                                  }
                                  options={productCountry}
                                  id="country"
                                ></Select>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className="mb-3">
                                <Label htmlFor="state" className="form-label">
                                  Mark
                                </Label>
                                <Select
                                  id="state"
                                  value={selectedMark}
                                  onChange={
                                    handleselectMark
                                  }
                                  options={productState}
                                ></Select>
                              </div>
                            </Col>

                            <Col sm={4} xxl={3}>
                              <Label htmlFor="state" className="form-label">
                                Date
                              </Label>
                              <Flatpickr
                                className="form-control bg-light border-light"
                                id="datepicker-publish-input"
                                value={selectedDates}
                                onChange={
                                  handleSelectDates
                                }
                                options={{
                                  altInput: true,
                                  altFormat: "F j, Y",
                                  mode: "multiple",
                                  dateFormat: "d.m.y",
                                }}
                              />
                            </Col>
                          </Row>

                          <div className="d-flex align-items-start gap-3 mt-3">
                            <button
                              type="button"
                              className="btn btn-primary btn-label right ms-auto nexttab"
                              onClick={() => {
                                
                                toggleTab(activeTab + 1);
                              }}
                            >
                              Go to create the Report
                            </button>
                          </div>
                        </div>
                      </TabPane>

                      <TabPane tabId={2} id="pills-bill-info">
                        <div>
                          <h5 className="mb-1">Airplane Mode</h5>
                          <p className="text-muted mb-4">
                            Please Airplane Mode
                          </p>
                        </div>
                        <div>
                          <CardBody>

                            <Nav pills className="nav-success mb-3 sm-12">
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: pillsTab === "1", })} onClick={() => { pillsToggle("1"); }} >
                                  Airplane Mode
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: pillsTab === "2", })} onClick={() => { pillsToggle("2"); }} >
                                  Aircarft Expenses
                                </NavLink>
                              </NavItem>
                            </Nav>

                            <TabContent activeTab={pillsTab} className="text-muted">
                              <TabPane tabId="1" id="home-1">
                                <Card id="demo">
                                  <CardHeader className="border-bottom-dashed p-4">
                                    <div className="d-sm-flex">
                                      <div className="flex-grow-1">
                                        <h1 height="17">Airplane Mode Select</h1>

                                      </div>
                                    </div>
                                  </CardHeader>
                                  <CardBody className="p-4">

                                  </CardBody>

                                  <Row className="gy-3">
                                    <Col lg={4} sm={6}>
                                      <div className="form-check card-radio">

                                        <p className="text-muted">Pre Flight.</p>
                                        <Input
                                          id="shippingAddress01"
                                          name="shippingAddress"
                                          type="radio"
                                          className="form-check-input"
                                          defaultChecked
                                        />
                                        <Label
                                          className="form-check-label"
                                          htmlFor="shippingAddress02"
                                        >

                                          <span className="fs-14 mb-2 d-block">
                                            Times
                                          </span>
                                          <p className="text-muted">{formpredata.hobbs}</p>
                                          <p className="text-muted">{formpredata.tach}</p>
                                          <p className="text-muted">{formpredata.heates}</p>
                                          <span className="text-muted fw-normal text-wrap mb-1 d-block">
                                            Fuel
                                          </span>
                                          <p className="text-muted">{formpredata.fuelleft}</p>
                                          <p className="text-muted">{formpredata.fuelright}</p>
                                          <span className="text-muted fw-normal d-block">
                                            Oils
                                          </span>
                                          <p className="text-muted">{formpredata.oilsleft}</p>
                                          <p className="text-muted">{formpredata.oilsright}</p>
                                        </Label>
                                      </div>
                                      <div className="d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-n1">
                                        <div>
                                          <Link
                                            to="#"
                                            className="d-block text-body p-1 px-2"
                                            onClick={togglemodal}
                                          >
                                            <i className="ri-pencil-fill text-muted align-bottom me-1"></i>
                                            Edit
                                          </Link>
                                        </div>
                                      </div>
                                    </Col>
                                    <Col lg={4} sm={6}>
                                      <div className="form-check card-radio">

                                        <p className="text-muted">Post Flight.</p>
                                        <Input
                                          id="shippingAddress02"
                                          name="shippingAddress"
                                          type="radio"
                                          className="form-check-input"
                                        />
                                        <Label
                                          className="form-check-label"
                                          htmlFor="shippingAddress02"
                                        >
                                        

                                          <span className="fs-14 mb-2 d-block">
                                            Times
                                          </span>
                                          <p className="text-muted">{formpostdata.posthobbstime}</p>
                                          <p className="text-muted">{formpostdata.posttachtime}</p>
                                          <p className="text-muted">{formpostdata.postheatetime}</p>
                                          <span className="text-muted fw-normal text-wrap mb-1 d-block">
                                            Fuel
                                          </span>
                                          <p className="text-muted">{formpostdata.postfuelleft}</p>
                                          <p className="text-muted">{formpostdata.postfuelright}</p>
                                          <span className="text-muted fw-normal d-block">
                                            Oils
                                          </span>
                                          <p className="text-muted">{formpostdata.postoilsleft}</p>
                                          <p className="text-muted">{formpostdata.postoilsright}</p>
                                        </Label>
                                      </div>
                                      <div className="d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-n1">
                                        <div>
                                          <Link
                                            to="#"
                                            className="d-block text-body p-1 px-2"
                                            onClick={togglemodal_fo}
                                          >
                                            <i className="ri-pencil-fill text-muted align-bottom me-1"></i>
                                            Edit
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-start gap-3 mt-3">
                                        <button
                                          type="button"
                                          className="btn btn-primary btn-label right ms-auto nexttab"
                                          onClick={() => {
                                            
                                            toggleTab(pillsTab + 1);
                                            sendReportData();
                                            calculator();
                                            // expenseCal();
                                          }}
                                        >
                                          Submit
                                        </button>
                                      </div>
                                    </Col>
                                  </Row>
                                </Card>
                              </TabPane>

                              <TabPane tabId="2" id="profile-1">
                                
                              
                                <p className="text-muted">Expenses</p>

                                <TabPane tabId="1" id="Hobbs">
                                  <CardBody className="p-4">
                                    <div className="table-responsive">
                                      <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                        <thead>
                                          <tr className="table-active">
                                            <th scope="col" style={{ width: "50px" }}>
                                              #
                                            </th>
                                            <th scope="col">
                                              Items</th>
                                            <th scope="col">Price ($)</th>
                                            <th scope="col">Receipt</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <th scope="row">01</th>
                                            <td className="text-start">
                                              <span className="fw-medium">

                                                Fuel
                                              </span>
                                              {/* <p className="text-muted mb-0">
                                                Graphic Print Men & Women Sweatshirt
                                              </p> */}
                                            </td>
                                            <td>
                                              <Input
                                                type="number"
                                                className="form-control"
                                                id="addaddress-textarea"
                                                name="fuelexpense"
                                                onChange={e => setFuelExpenss(e.target.value)}
                                              />
                                            </td>
                                            <td>

                                              <Dropzone
                                                onDrop={acceptedFiles => {
                                                  handleAcceptedFiles(acceptedFiles);
                                                }}
                                              >
                                                {({ getRootProps, getInputProps }) => (
                                                  <div className="dropzone dz-clickable">
                                                    <div
                                                      className="dz-message needsclick"
                                                      {...getRootProps()}
                                                    >
                                                      <i className="align-bottom me-1 ri-upload-2-line" />
                                                    </div>
                                                  </div>
                                                )}
                                              </Dropzone>
                                              <div className="list-unstyled mb-0" id="file-previews">
                                                {selectedFiles.map((f, i) => {
                                                  return (
                                                    <Card
                                                      className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                      key={i + "-file"}
                                                    >
                                                      <div className="p-2">
                                                        <Row className="align-items-center">
                                                          <Col className="col-auto">
                                                            <img
                                                              data-dz-thumbnail=""
                                                              height="80"
                                                              className="avatar-sm rounded bg-light"
                                                              alt={f.name}
                                                              src={f.preview}
                                                            />
                                                          </Col>
                                                          <Col>
                                                            <Link
                                                              to="#"
                                                              className="text-muted font-weight-bold"
                                                            >
                                                              {f.name}
                                                            </Link>
                                                            <p className="mb-0">
                                                              <strong>{f.formattedSize}</strong>
                                                            </p>
                                                          </Col>
                                                        </Row>
                                                      </div>
                                                    </Card>
                                                  );
                                                })}
                                              </div>
                                            </td>
                                            {/* <td className="text-end">2.4</td> */}
                                          </tr>
                                          <tr>
                                            <th scope="row">02</th>
                                            <td className="text-start">
                                              <span className="fw-medium">

                                                Oils
                                              </span>
                                              {/* <p className="text-muted mb-0">
                                                Graphic Print Men & Women Sweatshirt
                                              </p> */}
                                            </td>
                                            <td>
                                              <Input
                                                type="number"
                                                className="form-control"
                                                id="addaddress-textarea"
                                                name="oilsexpense"
                                                onChange={e => setOilsExpenss(e.target.value)}
                                              />
                                            </td>
                                            <td>

                                              <Dropzone
                                                onDrop={acceptedFiles => {
                                                  handleAcceptedFiles_oils(acceptedFiles);
                                                }}
                                              >
                                                {({ getRootProps, getInputProps }) => (
                                                  <div className="dropzone dz-clickable">
                                                    <div
                                                      className="dz-message needsclick"
                                                      {...getRootProps()}
                                                    >
                                                      <i className="align-bottom me-1 ri-upload-2-line" />
                                                    </div>
                                                  </div>
                                                )}
                                              </Dropzone>
                                              <div className="list-unstyled mb-0" id="file-previews">
                                                {selectedFiles_oils.map((f, i) => {
                                                  return (
                                                    <Card
                                                      className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                      key={i + "-file"}
                                                    >
                                                      <div className="p-2">
                                                        <Row className="align-items-center">
                                                          <Col className="col-auto">
                                                            <img
                                                              data-dz-thumbnail=""
                                                              height="80"
                                                              className="avatar-sm rounded bg-light"
                                                              alt={f.name}
                                                              src={f.preview}
                                                            />
                                                          </Col>
                                                          <Col>
                                                            <Link
                                                              to="#"
                                                              className="text-muted font-weight-bold"
                                                            >
                                                              {f.name}
                                                            </Link>
                                                            <p className="mb-0">
                                                              <strong>{f.formattedSize}</strong>
                                                            </p>
                                                          </Col>
                                                        </Row>
                                                      </div>
                                                    </Card>
                                                  );
                                                })}
                                              </div>
                                            </td>
                                            {/* <td className="text-end">2.4</td> */}
                                          </tr>
                                          <tr>
                                            <th scope="row">03</th>
                                            <td className="text-start">
                                              <span className="fw-medium">

                                                Service
                                              </span>
                                              {/* <p className="text-muted mb-0">
                                                Graphic Print Men & Women Sweatshirt
                                              </p> */}
                                            </td>
                                            <td>
                                              <Input
                                                type="number"
                                                className="form-control"
                                                id="addaddress-textarea"
                                                name="serviceexpenss"
                                                onChange={e => setServiceExpenss(e.target.value)}
                                              />
                                            </td>
                                            <td>

                                              <Dropzone
                                                onDrop={acceptedFiles => {
                                                  handleAcceptedFiles_service(acceptedFiles);
                                                }}
                                              >
                                                {({ getRootProps, getInputProps }) => (
                                                  <div className="dropzone dz-clickable">
                                                    <div
                                                      className="dz-message needsclick"
                                                      {...getRootProps()}
                                                    >
                                                      <i className="align-bottom me-1 ri-upload-2-line" />
                                                    </div>
                                                  </div>
                                                )}
                                              </Dropzone>
                                              <div className="list-unstyled mb-0" id="file-previews">
                                                {selectedfiles_service.map((f, i) => {
                                                  return (
                                                    <Card
                                                      className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                      key={i + "-file"}
                                                    >
                                                      <div className="p-2">
                                                        <Row className="align-items-center">
                                                          <Col className="col-auto">
                                                            <img
                                                              data-dz-thumbnail=""
                                                              height="80"
                                                              className="avatar-sm rounded bg-light"
                                                              alt={f.name}
                                                              src={f.preview}
                                                            />
                                                          </Col>
                                                          <Col>
                                                            <Link
                                                              to="#"
                                                              className="text-muted font-weight-bold"
                                                            >
                                                              {f.name}
                                                            </Link>
                                                            <p className="mb-0">
                                                              <strong>{f.formattedSize}</strong>
                                                            </p>
                                                          </Col>
                                                        </Row>
                                                      </div>
                                                    </Card>
                                                  );
                                                })}
                                              </div>
                                            </td>

                                            {/* <td className="text-end">2.4</td> */}
                                          </tr>
                                          <tr>
                                            <th scope="row">04</th>
                                            <td className="text-start">
                                              <span className="fw-medium">

                                                FBO fees
                                              </span>

                                            </td>
                                            <td>
                                              <Input
                                                type="number"
                                                className="form-control"
                                                id="addaddress-textarea"
                                                name="fboexpense"
                                                onChange={e => setFboExpenss(e.target.value)}
                                              />
                                            </td>
                                            <td>

                                              <Dropzone
                                                onDrop={acceptedFiles => {
                                                  handleAcceptedFiles_fbo(acceptedFiles);
                                                }}
                                              >
                                                {({ getRootProps, getInputProps }) => (
                                                  <div className="dropzone dz-clickable">
                                                    <div
                                                      className="dz-message needsclick"
                                                      {...getRootProps()}
                                                    >
                                                      <i className="align-bottom me-1 ri-upload-2-line" />
                                                    </div>
                                                  </div>
                                                )}
                                              </Dropzone>
                                              <div className="list-unstyled mb-0" id="file-previews">
                                                {selectedfiles_fbo.map((f, i) => {
                                                  return (
                                                    <Card
                                                      className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                      key={i + "-file"}
                                                    >
                                                      <div className="p-2">
                                                        <Row className="align-items-center">
                                                          <Col className="col-auto">
                                                            <img
                                                              data-dz-thumbnail=""
                                                              height="80"
                                                              className="avatar-sm rounded bg-light"
                                                              alt={f.name}
                                                              src={f.preview}
                                                            />
                                                          </Col>
                                                          <Col>
                                                            <Link
                                                              to="#"
                                                              className="text-muted font-weight-bold"
                                                            >
                                                              {f.name}
                                                            </Link>
                                                            <p className="mb-0">
                                                              <strong>{f.formattedSize}</strong>
                                                            </p>
                                                          </Col>
                                                        </Row>
                                                      </div>
                                                    </Card>
                                                  );
                                                })}
                                              </div>
                                            </td>
                                            {/* <td className="text-end">2.4</td> */}
                                          </tr>
                                        </tbody>
                                      </Table>
                                    </div>
                                  </CardBody>
                                </TabPane>
                              </TabPane>
                            </TabContent>
                          </CardBody>
                        </div>
                      </TabPane>
                      <TabPane tabId={3} id="pills-bill-info">
                        <div>
                          <h5 className="mb-1">Report Information</h5>
                          <p className="text-muted mb-4">
                            Please fill all information below
                          </p>
                        </div>
                        <div>
                          <CardBody>

                            <Nav pills className="nav-success mb-3">
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: pillsTab === "1", })} onClick={() => { pillsToggle("1"); }} >
                                  Inspection
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: pillsTab === "2", })} onClick={() => { pillsToggle("2"); }} >
                                  Fuel and Oil
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: pillsTab === "3", })} onClick={() => { pillsToggle("3"); }} >
                                  Expenses
                                </NavLink>
                              </NavItem>
                            </Nav>

                            <TabContent activeTab={pillsTab} className="text-muted">
                              <TabPane tabId="1" id="home-1">
                                <Card id="demo">
                                  <CardHeader className="border-bottom-dashed p-4">                               
                                    <Col sm={4} xxl={3}>
                                      {/* <Label htmlFor="state" className="form-label">
                                        Choose Date
                                      </Label>
                                      <Flatpickr
                                        className="form-control bg-light border-light"
                                        id="datepicker-publish-input"
                                        placeholder="Select a date"
                                        options={{
                                          altInput: true,
                                          altFormat: "F j, Y",
                                          mode: "multiple",
                                          dateFormat: "d.m.y",
                                        }}
                                      /> */}
                                    </Col>
                                  </CardHeader>
                                  <Col xxl={12}>

                                    <CardBody>
                                      <p className="text-muted">Time Items.</p>
                                      <Col xxl={12}>
                                        <Row>
                                          <Col md={3}>
                                            <Nav pills className="flex-column" id="v-pills-tab">
                                              <NavItem>
                                                <NavLink
                                                  style={{ cursor: "pointer" }}
                                                  className={classnames({
                                                    "mb-2": true,
                                                    active: verticalTab === "1",
                                                  })}
                                                  onClick={() => {
                                                    toggleVertical("1");
                                                  }}
                                                  id="v-pills-home-tab"
                                                >
                                                  Hobbs
                                                </NavLink>
                                              </NavItem>
                                              <NavItem>
                                                <NavLink
                                                  style={{ cursor: "pointer" }}
                                                  className={classnames({
                                                    "mb-2": true,
                                                    active: verticalTab === "2",
                                                  })}
                                                  onClick={() => {
                                                    toggleVertical("2");
                                                  }}
                                                  id="v-pills-profile-tab"
                                                >
                                                  Tach
                                                </NavLink>
                                              </NavItem>
                                              <NavItem>
                                                <NavLink
                                                  style={{ cursor: "pointer" }}
                                                  className={classnames({
                                                    "mb-2": true,
                                                    active: verticalTab === "3",
                                                  })}
                                                  onClick={() => {
                                                    toggleVertical("3");
                                                  }}
                                                  id="v-pills-messages-tab"
                                                >
                                                  Heater
                                                </NavLink>
                                              </NavItem>
                                            </Nav>
                                          </Col>
                                          <Col md={9}>
                                            <TabContent
                                              activeTab={verticalTab}
                                              className="text-muted mt-4 mt-md-0"
                                              id="v-pills-tabContent"
                                            >
                                              <TabPane tabId="1" id="v-pills-home">
                                                <CardBody className="p-4">
                                                  <div className="table-responsive">
                                                    <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                                      <thead>
                                                        <tr className="table-active">
                                                          <th scope="col">Items</th>
                                                          <th scope="col">Hours/Months to Inspection</th>
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              50 Hours
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{hobbsresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              100 Hours
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{hobbsresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              500 Hours
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{hobbsresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              1200 Hours
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{hobbsresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              12 Months
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{hobbsresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              24 Months
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{hobbsresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              36 Months
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{hobbsresult}</td>
                                                        </tr>
                                                      </tbody>
                                                    </Table>
                                                  </div>
                                                  <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                                    <Link to="#" className="btn btn-primary">
                                                      <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                                      Download
                                                    </Link>
                                                  </div>
                                                </CardBody>
                                              </TabPane>
                                              <TabPane tabId="2" id="v-pills-profile">
                                                <CardBody className="p-4">
                                                  <div className="table-responsive">
                                                    <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                                      <thead>
                                                        <tr className="table-active">
                                                          <th scope="col">Items</th>
                                                          <th scope="col">Hours/Months to Inspection</th>
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              50 Hours
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{tachresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              100 Hours
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{tachresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              500 Hours
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{tachresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              1200 Hours
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{tachresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              12 Months
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{tachresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              24 Months
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{tachresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              36 Months
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{tachresult}</td>
                                                        </tr>
                                                      </tbody>
                                                    </Table>
                                                  </div>
                                                  <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                                    <Link to="#" className="btn btn-primary">
                                                      <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                                      Download
                                                    </Link>
                                                  </div>
                                                </CardBody>
                                              </TabPane>
                                              <TabPane tabId="3" id="v-pills-messages">
                                                <CardBody className="p-4">
                                                  <div className="table-responsive">
                                                    <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                                      <thead>
                                                        <tr className="table-active">
                                                          <th scope="col">Items</th>
                                                          <th scope="col">Hours/Months to Inspection</th>
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              50 Hours
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{heateresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              100 Hours
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{heateresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              500 Hours
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{heateresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              1200 Hours
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{heateresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              12 Months
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{heateresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              24 Months
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{heateresult}</td>
                                                        </tr>
                                                        <tr>
                                                          <td className="text-start">
                                                            <span className="fw-medium">
                                                              36 Months
                                                            </span>
                                                          </td>
                                                          <td className="text-center">{heateresult}</td>
                                                        </tr>
                                                      </tbody>
                                                    </Table>
                                                  </div>
                                                  <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                                    <Link to="#" className="btn btn-primary">
                                                      <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                                      Download
                                                    </Link>
                                                  </div>
                                                </CardBody>
                                              </TabPane>
                                            </TabContent>
                                          </Col>
                                        </Row>

                                      </Col>
                                    </CardBody>
                                  </Col>
                                </Card>
                              </TabPane>
                              <TabPane tabId="2" id="profile-1">
                                <CardHeader className="border-bottom-dashed p-4">
                                  <div className="d-sm-flex">
                                    <div className="flex-grow-1">
                                      <h1 height="17">Fuel and Oil Report</h1>
                                    </div>
                                  </div>
                                </CardHeader>
                                <p className="text-muted">Fuel and Oil Information</p>

                                <TabPane tabId="1" id="Hobbs">
                                  <Col sm={4} xxl={3}>
                                    {/* <Label htmlFor="state" className="form-label">
                                      Choose Date
                                    </Label>
                                    <Flatpickr
                                      className="form-control bg-light border-light"
                                      id="datepicker-publish-input"
                                      placeholder="Select a date"
                                      options={{
                                        altInput: true,
                                        altFormat: "F j, Y",
                                        mode: "multiple",
                                        dateFormat: "d.m.y",
                                      }}
                                    /> */}
                                  </Col>
                                  <CardBody className="p-4">
                                    <div className="table-responsive">

                                      <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                        <thead>
                                          <tr className="table-active">
                                            <th scope="col" style={{ width: "50px" }}>
                                              #
                                            </th>
                                            <th scope="col">Hobbs Details</th>
                                            <th scope="col">Before</th>
                                            <th scope="col">After</th>
                                            <th scope="col" className="text-end">
                                              Amount
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <th scope="row">01</th>
                                            <td className="text-start">
                                              <span className="fw-medium">
                                                Hobbs time
                                              </span>
                                            </td>
                                            <td>{formpredata.hobbs}</td>
                                            <td>{formpostdata.posthobbstime}</td>
                                            <td className="text-end">{hobbsresult}</td>
                                          </tr>

                                          <tr className="border-top border-top-dashed mt-2">
                                            <td colSpan="3"></td>
                                            <td colSpan="2" className="fw-medium p-0">
                                              <Table className="table-borderless text-start table-nowrap align-middle mb-0">
                                                <tbody>
                                                  <tr>
                                                    <td>Hobbs time</td>
                                                    <td className="text-end" >{hobbsresult}</td>
                                                  </tr>
                                                </tbody>
                                              </Table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </Table>
                                    </div>
                                  </CardBody>
                                </TabPane>
                                <TabPane tabId="2" id="Fuel">
                                  <CardBody className="p-4">
                                    <div className="table-responsive">
                                      <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                        <thead>
                                          <tr className="table-active">
                                            <th scope="col" style={{ width: "50px" }}>
                                              #
                                            </th>
                                            <th scope="col">Fuel Details</th>
                                            <th scope="col">Before</th>
                                            <th scope="col">After</th>
                                            <th scope="col" className="text-end">
                                              Amount
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <th scope="row">01</th>
                                            <td className="text-start">
                                              <span className="fw-medium">
                                                Left Fuel
                                              </span>
                                            </td>
                                            <td>{formpredata.fuelleft}</td>
                                            <td>{formpostdata.postfuelleft}</td>
                                            <td className="text-end" >{fuelleftresult}</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">02</th>
                                            <td className="text-start">
                                              <span className="fw-medium">
                                                Right Fuel
                                              </span>
                                            </td>
                                            <td>{formpredata.fuelright}</td>
                                            <td>{formpostdata.postfuelright}</td>
                                            <td className="text-end">{fuelrightresult}</td>
                                          </tr>
                                        </tbody>
                                      </Table>
                                    </div>
                                  </CardBody>
                                </TabPane>

                                <TabPane tabId="3" id="Oils">
                                  <CardBody className="p-4">
                                    <div className="table-responsive">
                                      <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                        <thead>
                                          <tr className="table-active">
                                            <th scope="col" style={{ width: "50px" }}>
                                              #
                                            </th>
                                            <th scope="col">Oils Details</th>
                                            <th scope="col">Before</th>
                                            <th scope="col">After</th>
                                            <th scope="col" className="text-end">
                                              Amount
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <th scope="row">01</th>
                                            <td className="text-start">
                                              <span className="fw-medium">
                                                Left
                                              </span>
                                            </td>
                                            <td>{formpredata.oilsleft}</td>
                                            <td>{formpostdata.postoilsleft}</td>
                                            <td className="text-end">{oilsleftresult}</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">02</th>
                                            <td className="text-start">
                                              <span className="fw-medium">
                                                Right
                                              </span>
                                            </td>
                                            <td>{formpredata.oilsright}</td>
                                            <td>{formpredata.postoilsright}</td>
                                            <td className="text-end">{oilsrightresult}</td>
                                          </tr>
                                        </tbody>
                                      </Table>
                                    </div>
                                  </CardBody>
                                </TabPane>



                                <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                  <Link to="#" className="btn btn-primary">
                                    <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                    Download
                                  </Link>
                                </div>
                              </TabPane>

                              <TabPane tabId="3" id="messages-1" >
                                <Card id="demo">
                                  <CardHeader className="border-bottom-dashed p-4">
                                    <div className="d-sm-flex">
                                      <div className="flex-grow-1">
                                        <h1 height="17">Expenses Report</h1>
                                      </div>
                                    </div>
                                  </CardHeader>
                                  <Col sm={4} xxl={3}>
                                    {/* <Label htmlFor="state" className="form-label">
                                      Choose Date
                                    </Label>
                                    <Flatpickr
                                      className="form-control bg-light border-light"
                                      id="datepicker-publish-input"
                                      placeholder="Select a date"
                                      options={{
                                        altInput: true,
                                        altFormat: "F j, Y",
                                        mode: "multiple",
                                        dateFormat: "d.m.y",
                                      }}
                                    /> */}
                                  </Col>
                                  <CardBody className="p-4">

                                    <div className="table-responsive">
                                      <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                        <thead>
                                          <tr className="table-active">
                                            <th scope="col">Items</th>
                                            <th scope="col"></th>
                                            <th scope="col">Receipt folder</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td className="text-start">
                                              <span className="fw-medium">
                                                Total Fuel
                                              </span>
                                            </td>
                                            <td>{fuelexpenss}</td>
                                            <td></td>
                                          </tr>
                                          <tr>
                                            <td className="text-start">
                                              <span className="fw-medium">
                                                Total Oils
                                              </span>
                                            </td>
                                            <td>{oilsexpenss}</td>
                                            <td></td>
                                          </tr>
                                          <tr>
                                            <td className="text-start">
                                              <span className="fw-medium">
                                                Total Service
                                              </span>
                                            </td>
                                            <td>{serviceexpenss}</td>
                                            <td></td>
                                          </tr>
                                          <tr>
                                            <td className="text-start">
                                              <span className="fw-medium">
                                                Total FBO fees
                                              </span>
                                            </td>
                                            <td >{fboexpenss}</td>
                                            <td></td>
                                          </tr>
                                        </tbody>
                                      </Table>
                                    </div>
                                    <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                      <Link to="#" className="btn btn-primary">
                                        <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                        Download
                                      </Link>
                                    </div>
                                  </CardBody>
                                </Card>
                              </TabPane>
                            </TabContent>
                          </CardBody>
                        </div>

                      </TabPane>

                      <TabPane tabId={4} id="pills-finish">
                        <div className="text-center py-5">
                          <div className="mb-4">
                            <lord-icon
                              src="https://cdn.lordicon.com/lupuorrc.json"
                              trigger="loop"
                              colors="primary:#0ab39c,secondary:#405189"
                              style={{ width: "120px", height: "120px" }}
                            ></lord-icon>
                          </div>
                          <h5>Thank you ! Your Report is Completed !</h5>

                          <h3 className="fw-semibold">
                            Report ID:{" "}
                            <a
                              href="apps-ecommerce-order-details"
                              className="text-decoration-underline"
                            >
                              VZ2451
                            </a>
                          </h3>
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
                value={formpredata.hobbs }
                onChange={handlePreDataChange}
              />
              <Input
                type="number"
                className="form-control"
                name="tach"
                value={formpredata.tach }
                onChange={handlePreDataChange}
              />
              <Input
                type="number"
                className="form-control"
                name="heates"
                value={formpredata.heates }
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
                value={formpredata.fuelleft }
                onChange={handlePreDataChange}
              />
              <Input
                type="number"
                className="form-control"
                name="fuelright"
                value={formpredata.fuelright }
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
                value={formpredata.oilsleft }
                onChange={handlePreDataChange}
              />
              <Input
                type="number"
                className="form-control"
                name="oilsright"
                value={formpredata.oilsright }
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

      <Modal
        isOpen={modal_fo}
        role="dialog"
        autoFocus={true}
        centered
        id="addAddressModal"
        toggle={togglemodal_fo}
      >
        <ModalHeader
          toggle={() => {
            setModal_fo(!modal_fo);
          }}
        >
          Post Flight
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
                id="addtachbefore-Time"
                name="posthobbstime"
                value={formpostdata.posthobbstime }
                onChange={handlePostDataChange}
              />
              <Input
                type="number"
                className="form-control"
                id="addtachafter-Name"
                name="posttachtime"
                value={formpostdata.posttachtime }
                onChange={handlePostDataChange}
              />
              <Input
                type="number"
                className="form-control"
                id="addtachafter-Name"
                name="postheatetime"
                value={formpostdata.postheatetime }
                onChange={handlePostDataChange}
              />
            </div>

            <div className="mb-3">
              <Label for="addaddress-textarea" className="form-label">
                Fuel
              </Label>
              <Input
                type="number"
                className="form-control"
                id="addaddress-textarea"
                name="postfuelleft"
                value={formpostdata.postfuelleft }
                onChange={handlePostDataChange}
              />
              <Input
                type="number"
                className="form-control"
                id="addaddress-textarea"
                name="postfuelright"
                value={formpostdata.postfuelright }
                onChange={handlePostDataChange}
              />
            </div>

            <div className="mb-3">
              <Label for="addaddress-Name" className="form-label">
                Oils
              </Label>
              <Input
                type="number"
                className="form-control"
                id="addaddress-Name"
                name="postoilsleft"
                value={formpostdata.postoilsleft }
                onChange={handlePostDataChange}
              />
              <Input
                type="number"
                className="form-control"
                id="addaddress-Name"
                name="postoilsright"
                value={formpostdata.postoilsright }
                onChange={handlePostDataChange}
              />
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              setModal_fo(!modal_fo);
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
