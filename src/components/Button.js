import React from 'react';

export const Button = ({ name, handler, value }) => {
  return (
    <button
      style={{ minWidth: '50px', minHeight: '40px' }}
      type="button"
      onClick={handler}
      value={value ? value : name}
    >
      {name}
    </button>
  );
};
