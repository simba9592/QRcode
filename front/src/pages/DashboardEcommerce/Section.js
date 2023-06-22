import React, { useState } from 'react';
import { Col, Row, Modal, ModalHeader, Button } from 'reactstrap';
import Flatpickr from "react-flatpickr";
import { Link } from 'react-router-dom';

const Section = () => {

    const sidebar = () => {
        const element = document.getElementById("layout-rightside-coll");
        element.classList.toggle("d-none");
    };

    const [modal_positionTopRight, setmodal_positionTopRight] = useState(false);
    function tog_positionTopRight() {
        setmodal_positionTopRight(!modal_positionTopRight);
    }

    return (
        <React.Fragment>
            <Row className="mb-3 pb-1">
                <Col xs={12}>
                    <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                        <div className="flex-grow-1">
                            <h4 className="fs-16 mb-1">Good Morning, Nachar!</h4>
                            <p className="text-muted mb-0">Choose One Option.</p>
                        </div>
                    </div>
                </Col>
            </Row>


        </React.Fragment>
    );
};

export default Section;