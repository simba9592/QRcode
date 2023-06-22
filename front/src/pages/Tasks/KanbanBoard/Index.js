import React, { useState } from 'react';
import MetaTags from "react-meta-tags";
import SimpleBar from 'simplebar-react';
import { Button, Card, CardBody, Col, Container, Form, Input, Label, Modal, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { map } from "lodash";
import UncontrolledBoard from './UncontrolledBoard';
import { kanbanBoardData } from '../../../common/data';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Airplane from './Airplane';


const KanbanBoard = () => {
    document.title = "Airplane";
    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <BreadCrumb title="Airplane details" pageTitle="Airplane" />
                    <Row>
                        <Col xxl={12}>
                            {/* <TimeTracking /> */}
                            {/* <UncontrolledBoard/> */}
                            <Airplane />
                        </Col>
                      
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default KanbanBoard;