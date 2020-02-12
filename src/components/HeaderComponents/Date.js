import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const DateContainer = () => {
  const year = new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
  }).format(new Date());
  const monthDate = new Intl.DateTimeFormat('zh-TW', {
    month: 'short',
    day: 'numeric',
  }).format(new Date());
  const week = new Intl.DateTimeFormat('zh-TW', {
    weekday: 'narrow',
  }).format(new Date());
  return (
    <div className="DateContainer">
      <div className="year">
        <FontAwesomeIcon icon={faCalendar} />
        <span>{year}</span>
      </div>
      <h1>
        {monthDate}
(
        {week}
)
      </h1>
    </div>
  );
};

export default DateContainer;
