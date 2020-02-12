import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';

import '../assets/mapContainer.scss';

import Header from './HeaderComponents/Header';
import Sidebar from './SidebarComponents/Sidebar';
import LocateControl from './LocateControl';
import MarkerComponent from './Marker';

import areaData from '../latlng.json';

async function getData(setData) {
  try {
    const res = await fetch('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR14GsJ3L_SUQSTO1F9ru1pydJrv2t9KJA5xQqqhw5Fode7Y7VGubLGjnBM');
    const resJson = await res.json();
    setData(
      resJson.features,
    );
  } catch (error) {
    console.log(error);
  }
}

const MapContainer = (props) => {
  const {
    center, zoom, setCenter, setZoom,
  } = props;
  const [clinicData, setClinicData] = useState(
    [{
      properties: {
        id: '',
        name: '',
        phone: '',
        address: '',
        mask_adult: 0,
        mask_child: 0,
        updated: '',
        available: '',
        note: '',
        custom_note: '',
        website: '',
        county: '',
        town: '',
        cunli: '',
      },
      geometry: {
        coordinates: [0, 0],
      },
    }],
  );
  const [selectCity, setSelectCity] = useState('臺北市');
  const [selectDistrict, setSelectDistrict] = useState('');
  let districtClinicData;

  const clinicDataSource = clinicData.reduce((pre, cur) => ([...pre, cur.properties.county === selectCity ? cur : []]), []).flat();

  if (selectDistrict === '') {
    districtClinicData = clinicDataSource;
  } else {
    districtClinicData = clinicDataSource.reduce((pre, cur) => [...pre, cur.properties.town === selectDistrict ? cur : []], []).flat();
  }

  useEffect(() => {
    getData(setClinicData);
  }, []);

  return (
    <>
      <Header />
      <div className="map">
        <Sidebar
          areaData={areaData}
          clinicListData={districtClinicData}
          selectCity={selectCity}
          setSelectCity={setSelectCity}
          setSelectDistrict={setSelectDistrict}
          setCenter={setCenter}
          setZoom={setZoom}
        />
        <Map center={center} zoom={zoom} maxZoom={19}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocateControl startDirectly={false} />
          <MarkerComponent districtClinicData={districtClinicData} />
        </Map>
      </div>
    </>
  );
};

MapContainer.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  setCenter: PropTypes.func.isRequired,
  setZoom: PropTypes.func.isRequired,
};


export default MapContainer;
