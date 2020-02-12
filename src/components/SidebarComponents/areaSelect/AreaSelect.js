import React from 'react';
import PropTypes from 'prop-types';

const AreaSelect = (props) => {
  const {
    city, cityFn, districtFn,
  } = props;
  const Option = city.map((item) => <option value={item} key={item}>{item}</option>);
  const handleChange = (e) => {
    cityFn(e.target.value);
    districtFn('');
  };
  return (
    <select name="" id="" onChange={handleChange}>
      {Option}
    </select>
  );
};

AreaSelect.propTypes = {
  city: PropTypes.arrayOf(PropTypes.string).isRequired,
  cityFn: PropTypes.func.isRequired,
  districtFn: PropTypes.func.isRequired,
};

export default AreaSelect;
