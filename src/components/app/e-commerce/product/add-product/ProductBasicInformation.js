import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const ProductBasicInformation = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <Card className="mb-3">
      <Card.Header as="h6" className="bg-body-tertiary">
        Basic information
      </Card.Header>
      <Card.Body>
        <Row className="gx-2 gy-3">
          <Col md="12">
            <Form.Group>
              <Form.Label>Job Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder='Enterprise Data Strategy Consultant'
                isInvalid={!!errors.productName}
                {...register('productName')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.productName?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group>
              <Form.Label>Job Location:</Form.Label>
              <Form.Control
                type="text"
                placeholder='Westood, MA'
                isInvalid={!!errors.manufacturarName}
                {...register('manufacturarName')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.manufacturarName?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group>
              <Form.Label>Job Identification No.:</Form.Label>
              <Form.Control
                type="text"
                placeholder='#053114152FG'
                isInvalid={!!errors.identificationNumber}
                {...register('identificationNumber')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.identificationNumber?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group>
              <Form.Label>Job Summary:</Form.Label>
              <Form.Control
                type="text"
                placeholder='Data Strategy control and operations consulting to ensure...'
                isInvalid={!!errors.productSummery}
                {...register('productSummery')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.productSummery?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};



const ProductBasicInformationOrig = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <Card className="mb-3">
      <Card.Header as="h6" className="bg-body-tertiary">
        Basic information
      </Card.Header>
      <Card.Body>
        <Row className="gx-2 gy-3">
          <Col md="12">
            <Form.Group>
              <Form.Label>Product name:</Form.Label>
              <Form.Control
                type="text"
                isInvalid={!!errors.productName}
                {...register('productName')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.productName?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group>
              <Form.Label>Manufacturar Name:</Form.Label>
              <Form.Control
                type="text"
                isInvalid={!!errors.manufacturarName}
                {...register('manufacturarName')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.manufacturarName?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group>
              <Form.Label>Product Identification No.:</Form.Label>
              <Form.Control
                type="text"
                isInvalid={!!errors.identificationNumber}
                {...register('identificationNumber')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.identificationNumber?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group>
              <Form.Label>Product Summary:</Form.Label>
              <Form.Control
                type="text"
                isInvalid={!!errors.productSummery}
                {...register('productSummery')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.productSummery?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};


export default ProductBasicInformation;
