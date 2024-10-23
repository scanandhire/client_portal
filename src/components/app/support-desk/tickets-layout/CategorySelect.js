import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const CategorySelect = ({ category, className = '' }) => {
  return (
    <Form.Select
      style={{ width: '9.375rem' }}
      className={className}
      size="sm"
      defaultValue={category}
    >
      {['Select Category', 'Executive', 'Managerial', 'Technical', 'Sales', 'Accounting', 'Creative', 'Administrative', 'Legal', 'Marketing'].map(item => (
        <option key={item}>{item}</option>
      ))}
    </Form.Select>
  );
};

CategorySelect.propTypes = {
  category: PropTypes.string,
  className: PropTypes.string
};

export default CategorySelect;
