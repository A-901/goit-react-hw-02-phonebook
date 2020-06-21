import React from 'react';
import PropTypes from 'prop-types';
import Stats from '../Stats/Stats';
import Styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={Styles.statistics}>
    <li>
      <h3 >Statistics</h3>
    </li>
    <Stats status="Good" value={good} />
    <Stats status="Neutral" value={neutral} />
    <Stats status="Bad" value={bad} />
    <Stats status="Total" value={total} />
    <Stats status="Positive feedback" value={positivePercentage} />
  </ul>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;