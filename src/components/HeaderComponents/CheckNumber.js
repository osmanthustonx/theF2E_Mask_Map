import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';


const CheckNumber = () => {
  const [oddEven, setOddEven] = useState('');

  useEffect(() => {
    if (new Date().getDay() % 2 === 0) {
      setOddEven('偶數 (0. 2. 4. 6. 8)');
    } else {
      setOddEven('奇數 (1. 3. 5. 7. 9)');
    }
  }, []);

  return (
    <div className="checkNumContainer">
      <div className="settingHint">
        <FontAwesomeIcon icon={faCog} />
        <span>本日能購買口罩</span>
      </div>
      <div className="checkHint">
        {oddEven}
        {' '}
        可買口罩
      </div>
      <p>
        請檢查您身分證尾數號碼
      </p>
    </div>
  );
};

export default CheckNumber;
