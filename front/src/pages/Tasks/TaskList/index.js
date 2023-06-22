import React from 'react';
import { Container, Row, Card, CardBody, Table } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import AllTasks from './AllTasks';
import Widgets from './Widgets';
import MetaTags from 'react-meta-tags';


const TaskList = () => {
    document.title = "Pilot List";
    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <BreadCrumb title="Pilot List" pageTitle="Pilot" />
                    {/* <Row>
                        <Widgets />
                    </Row> */}
                 
                    <AllTasks />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TaskList;