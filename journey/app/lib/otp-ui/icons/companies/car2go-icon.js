import React from "react";

const Car2goIcon = ({ title, ...props }) => (
  <svg
    version="1.1"
    viewBox="0 0 512 512"
    height="100%"
    width="100%"
    {...props}
  >
  <g>
    {title ? <title>{title}</title> : null}
    <path id="svg_1" d="m499.991,168l-54.815,0l-7.854,-20.944c-9.192,-24.513 -25.425,-45.351 -46.942,-60.263s-46.729,-22.793 -72.908,-22.793l-122.944,0c-26.18,0 -51.391,7.882 -72.908,22.793c-21.518,14.912 -37.75,35.75 -46.942,60.263l-7.854,20.944l-54.815,0c-8.191,0 -13.974,8.024 -11.384,15.795l8,24a12,12 0 0 0 11.384,8.205l28.815,0l-0.052,0.14c-19.55,10.953 -32.772,31.857 -32.772,55.86l0,48c0,16.225 6.049,31.029 16,42.309l0,61.691c0,13.255 10.745,24 24,24l48,0c13.255,0 24,-10.745 24,-24l0,-40l256,0l0,40c0,13.255 10.745,24 24,24l48,0c13.255,0 24,-10.745 24,-24l0,-61.691c9.951,-11.281 16,-26.085 16,-42.309l0,-48c0,-24.003 -13.222,-44.907 -32.772,-55.86l-0.052,-0.14l28.815,0a12,12 0 0 0 11.384,-8.205l8,-24c2.59,-7.771 -3.193,-15.795 -11.384,-15.795zm-365.388,1.528c9.315,-24.839 33.397,-41.528 59.925,-41.528l122.944,0c26.528,0 50.61,16.689 59.925,41.528l14.427,38.472l-271.648,0l14.427,-38.472zm-46.603,158.472c-17.673,0 -32,-14.327 -32,-32c0,-17.673 14.327,-32 32,-32s48,30.327 48,48s-30.327,16 -48,16zm336,0c-17.673,0 -48,1.673 -48,-16c0,-17.673 30.327,-48 48,-48s32,14.327 32,32c0,17.673 -14.327,32 -32,32z"/>
  <ellipse stroke="#000" stroke-width="19" ry="109" rx="115.5" id="svg_2" cy="131.5" cx="381" fill="#ffffff"/>
  <line transform="rotate(0.116128 384 91)" stroke="#000" stroke-width="19" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_3" y2="141.5" x2="384.5" y1="40.5" x1="383.5" fill="none"/>
  <line stroke-width="19" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_4" y2="178.5" x2="333.5" y1="136.5" x1="388.5" stroke="#000" fill="none"/>
  </g>
  </svg>
);

export default Car2goIcon;
