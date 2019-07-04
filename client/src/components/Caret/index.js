import React from 'react';
import PropTypes from 'prop-types';
// import './style.scss'

const degrees = {
  down: 0,
  left: 90,
  up: 180,
  right: 270,
};

const propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(Object.keys(degrees)),
};

const defaultProps = {
  className: 'caret',
  direction: 'down',
};

const Caret = ({ className, direction }) => (
  <svg
    viewBox="0 0 12 7"
    role="presentation"
    aria-hidden="true"
    className={className}
    transform={`rotate(${degrees[direction]})`}
    stroke="none"
    strokeWidth="1"
    fillRule="nonzero"
  >
    <path d="M6,4.5858 L10.2929,0.29289 C10.6834,-0.09763 11.3166,-0.09763 11.7071,0.29289 C12.0976,0.68342 12.0976,1.3166 11.7071,1.7071 L6.7071,6.7071 C6.3166,7.0976 5.6834,7.0976 5.2929,6.7071 L0.29289,1.7071 C-0.09763,1.3166 -0.09763,0.68342 0.29289,0.29289 C0.68342,-0.09763 1.31658,-0.09763 1.70711,0.29289 L6,4.5858 Z" />
  </svg>
);

Caret.propTypes = propTypes;
Caret.defaultProps = defaultProps;

export default Caret;
