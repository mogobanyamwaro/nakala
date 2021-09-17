import React from 'react';

import { useGlobalContext } from '../context';

const Alert = () => {
  const { alert } = useGlobalContext();
  return (
    alert !== null &&
    alert.length > 0 &&
    alert.map((item) => (
      <div key={item.id} className={`alert alert--${item.alertType}`}>
        {item.msg}
      </div>
    ))
  );
};
export default Alert;
