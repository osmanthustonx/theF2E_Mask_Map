import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const GovernmentInfo = () => (
  <div className="govInfoContainer">
    <p>
民眾持本人「健保卡」，每人限購2片，7天內不可重複
      {' '}
      <br />
可委託親友代為購買，一人限代一張健保卡
      <br />
兒童口罩僅限12歲以下兒童健保卡購買
    </p>
    <a href="http://www.nhi.gov.tw/Bbs_total.aspx?n=73CEDFC921268679&sms=D6D5367550F18590" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLink} />
      <span>健保署公告連結</span>
    </a>
  </div>
);

export default GovernmentInfo;
