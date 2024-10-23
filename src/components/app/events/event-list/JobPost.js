import Calendar from 'components/common/Calendar';
import Flex from 'components/common/Flex';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import paths from 'routes/paths';

const JobPost = ({ details, isLast }) => {
  const {
    calendar,
    title,
    location,
    description,
    badge = {},
    UDF1,
    UDF2,
    UDF3,
    UDF4,
    interested
  } = details;
  return (
    <Flex>
      <Calendar {...calendar} />
      <div className="flex-1 position-relative ps-3">
        <h6 className="fs-9 mb-0">
          <Link to={paths.eventDetail}>
            <span className="me-1">{title}</span>
            {badge.title && (
              <span className={`badge badge-${badge.type} rounded-pill `}>
                {badge.title}
              </span>
            )}
          </Link>
        </h6>
        <p className="mb-1">

          <Link to="#!" className="text-700 ps-1">
            {location}
          </Link>
        </p>


        {description && <p className="text-1000 mb-0">Description: {description}</p>}



        {!isLast && <div className="border-dashed border-bottom my-3"></div>}
      </div>
    </Flex>
  );
};

JobPost.propTypes = {
  details: PropTypes.shape({
    calendar: PropTypes.shape(Calendar.propTypes),
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

    UDF1: PropTypes.string,
    UDF2: PropTypes.string,
    UDF3: PropTypes.string,
    UDF4: PropTypes.string,
    duration: PropTypes.string,
    interested: PropTypes.string,
    badge: PropTypes.object
  }),
  isLast: PropTypes.bool
};

export default JobPost;
