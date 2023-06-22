import React, { useState } from 'react';
import { Col, Card, Label, Modal, ModalHeader, Button, CardBody, Container, Row, CardHeader, Table } from 'reactstrap';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
//import COmponents
import UpgradeAccountNotise from './UpgradeAccountNotise';
import UsersByDevice from './UsersByDevice';
import Widget from './Widget';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import AudiencesMetrics from './AudiencesMetrics';
import AudiencesSessions from './AudiencesSessions';
import LiveUsers from './LiveUsers';
import TopReferrals from './TopReferrals';
import TopPages from './TopPages';
import MyTasks from '../DashboardCrm/MyTasks';
import ClosingDeals from '../DashboardCrm/ClosingDeals';
import UpcomingActivities from '../DashboardCrm/UpcomingActivities';
import Section from '../DashboardEcommerce/Section';
import AllTasks from '../Tasks/TaskList/AllTasks';

const DashboardAnalytics = () => {
    document.title = "Owner Dashboard";

    const [modal_positionTopRight_Ow, setmodal_positionTopRight_Owner] = useState(false);
    function tog_positionTopRight_Owner() {
        setmodal_positionTopRight_Owner(!modal_positionTopRight_Ow);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>

                    <BreadCrumb title="Owner" pageTitle="Dashboards" />
                    <Section />
                    {/* <div className="col-auto">
                        <button type="button" className="btn btn-soft-success shadow-none" onClick={() => tog_positionTopRight_Owner()}><i className="ri-add-circle-line align-middle me-1"></i> Add</button>
                    </div> */}
                    <div className="flex-shrink-0">
                        <Link to="/pages-team" className="btn btn-success"><i
                            className="ri-edit-box-line align-bottom"></i> Edit Profile</Link>
                    </div>
                    <Row>
                        <Widget />
                        <ClosingDeals />
                        {/* <AllTasks /> */}
                        <MyTasks />
                        {/* <ClosingDeals /> */}

                    </Row>
                </Container>
            </div>
            <Modal id="top-rightmodal" isOpen={modal_positionTopRight_Ow} toggle={() => { tog_positionTopRight_Owner(); }} className="modal-dialog-right" >
                <ModalHeader>
                    Select Management
                    <Button type="button" className="btn-close" onClick={() => { setmodal_positionTopRight_Owner(false); }} aria-label="Close"> </Button>
                </ModalHeader>
                <div className="modal-body text-center p-5">

                    <div className="mt-4">
                        <h4 className="mb-3">Please Select the Management.</h4>
                        <p className="text-muted mb-4"> You can select the Airplane register, pilot register and report management .</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link to="/apps-aircraft-register" className="btn btn-success">Owner</Link>
                            <Link to="/apps-pilot-list-view" className="btn btn-success">Pilot</Link>
                            <Link to="/apps-report-management" className="btn btn-success">Report</Link>
                            <Link to="#" className="btn btn-link link-success fw-medium shadow-none" onClick={() => { tog_positionTopRight_Owner(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>

                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default DashboardAnalytics;