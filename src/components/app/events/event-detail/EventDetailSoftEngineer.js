import React from 'react';
import { Col, Row } from 'react-bootstrap';
import EventDetailAside from './EventDetailAside';
import EventDetailContentSoftwareEngineer from '../event-detail-software-engineer/EventDetailContentSoftwareEngineer';
import EventDetailHeader from './EventDetailHeader';

const EventDetailSoftwareEngineer = () => {
  return (
    <>

      <Row className="g-3">
        <Col lg={8}>
          <EventDetailContentSoftwareEngineer />
        </Col>

      </Row>
    </>
  );
};




export default EventDetailSoftwareEngineer;
