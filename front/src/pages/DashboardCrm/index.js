import React, {useState, useEffect} from 'react';
import { Container, Row, Modal, ModalHeader, Button } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import MetaTags from 'react-meta-tags';
import BalanceOverview from './BalanceOverview';
import ClosingDeals from './ClosingDeals';
import DealsStatus from './DealsStatus';
import DealType from './DealType';
import MyTasks from './MyTasks';
import SalesForecast from './SalesForecast';
import UpcomingActivities from './UpcomingActivities';
import Widgets from './Widgets';
import Section from '../DashboardEcommerce/Section';
import { Link } from 'react-router-dom';
import UserList from './Userlist';
import { useSelector, useDispatch } from "react-redux";

const DashboardCrm = () => {

    const [modal_positionTopRight, setmodal_positionTopRight] = useState(false);
    function tog_positionTopRight() {
        setmodal_positionTopRight(!modal_positionTopRight);
    }

    const dispatch = useDispatch();
    // const data = {user: "receive report data"};
    useEffect(() => {
        // dispatch(getAllUser(data));
    }, []);

    const { user, userListError } = useSelector(state => ({
        user: state.getAllUserReducer.allUser,
        userListError: state.getAllUserReducer.userListError,
    }));


    document.title = "ADMIN-DASHBOARD";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Admin" pageTitle="Dashboards" />
                    <Section />
                    <div className="col-auto">
                        <button type="button" className="btn btn-soft-success shadow-none" onClick={() => tog_positionTopRight()}><i className="ri-add-circle-line align-middle me-1"></i> Add</button>
                    </div>
                    <Row>
                        <MyTasks />
                        <DealsStatus />
                    </Row>
                    <Row>
                        <ClosingDeals />
                        <UpcomingActivities />
                        <UserList />
                    </Row>
                  
                </Container>
            </div>

            <Modal id="top-rightmodal" isOpen={modal_positionTopRight} toggle={() => { tog_positionTopRight(); }} className="modal-dialog-right" >
                <ModalHeader>
                    Select Management
                    <Button type="button" className="btn-close" onClick={() => { setmodal_positionTopRight(false); }} aria-label="Close"> </Button>
                </ModalHeader>
                <div className="modal-body text-center p-5">
                 
                    <div className="mt-4">
                        <h4 className="mb-3">Please Select the Management.</h4>
                        <p className="text-muted mb-4"> You can select the Airplane register, pilot register and report management .</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link to="/apps-airplane-add" className="btn btn-success">Airplane</Link>
                            <Link to="/apps-ecommerce-user-list" className="btn btn-success">Users</Link>
                            <Link to="/apps-report-list" className="btn btn-success">Report</Link>
                            <Link to="#" className="btn btn-link link-success fw-medium shadow-none" onClick={() => { tog_positionTopRight(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default DashboardCrm;