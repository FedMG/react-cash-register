import React from 'react';

export const Button = ({ name, handler, value }) => {
  return (
    <button type="button" onClick={handler} value={value ? value : name}>
      {name}
    </button>
  );
};
