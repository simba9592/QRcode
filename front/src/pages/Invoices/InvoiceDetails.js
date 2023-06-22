import React, { useState } from "react";
import { CardBody, Row, Col, Card, Table, CardHeader, Container } from "reactstrap";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";

const InvoiceDetails = () => {

  const params = useParams();
  const [pillsTab, setpillsTab] = useState("1");
  const pillsToggle = (tab) => {
    if (pillsTab !== tab) {
      setpillsTab(tab);
    }
  };

  const [activeTab, setactiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };

  const [reportdata, setReportData] = useState()

  // const { receivedata } = useSelector(state => ({
  //   receivedata: state.receiveReportData.receivedata,
  // }));

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:8080/api/test/send_report_data/${params.id.toString()}`);
   

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        return;
      }

      const record = await response.json();
      if (!record) {
        // navigate("/");
        return;
      }

      setReportData(record);
    }

    fetchData();

    return;
  }, []);

  document.title = "Report Management";
  return (
    <div className="page-content">

      <Container fluid>
        <BreadCrumb title="Report Management" pageTitle="Report" />

        <Row className="justify-content-center">
          <Col xxl={9}>
            <h5 className="mb-3" >Report</h5>
            <Card>
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
                        {/* <div className="d-sm-flex">
                          <div className="flex-grow-1">
                            <h1 height="17">Inspection Report</h1>
                            <div className="mt-sm-5 mt-4">
                              <h6 className="text-muted text-uppercase fw-semibold">
                                Reporter : Alexis Clarke
                              </h6>
                              <p className="text-muted mb-1">
                                California, United States
                              </p>
                              <p className="text-muted mb-0">Zip-code: 90201</p>
                            </div>
                          </div>
                        </div> */}
                      </CardHeader>
                      <CardBody className="p-4">
                        <Row className="g-3">
                          <Col lg={3} xs={6}>
                            <p className="text-muted mb-2 text-uppercase fw-semibold">
                              Report No
                            </p>
                            <h5 className="fs-14 mb-0">#VL25000355</h5>
                          </Col>
                          <Col lg={3} xs={6}>
                            <p className="text-muted mb-2 text-uppercase fw-semibold">
                              Date
                            </p>
                            <h5 className="fs-14 mb-0">{reportdata && reportdata.selectedDates}
                            </h5>
                          </Col>

                        </Row>
                      </CardBody>
                      <Col xxl={12}>
                        <Card>
                          <CardBody>
                            <p className="text-muted">Time Items.</p>

                            <Nav tabs className="nav-tabs mb-3">
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "1", })} onClick={() => { toggle("1"); }} >
                                  50hours
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "2", })} onClick={() => { toggle("2"); }} >
                                  100hours
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "3", })} onClick={() => { toggle("3"); }} >
                                  200hours
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "4", })} onClick={() => { toggle("4"); }} >
                                  500hours
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "5", })} onClick={() => { toggle("5"); }} >
                                  1200hours
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "6", })} onClick={() => { toggle("6"); }} >
                                  12months
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "7", })} onClick={() => { toggle("7"); }} >
                                  24months
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "8", })} onClick={() => { toggle("8"); }} >
                                  36months
                                </NavLink>
                              </NavItem>
                            </Nav>

                            <TabContent activeTab={activeTab} className="text-muted">
                              <TabPane tabId="1" id="50hours">
                                <CardBody className="p-4">
                                  <div className="table-responsive">
                                    <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                      <thead>
                                        <tr className="table-active">
                                          <th scope="col" style={{ width: "50px" }}>
                                            #
                                          </th>
                                          <th scope="col">Inspection Details</th>
                                          <th scope="col">Original</th>
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
                                          <td>{reportdata && reportdata.formpredata.hobbs}</td>
                                          <td>{reportdata && reportdata.formpostdata.posthobbstime}</td>
                                          <td className="text-end" style={{ "backgroundColor": "red" }}>{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">02</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Tach Time
                                            </span>
                                          </td>
                                          <td>{reportdata && reportdata.formpredata.tach}</td>
                                          <td>{reportdata && reportdata.formpostdata.posttachtime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">03</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Heater time
                                            </span>
                                          </td>
                                          <td>{reportdata && reportdata.formpredata.heates}</td>
                                          <td>{reportdata && reportdata.formpostdata.postheatetime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                        </tr>
                                        <tr className="border-top border-top-dashed mt-2">
                                          <td colSpan="3"></td>
                                          <td colSpan="2" className="fw-medium p-0">
                                            <Table className="table-borderless text-start table-nowrap align-middle mb-0">
                                              <tbody>
                                                <tr>
                                                  <td>Hobbs time</td>
                                                  <td className="text-end" >{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                                </tr>
                                                <tr>
                                                  <td>Tach Time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    Heater time
                                                  </td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                                </tr>
                                              </tbody>
                                            </Table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                  <div className="mt-4">
                                    <div className="alert alert-info">
                                      <p className="mb-0">
                                        <span className="fw-semibold">NOTES:</span> All accounts
                                        are to be paid within 7 days from receipt of invoice. To
                                        be paid by cheque or credit card or direct payment online.
                                        If account is not paid within 7 days the credits details
                                        supplied as confirmation of work undertaken will be
                                        charged the agreed quoted fee noted above.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                    {/* <Link
                                      to="#"
                                      onClick={printInvoice}
                                      className="btn btn-success"
                                    >
                                      <i className="ri-printer-line align-bottom me-1"></i> Print
                                    </Link> */}
                                    <Link to="#" className="btn btn-primary">
                                      <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                      Download
                                    </Link>
                                  </div>
                                </CardBody>
                              </TabPane>

                              <TabPane tabId="2" id="100hours">
                                <CardBody className="p-4">
                                  <div className="table-responsive">
                                    <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                      <thead>
                                        <tr className="table-active">
                                          <th scope="col" style={{ width: "50px" }}>
                                            #
                                          </th>
                                          <th scope="col">Inspection Details</th>
                                          <th scope="col">Original</th>
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
                                              Hobbs Time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.hobbs}</td>
                                          <td>{reportdata && reportdata.formpostdata.posthobbstime}</td>
                                          <td className="text-end" style={{ "backgroundColor": "yellow" }}>{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">02</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Tach time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.tach}</td>
                                          <td>{reportdata && reportdata.formpostdata.posttachtime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">03</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Heater time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.heates}</td>
                                          <td>{reportdata && reportdata.formpostdata.postheatetime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                        </tr>
                                        <tr className="border-top border-top-dashed mt-2">
                                          <td colSpan="3"></td>
                                          <td colSpan="2" className="fw-medium p-0">
                                            <Table className="table-borderless text-start table-nowrap align-middle mb-0">
                                              <tbody>
                                                <tr>
                                                  <td>Hobbs Time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                                </tr>
                                                <tr>
                                                  <td>Tach time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    Heater time
                                                  </td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                                </tr>
                                              </tbody>
                                            </Table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                  <div className="mt-4">
                                    <div className="alert alert-info">
                                      <p className="mb-0">
                                        <span className="fw-semibold">NOTES:</span> All accounts
                                        are to be paid within 7 days from receipt of invoice. To
                                        be paid by cheque or credit card or direct payment online.
                                        If account is not paid within 7 days the credits details
                                        supplied as confirmation of work undertaken will be
                                        charged the agreed quoted fee noted above.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                    {/* <Link
                                      to="#"
                                      onClick={printInvoice}
                                      className="btn btn-success"
                                    >
                                      <i className="ri-printer-line align-bottom me-1"></i> Print
                                    </Link> */}
                                    <Link to="#" className="btn btn-primary">
                                      <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                      Download
                                    </Link>
                                  </div>
                                </CardBody>
                              </TabPane>

                              <TabPane tabId="3" id="200hours">
                                <CardBody className="p-4">
                                  <div className="table-responsive">
                                    <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                      <thead>
                                        <tr className="table-active">
                                          <th scope="col" style={{ width: "50px" }}>
                                            #
                                          </th>
                                          <th scope="col">Inspection Details</th>
                                          <th scope="col">Original</th>
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
                                              Hobbs Time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.hobbs}</td>
                                          <td>{reportdata && reportdata.formpostdata.posthobbstime}</td>
                                          <td className="text-end" style={{ "backgroundColor": "green" }}>{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">02</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Tach time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.tach}</td>
                                          <td>{reportdata && reportdata.formpostdata.posttachtime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">03</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Heater time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.heates}</td>
                                          <td>{reportdata && reportdata.formpostdata.postheatetime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                        </tr>
                                        <tr className="border-top border-top-dashed mt-2">
                                          <td colSpan="3"></td>
                                          <td colSpan="2" className="fw-medium p-0">
                                            <Table className="table-borderless text-start table-nowrap align-middle mb-0">
                                              <tbody>
                                                <tr>
                                                  <td>Hobbs Time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                                </tr>
                                                <tr>
                                                  <td>Tach time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    Heater time
                                                  </td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                                </tr>
                                              </tbody>
                                            </Table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                  <div className="mt-4">
                                    <div className="alert alert-info">
                                      <p className="mb-0">
                                        <span className="fw-semibold">NOTES:</span> All accounts
                                        are to be paid within 7 days from receipt of invoice. To
                                        be paid by cheque or credit card or direct payment online.
                                        If account is not paid within 7 days the credits details
                                        supplied as confirmation of work undertaken will be
                                        charged the agreed quoted fee noted above.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                    {/* <Link
                                      to="#"
                                      onClick={printInvoice}
                                      className="btn btn-success"
                                    >
                                      <i className="ri-printer-line align-bottom me-1"></i> Print
                                    </Link> */}
                                    <Link to="#" className="btn btn-primary">
                                      <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                      Download
                                    </Link>
                                  </div>
                                </CardBody>
                              </TabPane>

                              <TabPane tabId="4" id="500hours">
                                <CardBody className="p-4">
                                  <div className="table-responsive">
                                    <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                      <thead>
                                        <tr className="table-active">
                                          <th scope="col" style={{ width: "50px" }}>
                                            #
                                          </th>
                                          <th scope="col">Inspection Details</th>
                                          <th scope="col">Original</th>
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
                                              Hobbs Time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.hobbs}</td>
                                          <td>{reportdata && reportdata.formpostdata.posthobbstime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">02</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Tach time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.tach}</td>
                                          <td>{reportdata && reportdata.formpostdata.posttachtime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">03</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Heater time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.heates}</td>
                                          <td>{reportdata && reportdata.formpostdata.postheatetime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                        </tr>
                                        <tr className="border-top border-top-dashed mt-2">
                                          <td colSpan="3"></td>
                                          <td colSpan="2" className="fw-medium p-0">
                                            <Table className="table-borderless text-start table-nowrap align-middle mb-0">
                                              <tbody>
                                                <tr>
                                                  <td>Hobbs Time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                                </tr>
                                                <tr>
                                                  <td>Tach time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    Heater time
                                                  </td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                                </tr>
                                              </tbody>
                                            </Table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                  <div className="mt-4">
                                    <div className="alert alert-info">
                                      <p className="mb-0">
                                        <span className="fw-semibold">NOTES:</span> All accounts
                                        are to be paid within 7 days from receipt of invoice. To
                                        be paid by cheque or credit card or direct payment online.
                                        If account is not paid within 7 days the credits details
                                        supplied as confirmation of work undertaken will be
                                        charged the agreed quoted fee noted above.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                    {/* <Link
                                      to="#"
                                      onClick={printInvoice}
                                      className="btn btn-success"
                                    >
                                      <i className="ri-printer-line align-bottom me-1"></i> Print
                                    </Link> */}
                                    <Link to="#" className="btn btn-primary">
                                      <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                      Download
                                    </Link>
                                  </div>
                                </CardBody>
                              </TabPane>
                              <TabPane tabId="5" id="1200hours">
                                <CardBody className="p-4">
                                  <div className="table-responsive">
                                    <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                      <thead>
                                        <tr className="table-active">
                                          <th scope="col" style={{ width: "50px" }}>
                                            #
                                          </th>
                                          <th scope="col">Inspection Details</th>
                                          <th scope="col">Original</th>
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
                                              Hobbs Time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.hobbs}</td>
                                          <td>{reportdata && reportdata.formpostdata.posthobbstime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">02</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Tach time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.tach}</td>
                                          <td>{reportdata && reportdata.formpostdata.posttachtime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">03</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Heater time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.heates}</td>
                                          <td>{reportdata && reportdata.formpostdata.postheatetime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                        </tr>
                                        <tr className="border-top border-top-dashed mt-2">
                                          <td colSpan="3"></td>
                                          <td colSpan="2" className="fw-medium p-0">
                                            <Table className="table-borderless text-start table-nowrap align-middle mb-0">
                                              <tbody>
                                                <tr>
                                                  <td>Hobbs Time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                                </tr>
                                                <tr>
                                                  <td>Tach time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    Heater time
                                                  </td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                                </tr>
                                              </tbody>
                                            </Table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                  <div className="mt-4">
                                    <div className="alert alert-info">
                                      <p className="mb-0">
                                        <span className="fw-semibold">NOTES:</span> All accounts
                                        are to be paid within 7 days from receipt of invoice. To
                                        be paid by cheque or credit card or direct payment online.
                                        If account is not paid within 7 days the credits details
                                        supplied as confirmation of work undertaken will be
                                        charged the agreed quoted fee noted above.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                    {/* <Link
                                      to="#"
                                      onClick={printInvoice}
                                      className="btn btn-success"
                                    >
                                      <i className="ri-printer-line align-bottom me-1"></i> Print
                                    </Link> */}
                                    <Link to="#" className="btn btn-primary">
                                      <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                      Download
                                    </Link>
                                  </div>
                                </CardBody>
                              </TabPane>
                              <TabPane tabId="6" id="12months">
                                <CardBody className="p-4">
                                  <div className="table-responsive">
                                    <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                      <thead>
                                        <tr className="table-active">
                                          <th scope="col" style={{ width: "50px" }}>
                                            #
                                          </th>
                                          <th scope="col">Inspection Details</th>
                                          <th scope="col">Original</th>
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
                                              Hobbs Time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.hobbs}</td>
                                          <td>{reportdata && reportdata.formpostdata.posthobbstime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">02</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Tach time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.tach}</td>
                                          <td>{reportdata && reportdata.formpostdata.posttachtime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">03</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Heater time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.heates}</td>
                                          <td>{reportdata && reportdata.formpostdata.postheatetime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                        </tr>
                                        <tr className="border-top border-top-dashed mt-2">
                                          <td colSpan="3"></td>
                                          <td colSpan="2" className="fw-medium p-0">
                                            <Table className="table-borderless text-start table-nowrap align-middle mb-0">
                                              <tbody>
                                                <tr>
                                                  <td>Hobbs Time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                                </tr>
                                                <tr>
                                                  <td>Tach time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    Heater time
                                                  </td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                                </tr>
                                              </tbody>
                                            </Table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                  <div className="mt-4">
                                    <div className="alert alert-info">
                                      <p className="mb-0">
                                        <span className="fw-semibold">NOTES:</span> All accounts
                                        are to be paid within 7 days from receipt of invoice. To
                                        be paid by cheque or credit card or direct payment online.
                                        If account is not paid within 7 days the credits details
                                        supplied as confirmation of work undertaken will be
                                        charged the agreed quoted fee noted above.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                    {/* <Link
                                      to="#"
                                      onClick={printInvoice}
                                      className="btn btn-success"
                                    >
                                      <i className="ri-printer-line align-bottom me-1"></i> Print
                                    </Link> */}
                                    <Link to="#" className="btn btn-primary">
                                      <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                      Download
                                    </Link>
                                  </div>
                                </CardBody>
                              </TabPane>
                              <TabPane tabId="7" id="24months">
                                <CardBody className="p-4">
                                  <div className="table-responsive">
                                    <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                      <thead>
                                        <tr className="table-active">
                                          <th scope="col" style={{ width: "50px" }}>
                                            #
                                          </th>
                                          <th scope="col">Inspection Details</th>
                                          <th scope="col">Original</th>
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
                                              Hobbs Time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.hobbs}</td>
                                          <td>{reportdata && reportdata.formpostdata.posthobbstime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">02</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Tach time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.tach}</td>
                                          <td>{reportdata && reportdata.formpostdata.posttachtime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">03</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Heater time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.heates}</td>
                                          <td>{reportdata && reportdata.formpostdata.postheatetime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                        </tr>
                                        <tr className="border-top border-top-dashed mt-2">
                                          <td colSpan="3"></td>
                                          <td colSpan="2" className="fw-medium p-0">
                                            <Table className="table-borderless text-start table-nowrap align-middle mb-0">
                                              <tbody>
                                                <tr>
                                                  <td>Hobbs Time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                                </tr>
                                                <tr>
                                                  <td>Tach time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    Heater time
                                                  </td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                                </tr>

                                              </tbody>
                                            </Table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>

                                  <div className="mt-4">
                                    <div className="alert alert-info">
                                      <p className="mb-0">
                                        <span className="fw-semibold">NOTES:</span> All accounts
                                        are to be paid within 7 days from receipt of invoice. To
                                        be paid by cheque or credit card or direct payment online.
                                        If account is not paid within 7 days the credits details
                                        supplied as confirmation of work undertaken will be
                                        charged the agreed quoted fee noted above.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                    {/* <Link
                                      to="#"
                                      onClick={printInvoice}
                                      className="btn btn-success"
                                    >
                                      <i className="ri-printer-line align-bottom me-1"></i> Print
                                    </Link> */}
                                    <Link to="#" className="btn btn-primary">
                                      <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                      Download
                                    </Link>
                                  </div>
                                </CardBody>
                              </TabPane>
                              <TabPane tabId="8" id="36months">
                                <CardBody className="p-4">
                                  <div className="table-responsive">
                                    <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                      <thead>
                                        <tr className="table-active">
                                          <th scope="col" style={{ width: "50px" }}>
                                            #
                                          </th>
                                          <th scope="col">Inspection Details</th>
                                          <th scope="col">Original</th>
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
                                              Hobbs Time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.hobbs}</td>
                                          <td>{reportdata && reportdata.formpostdata.posthobbstime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">02</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Tach time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.tach}</td>
                                          <td>{reportdata && reportdata.formpostdata.posttachtime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">03</th>
                                          <td className="text-start">
                                            <span className="fw-medium">
                                              Heater time
                                            </span>

                                          </td>
                                          <td>{reportdata && reportdata.formpredata.heates}</td>
                                          <td>{reportdata && reportdata.formpostdata.postheatetime}</td>
                                          <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                        </tr>
                                        <tr className="border-top border-top-dashed mt-2">
                                          <td colSpan="3"></td>
                                          <td colSpan="2" className="fw-medium p-0">
                                            <Table className="table-borderless text-start table-nowrap align-middle mb-0">
                                              <tbody>
                                                <tr>
                                                  <td>Hobbs Time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                                </tr>
                                                <tr>
                                                  <td>Tach time</td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.tach - reportdata.formpostdata.posttachtime}</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    Heater time
                                                  </td>
                                                  <td className="text-end">{reportdata && reportdata.formpredata.heates - reportdata.formpostdata.postheatetime}</td>
                                                </tr>

                                              </tbody>
                                            </Table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>

                                  <div className="mt-4">
                                    <div className="alert alert-info">
                                      <p className="mb-0">
                                        <span className="fw-semibold">NOTES:</span> All accounts
                                        are to be paid within 7 days from receipt of invoice. To
                                        be paid by cheque or credit card or direct payment online.
                                        If account is not paid within 7 days the credits details
                                        supplied as confirmation of work undertaken will be
                                        charged the agreed quoted fee noted above.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                    {/* <Link
                                      to="#"
                                      onClick={printInvoice}
                                      className="btn btn-success"
                                    >
                                      <i className="ri-printer-line align-bottom me-1"></i> Print
                                    </Link> */}
                                    <Link to="#" className="btn btn-primary">
                                      <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                      Download
                                    </Link>
                                  </div>
                                </CardBody>
                              </TabPane>
                            </TabContent>
                          </CardBody>
                        </Card>
                      </Col>

                    </Card>
                  </TabPane>

                  <TabPane tabId="2" id="profile-1">
                    <Card id="demo">
                      <CardHeader className="border-bottom-dashed p-4">
                        <div className="d-sm-flex">
                          <div className="flex-grow-1">
                            <h1 height="17">Fuel and Oil Report</h1>
                            <div className="mt-sm-5 mt-4">
                              <h6 className="text-muted text-uppercase fw-semibold">
                                Reporter : Alexis Clarke
                              </h6>
                              <p className="text-muted mb-1">
                                California, United States
                              </p>
                              <p className="text-muted mb-0">Zip-code: 90201</p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardBody className="p-4">
                        <Row className="g-3">
                          <Col lg={3} xs={6}>
                            <p className="text-muted mb-2 text-uppercase fw-semibold">
                              Report No
                            </p>
                            <h5 className="fs-14 mb-0">#VL25000355</h5>
                          </Col>
                          <Col lg={3} xs={6}>
                            <p className="text-muted mb-2 text-uppercase fw-semibold">
                              Date
                            </p>
                            <h5 className="fs-14 mb-0">
                            {reportdata && reportdata.selectedDates}
                            </h5>
                          </Col>
                        </Row>
                      </CardBody>

                      <CardBody>
                        <p className="text-muted">Fuel and Oil Information</p>

                        <Nav tabs className="nav-tabs mb-3">
                          <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "1", })} onClick={() => { toggle("1"); }} >
                              Hobbs
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "2", })} onClick={() => { toggle("2"); }} >
                              Fuel
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "3", })} onClick={() => { toggle("3"); }} >
                              Oils
                            </NavLink>
                          </NavItem>
                        </Nav>

                        <TabContent activeTab={activeTab} className="text-muted">
                          <TabPane tabId="1" id="Hobbs">
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
                                        <p className="text-muted mb-0">
                                          Graphic Print Men & Women Sweatshirt
                                        </p>
                                      </td>
                                      <td>{reportdata && reportdata.formpredata.hobbs}</td>
                                      <td>{reportdata && reportdata.formpostdata.posthobbstime}</td>
                                      <td className="text-end">{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                    </tr>

                                    <tr className="border-top border-top-dashed mt-2">
                                      <td colSpan="3"></td>
                                      <td colSpan="2" className="fw-medium p-0">
                                        <Table className="table-borderless text-start table-nowrap align-middle mb-0">
                                          <tbody>
                                            <tr>
                                              <td>Hobbs time</td>
                                              <td className="text-end" >{reportdata && reportdata.formpredata.hobbs - reportdata.formpostdata.posthobbstime}</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                              <div className="mt-4">
                                <div className="alert alert-info">
                                  <p className="mb-0">
                                    <span className="fw-semibold">NOTES:</span> All accounts
                                    are to be paid within 7 days from receipt of invoice. To
                                    be paid by cheque or credit card or direct payment online.
                                    If account is not paid within 7 days the credits details
                                    supplied as confirmation of work undertaken will be
                                    charged the agreed quoted fee noted above.
                                  </p>
                                </div>
                              </div>
                              <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                <Link to="#" className="btn btn-primary">
                                  <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                  Download
                                </Link>
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
                                      <td>{reportdata && reportdata.formpredata.fuelleft}</td>
                                      <td>{reportdata && reportdata.formpostdata.postfuelleft}</td>
                                      <td className="text-end" >{reportdata && reportdata.formpredata.fuelleft - reportdata.formpostdata.postfuelleft}</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">02</th>
                                      <td className="text-start">
                                        <span className="fw-medium">
                                          Right Fuel
                                        </span>
                                      </td>
                                      <td>{reportdata && reportdata.formpredata.fuelright}</td>
                                      <td>{reportdata && reportdata.formpostdata.postfuelright}</td>
                                      <td className="text-end" style={{ "backgroundColor": "red" }}>{reportdata && reportdata.formpredata.fuelright - reportdata.formpostdata.postfuelright}</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                              <div className="mt-4">
                                <div className="alert alert-info">
                                  <p className="mb-0">
                                    <span className="fw-semibold">NOTES:</span> All accounts
                                    are to be paid within 7 days from receipt of invoice. To
                                    be paid by cheque or credit card or direct payment online.
                                    If account is not paid within 7 days the credits details
                                    supplied as confirmation of work undertaken will be
                                    charged the agreed quoted fee noted above.
                                  </p>
                                </div>
                              </div>
                              <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                <Link to="#" className="btn btn-primary">
                                  <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                  Download
                                </Link>
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
                                        <p className="text-muted mb-0">
                                          Graphic Print Men & Women Sweatshirt
                                        </p>
                                      </td>
                                      <td>{reportdata && reportdata.formpredata.oilsleft}</td>
                                      <td>{reportdata && reportdata.formpostdata.postoilsleft}</td>
                                      <td className="text-end" style={{ "backgroundColor": "green" }}>{reportdata && reportdata.formpredata.oilsleft + reportdata.formpostdata.postoilsleft}</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">02</th>
                                      <td className="text-start">
                                        <span className="fw-medium">
                                          Right
                                        </span>
                                      </td>
                                      <td>{reportdata && reportdata.formpredata.oilsright}</td>
                                      <td>{reportdata && reportdata.formpostdata.postoilsright}</td>
                                      <td className="text-end" style={{ "backgroundColor": "green" }}>{reportdata && reportdata.formpredata.oilsright + reportdata.formpostdata.postoilsright}</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                              <div className="mt-4">
                                <div className="alert alert-info">
                                  <p className="mb-0">
                                    <span className="fw-semibold">NOTES:</span> All accounts
                                    are to be paid within 7 days from receipt of invoice. To
                                    be paid by cheque or credit card or direct payment online.
                                    If account is not paid within 7 days the credits details
                                    supplied as confirmation of work undertaken will be
                                    charged the agreed quoted fee noted above.
                                  </p>
                                </div>
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
                      </CardBody>
                    </Card>
                  </TabPane>

                  <TabPane tabId="3" id="messages-1" >
                    <Card id="demo">
                      <CardHeader className="border-bottom-dashed p-4">
                        <div className="d-sm-flex">
                          <div className="flex-grow-1">
                            <h1 height="17">Expenses Report</h1>
                            <div className="mt-sm-5 mt-4">
                              <h6 className="text-muted text-uppercase fw-semibold">
                                Reporter : Alexis Clarke
                              </h6>
                              <p className="text-muted mb-1">
                                California, United States
                              </p>
                              <p className="text-muted mb-0">Zip-code: 90201</p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardBody className="p-4">
                        <Row className="g-3">
                          <Col lg={3} xs={6}>
                            <p className="text-muted mb-2 text-uppercase fw-semibold">
                              Report No
                            </p>
                            <h5 className="fs-14 mb-0">#VL25000355</h5>
                          </Col>
                          <Col lg={3} xs={6}>
                            <p className="text-muted mb-2 text-uppercase fw-semibold">
                              Date
                            </p>
                            <h5 className="fs-14 mb-0">
                            {reportdata && reportdata.selectedDates}
                            </h5>
                          </Col>
                        </Row>
                      </CardBody>
                      <CardBody className="p-4">
                        <div className="table-responsive">
                          <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                            <thead>
                              <tr className="table-active">
                                <th scope="col" style={{ width: "50px" }}>
                                  #
                                </th>
                                <th scope="col">Expenses Details</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Total</th>
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
                                    Fuel
                                  </span>
                                  <p className="text-muted mb-0">
                                    Graphic Print Men & Women Sweatshirt
                                  </p>
                                </td>
                                <td>{reportdata && (reportdata.formpredata.fuelleft - reportdata.formpostdata.postfuelleft) + (reportdata.formpredata.fuelright - reportdata.formpostdata.postfuelright)}</td>
                                <td>{reportdata && reportdata.fuelexpenss}</td>
                                <td className="text-end">Attach file</td>
                              </tr>
                              <tr>
                                <th scope="row">02</th>
                                <td className="text-start">
                                  <span className="fw-medium">
                                    Oil
                                  </span>
                                </td>
                                <td>{reportdata && (reportdata.formpredata.oilsleft - reportdata.formpostdata.postoilsleft) + (reportdata.formpredata.oilsright - reportdata.formpostdata.postoilsright)}</td>
                                <td>{reportdata && reportdata.oilsexpenss}</td>
                                <td className="text-end">Attach file</td>
                              </tr>
                              <tr>
                                <th scope="row">03</th>
                                <td className="text-start">
                                  <span className="fw-medium">
                                    Service
                                  </span>
                                </td>
                                <td>-</td>
                                <td>{reportdata && reportdata.serviceexpenss}</td>
                                <td className="text-end">Attach file</td>
                              </tr>
                              <tr>
                                <th scope="row">04</th>
                                <td className="text-start">
                                  <span className="fw-medium">
                                    FBO fee
                                  </span>

                                </td>
                                <td> </td>
                                <td>{reportdata && reportdata.fboexpenss}</td>
                                <td className="text-end">Attach file</td>
                              </tr>
                              <tr className="border-top border-top-dashed mt-2">
                                <td colSpan="3"></td>
                                <td colSpan="2" className="fw-medium p-0">
                                  <Table className="table-borderless text-start table-nowrap align-middle mb-0">
                                    <tbody>
                                      <tr>
                                        <td>Fuel</td>
                                        <td className="text-end">{reportdata && reportdata.fuelexpenss}</td>
                                      </tr>
                                      <tr>
                                        <td>Oil</td>
                                        <td className="text-end">{reportdata && reportdata.oilsexpenss}</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Service
                                        </td>
                                        <td className="text-end">{reportdata && reportdata.serviceexpenss}</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          FBO fee
                                        </td>
                                        <td className="text-end">{reportdata && reportdata.fboexpenss}</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Total
                                        </td>
                                        <td className="text-end">{reportdata && parseInt(reportdata.fuelexpenss) + parseInt(reportdata.oilsexpenss) + parseInt(reportdata.serviceexpenss) + parseInt(reportdata.fboexpenss)}</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                        <div className="mt-4">
                          <div className="alert alert-info">
                            <p className="mb-0">
                              <span className="fw-semibold">NOTES:</span> All accounts
                              are to be paid within 7 days from receipt of invoice. To
                              be paid by cheque or credit card or direct payment online.
                              If account is not paid within 7 days the credits details
                              supplied as confirmation of work undertaken will be
                              charged the agreed quoted fee noted above.
                            </p>
                          </div>
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

                  <TabPane tabId="4" id="settings-1">
                    <div className="d-flex mt-2">
                      <div className="flex-shrink-0">
                        <i className="ri-checkbox-circle-fill text-success"></i>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.
                      </div>
                    </div>
                    <div className="d-flex mt-2">
                      <div className="flex-shrink-0">
                        <i className="ri-checkbox-circle-fill text-success"></i>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing.
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   reportdata: state.sendReportDetails.reportdata,
//   sendreporterror: state.sendReportDetails.sendreporterror,
// });


// export default compose(connect(mapStateToProps))(InvoiceDetails);
export default InvoiceDetails;
