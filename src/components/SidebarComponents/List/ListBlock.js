import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faHome, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const ListBlock = (props) => {
  const { clinicListData } = props;

  const list = clinicListData.map((clinic) => (
    <div key={clinic.properties.id} className="list">
      <div className="title">
        <h2>{clinic.properties.name}</h2>
        <FontAwesomeIcon icon={faShareAlt} />
      </div>
      <p className="addr">
        <FontAwesomeIcon icon={faHome} />
        {clinic.properties.address}
      </p>
      <p className="tel">
        <FontAwesomeIcon icon={faPhoneAlt} />
        <a href={`tel:${clinic.properties.phone}`}>{clinic.properties.phone}</a>
      </p>
      <div className="maskNum">
        <span className="adult">
          <p>成人</p>
          {clinic.properties.mask_adult}
        </span>
        <span className="child">
          <p>兒童</p>
          {clinic.properties.mask_child}
        </span>
      </div>
    </div>
  ));

  return (
    <div className="listBlock">
      {list}
    </div>
  );
};

ListBlock.propTypes = {
  clinicListData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListBlock;
