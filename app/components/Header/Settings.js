import React from 'react';

import Img from 'components/Img';

import SettingIcon from './images/settings.svg';

function Settings() {
  return (
    <Img
      src={SettingIcon}
      alt="Settings"
      style={{ marginRight: '16px', cursor: 'pointer' }}
    />
  );
}

export default Settings;
