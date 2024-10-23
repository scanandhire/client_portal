import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const AgentSelect = ({ agent, className = '' }) => {
  return (
    <Form.Select
      style={{ width: '9.375rem' }}
      className={className}
      size="sm"
      defaultValue={agent}
    >
      {['None', 'Schedule a Interview', 'Run Background Check', 'Offer Letter', 'Onboard'].map(item => (
        <option key={item}>{item}</option>
      ))}
    </Form.Select>
  );
};

AgentSelect.propTypes = {
  agent: PropTypes.string,
  className: PropTypes.string
};

export default AgentSelect;
