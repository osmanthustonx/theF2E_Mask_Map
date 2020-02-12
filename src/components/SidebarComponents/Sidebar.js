import React from 'react';
import PropTypes from 'prop-types';

import '../../assets/sidebarScss.scss';
import AreaBlock from './areaSelect/AreaBlock';
import ListBlock from './List/ListBlock';

const Sidebar = (props) => {
  const {
    areaData, setSelectCity, selectCity, setSelectDistrict, clinicListData, setCenter, setZoom,
  } = props;

  const city = areaData.reduce((pre, cur) => Array.from(new Set([...pre, Object.values(cur)[2]])), []);


  const district = [{
    zip_code: 0,
    district: '--- 請選擇 ---',
  }, areaData.reduce((pre, cur) => (selectCity === cur.city ? [...pre, cur] : [...pre]), [])].flat();


  return (
    <div className="sideBar">
      <AreaBlock
        city={city}
        district={district}
        cityFn={setSelectCity}
        districtFn={setSelectDistrict}
        clinicNum={clinicListData}
        setCenter={setCenter}
        setZoom={setZoom}
      />
      <ListBlock clinicListData={clinicListData} />
    </div>
  );
};

Sidebar.propTypes = {
  areaData: PropTypes.arrayOf(PropTypes.object).isRequired,
  clinicListData: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectCity: PropTypes.string.isRequired,
  setSelectCity: PropTypes.func.isRequired,
  setSelectDistrict: PropTypes.func.isRequired,
  setZoom: PropTypes.func.isRequired,
};

export default Sidebar;
