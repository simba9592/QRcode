import React, { useState } from "react";
import { Col, Card, CardBody, Table, Container, Row, Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import MetaTags from 'react-meta-tags';
import Widget from "./Widgets";
import BestSellingProducts from "./BestSellingProducts";
import RecentActivity from "./RecentActivity";
import RecentOrders from "./RecentOrders";
import Revenue from "./Revenue";
import SalesByLocations from "./SalesByLocations";
import Section from "./Section";
import StoreVisits from "./StoreVisits";
import TopSellers from "./TopSellers";
import MyTasks from "../DashboardCrm/MyTasks";
import { Link } from 'react-router-dom';

const DashboardEcommerce = () => {
  document.title = "Pilot Dashboard";

  const [modal_positionTopRight_Pi, setmodal_positionTopRight_Pilot] = useState(false);
  function tog_positionTopRight_Pilot() {
    setmodal_positionTopRight_Pilot(!modal_positionTopRight_Pi);
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>

          <BreadCrumb title="Pilot" pageTitle="Dashboards" />
          <Row>
            <Col>
              <div className="h-100">
                <Section />
                <Row>
                  <Col lg={6} xxl={4}>
                    <Card className="card-body">
                      <div className="avatar-sm mb-3">
                        <div className="avatar-title bg-soft-success text-success fs-17 rounded">
                          <i className=" ri-profile-line"></i>
                        </div>
                      </div>
                      <h4 className="card-title">My Profile</h4>
                      <p className="card-text text-muted">When click the Apply Now button, You can edit your profile.</p>
                      <Link to="/pages-profile" className="btn btn-success">Apply Now</Link>
                    </Card>
                  </Col>
                  <Col lg={6} xxl={4}>
                    <div className="card card-body text-center">
                      <div className="avatar-sm mx-auto mb-3">
                        <div className="avatar-title bg-soft-success text-success fs-17 rounded">
                          <i className="ri-add-line"></i>
                        </div>
                      </div>
                      <h4 className="card-title">Company</h4>
                      <p className="card-text text-muted">When click the Add New button, you can add the company.</p>
                      <Link to="/apps-airplane-list" className="btn btn-success">Add New</Link>
                    </div>
                  </Col>
                  <Col lg={6} xxl={4}>
                    <div className="card card-body text-end">
                      <div className="avatar-sm ms-auto mb-3">
                        <div className="avatar-title bg-soft-success text-success fs-17 rounded">
                          <i className=" ri-file-edit-line"></i>
                        </div>
                      </div>
                      <h4 className="card-title">Airplane Mode</h4>
                      <p className="card-text text-muted">When click th Add New button, You can edit the report.</p>
                      <Link to="/apps-create-report" className="btn btn-success">Add New</Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal id="top-rightmodal" isOpen={modal_positionTopRight_Pi} toggle={() => { tog_positionTopRight_Pilot(); }} className="modal-dialog-right" >
        <ModalHeader>
          Select Management
          <Button type="button" className="btn-close" onClick={() => { setmodal_positionTopRight_Pilot(false); }} aria-label="Close"> </Button>
        </ModalHeader>
        <div className="modal-body text-center p-5">

          <div className="mt-4">
            <h4 className="mb-3">Please Select the Management.</h4>
            <p className="text-muted mb-4"> You can select the Airplane register, pilot register and report management .</p>
            <div className="hstack gap-2 justify-content-center">
              <Link to="/apps-ecommerce-products" className="btn btn-success">Aircarft</Link>
              <Link to="/apps-ecommerce-product-details" className="btn btn-success">Profiles</Link>
              <Link to="/apps-create-report" className="btn btn-success">Create Report</Link>
              <Link to="#" className="btn btn-link link-success fw-medium shadow-none" onClick={() => { tog_positionTopRight_Pilot(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>

            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default DashboardEcommerce;
