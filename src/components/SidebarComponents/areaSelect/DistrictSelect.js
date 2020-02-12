import React from 'react';
import PropTypes from 'prop-types';

const DistrictSelect = (props) => {
  const {
    district, districtFn, setCenter, setZoom,
  } = props;


  const option = district.map((item) => (<option value={item.district} key={item.district}>{item.district}</option>));

  const handleChange = (e) => {
    districtFn(e.target.value);
    setZoom(14);
    const locate = district.find((item) => (item.district === e.target.value));
    setCenter({
      lat: locate.lat,
      lng: locate.lng,
    });
  };

  return (
    <select name="" id="" defaultValue="---請選擇---" onChange={handleChange}>
      {option}
    </select>
  );
};

DistrictSelect.propTypes = {
  district: PropTypes.arrayOf(PropTypes.object).isRequired,
  districtFn: PropTypes.func.isRequired,
  setCenter: PropTypes.func.isRequired,
  setZoom: PropTypes.func.isRequired,
};

export default DistrictSelect;
