import React from 'react';
import PropTypes from 'prop-types';

import AreaSelect from './AreaSelect';
import DistrictSelect from './DistrictSelect';

const AreaBlock = (props) => {
  const {
    city, cityFn, district, districtFn, clinicNum, setCenter, setZoom,
  } = props;


  return (
    <div className="selectBlock">
      <AreaSelect city={city} cityFn={cityFn} districtFn={districtFn} />
      <DistrictSelect district={district} districtFn={districtFn} setCenter={setCenter} setZoom={setZoom} />
      <p>
共
        <span>{clinicNum.length}</span>
家可以購買口罩
      </p>
    </div>
  );
};

AreaBlock.propTypes = {
  city: PropTypes.arrayOf(PropTypes.string).isRequired,
  cityFn: PropTypes.func.isRequired,
  district: PropTypes.arrayOf(PropTypes.object).isRequired,
  districtFn: PropTypes.func.isRequired,
  clinicNum: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  setCenter: PropTypes.func.isRequired,
  setZoom: PropTypes.func.isRequired,
};

export default AreaBlock;
