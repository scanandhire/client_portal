import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const ProductType = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <Card className="mb-3">
      <Card.Header as="h6" className="bg-body-tertiary">
        Type
      </Card.Header>
      <Card.Body>
        <Row className="gx-2 gy-3">
          <Col md="12">
            <Form.Group>
              <Form.Label>Select category:</Form.Label>
              <Form.Select
                {...register(`productCategory`)}
                isInvalid={!!errors.productCategory}
              >
                <option value="">Select</option>
                <option value="electronics">Executive</option>
                <option value="homeKitchen">Sales</option>
                <option value="fashionApparel">Engineering</option>
                <option value="stationery">Accounting</option>
                <option value="healthFitness">Legal</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.productCategory?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group>
              <Form.Label>Select sub-category:</Form.Label>
              <Form.Select
                {...register(`productSubCategory`)}
                isInvalid={!!errors.productSubCategory}
              >
                <option value="">Select</option>
                <option value="smartphones">Technical</option>
                <option value="computers">Business</option>
                <option value="tv">Operations</option>
                <option value="headphones">Communications</option>

              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.productSubCategory?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductType;
