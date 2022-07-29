import React from 'react';
import SvgIcon from './SvgIcon';

const Write = (props) => {
  return (
    <SvgIcon id="WriteIcon" aria-label="write icon" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
      >
        <path d="m14 1c.8284271.82842712.8284271 2.17157288 0 3l-9.5 9.5-4 1 1-3.9436508 9.5038371-9.55252193c.7829896-.78700064 2.0312313-.82943964 2.864366-.12506788z" />
        <path d="m6.5 14.5h8" />
        <path d="m12.5 3.5 1 1" />
      </g>
    </SvgIcon>
  );
};

export default Write;
