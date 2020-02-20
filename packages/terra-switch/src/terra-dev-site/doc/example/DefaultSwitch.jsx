import React, { useState } from 'react';
import Switch from 'terra-switch';

export default () => {
  const [isOn, setValue] = useState(false);
  return (
    <div>
      <Switch
        isOn={isOn}
        labelText="Label"
        onChange={() => { setValue(!isOn); }}
      />
    </div>
  );
};
