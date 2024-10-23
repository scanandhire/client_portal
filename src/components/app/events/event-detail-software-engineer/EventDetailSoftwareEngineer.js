import React from 'react';
import { Col, Row } from 'react-bootstrap';
import EventDetailAside from './EventDetailAside';
import EventDetailContentSoftwareEngineer from './EventDetailContentSoftwareEngineer';
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

const EventDetailOrig = () => {
  return (
    <>
      <EventDetailHeader />
      <Row className="g-3">
        <Col lg={8}>
          <EventDetailContentSoftwareEngineer />
        </Col>
        <Col lg={4}>
          <EventDetailAside />
        </Col>
      </Row>
    </>
  );
};


export default EventDetailSoftwareEngineer;
