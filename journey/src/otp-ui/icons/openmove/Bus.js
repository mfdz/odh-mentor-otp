import React from "react";

const Bus = ({ title, width = 26, height = 22, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg"  width={width} height={height} viewBox="0 0 90 70">
    <g data-name="90x70">
      <path d="M9.137 19.682H7.85a2.129 2.129 0 00-2.09 2.09v8.685a2.129 2.129 0 002.09 2.09h1.206a2.129 2.129 0 002.09-2.09v-8.685a2.06 2.06 0 00-2.01-2.09zM82.15 21.049h-1.206a2.129 2.129 0 00-2.09 2.09v8.685a2.129 2.129 0 002.09 2.09h1.206a2.129 2.129 0 002.09-2.09v-8.685a2.076 2.076 0 00-2.09-2.09zM70.812 4.645C63.495 1.91 45 1.75 45 1.75s-18.575.16-25.892 2.895-6.192 8.04-6.192 8.04v44.468a6.194 6.194 0 006.192 6.192h.723v2.814a2.129 2.129 0 002.091 2.091h8.121a2.129 2.129 0 002.091-2.09v-2.815h25.732v2.814a2.129 2.129 0 002.09 2.091h8.122a2.129 2.129 0 002.09-2.09v-2.815h.724a6.194 6.194 0 006.192-6.192V12.606c-.08 0 1.045-5.227-6.272-7.961zM38.567 7.057a.892.892 0 01.885-.884h11.096a.892.892 0 01.885.884V9.47a.892.892 0 01-.885.884H39.452a.892.892 0 01-.885-.884zM30.044 50.72a1.82 1.82 0 01-1.85 1.85h-7.156a1.82 1.82 0 01-1.85-1.85v-3.86a1.72 1.72 0 01.723-1.447 1.926 1.926 0 011.608-.321l7.157 1.93a1.883 1.883 0 011.367 1.769zm-9.65-10.855a1.1 1.1 0 01-1.126-1.126V16.144a1.1 1.1 0 011.126-1.126h48.97a1.1 1.1 0 011.126 1.126v22.595a1.1 1.1 0 01-1.126 1.126zM70.732 50.72a1.82 1.82 0 01-1.85 1.85h-7.157a1.82 1.82 0 01-1.849-1.85v-1.93a1.883 1.883 0 011.367-1.769l7.157-1.93a1.926 1.926 0 011.608.322 1.72 1.72 0 01.724 1.447z"></path>
    </g>
  </svg>
);

export default Bus;
