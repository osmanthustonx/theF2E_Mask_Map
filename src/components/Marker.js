import React from 'react';
import PropTypes from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faHome, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const MarkerComponent = (props) => {
  const { districtClinicData } = props;
  const [activeClinic, setActiveClinic] = React.useState(null);
  const marker = districtClinicData.map((clinic) => (
    <Marker
      key={clinic.properties.id}
      position={[clinic.geometry.coordinates[1], clinic.geometry.coordinates[0]]}
      onClick={() => {
        setActiveClinic(clinic);
      }}
    />
  ));
  return (
    <>
      <MarkerClusterGroup>
        { marker }
      </MarkerClusterGroup>
      {activeClinic && (
      <Popup
        position={[
          activeClinic.geometry.coordinates[1],
          activeClinic.geometry.coordinates[0],
        ]}
        onClose={() => {
          setActiveClinic(null);
        }}
      >
        <div className="popup">
          <h2>{activeClinic.properties.name}</h2>
          <p className="popupAddr">
            {activeClinic.properties.address}
          </p>
          <p className="popupTel">
            <FontAwesomeIcon icon={faPhoneAlt} />
            {' '}
            <a href={`tel:${activeClinic.properties.phone}`}>{activeClinic.properties.phone}</a>
          </p>
          <div className="popupMask">
            <div className="popupAdult">
              <p>成人口罩數量</p>
              <p className="popupNum">
                <span>{activeClinic.properties.mask_adult}</span>
                {' '}
/200
              </p>
            </div>
            <div className="popupChild">
              <p>兒童口罩數量</p>
              <p className="popupNum">
                <span>{activeClinic.properties.mask_child}</span>
                {' '}
/50
              </p>
            </div>
          </div>
        </div>
      </Popup>
      )}
    </>
  );
};

MarkerComponent.propTypes = {
  districtClinicData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MarkerComponent;
