import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Comments from './Comments';
import Summary from './Summary';
import TimeTracking from "./TimeTracking";
import MetaTags from 'react-meta-tags';

const TaskDetails = () => {
    document.title = "Pilpt List";
    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <BreadCrumb title="Pilot" pageTitle="Pilot" />
                    <Row>
                        <Col xxl={12}>
                            <TimeTracking />
                        </Col>
                      
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TaskDetails;