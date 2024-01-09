import React from 'react';
import cactusImage from '.../images/cactus.png';

const Cactus = () => {
  return (
    <div className="cactus">
      <img src={cactusImage} alt="Cactus" style={{ width: '50px', height: '50px' }} />
    </div>
  );
};

export default Cactus;
