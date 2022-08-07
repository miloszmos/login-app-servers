import * as React from 'react';
import { SVGProps } from 'react';

const ShowPasswordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 256 256"
    {...props}
  >
    <g
      style={{
        stroke: 'none',
        strokeWidth: 0,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fill: 'none',
        fillRule: 'nonzero',
        opacity: 1,
      }}
    >
      <path
        d="M45 73.264c-14.869 0-29.775-8.864-44.307-26.346a3 3 0 0 1 0-3.836C15.225 25.601 30.131 16.737 45 16.737c14.868 0 29.775 8.864 44.307 26.345a2.998 2.998 0 0 1 0 3.836C74.775 64.399 59.868 73.264 45 73.264zM6.934 45C19.73 59.776 32.528 67.264 45 67.264c12.473 0 25.27-7.487 38.066-22.264C70.27 30.224 57.473 22.737 45 22.737c-12.472 0-25.27 7.487-38.066 22.263z"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: '#4b5563',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
      <path
        d="M45 62c-9.374 0-17-7.626-17-17s7.626-17 17-17 17 7.626 17 17-7.626 17-17 17zm0-28c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11z"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: '#4b5563',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
    </g>
  </svg>
);

export default ShowPasswordIcon;
