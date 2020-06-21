import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Stats.module.css';

const Stats = ({ status, value }) => (
  <li className={Styles.item}>
    <span className={Styles.status}>{status}</span>
    {status !== 'Positive feedback' ? (
      <div className={Styles.value}>{value}</div>
    ) : (
      <div className={Styles.value}>{value} &#37;</div>
    )}
  </li>
);
Stats.propTypes = {
  status: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
export default Stats;