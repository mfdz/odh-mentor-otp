import React from "react";

const Bicycle = ({ title, ...props }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 70">
      <path
        d="M69.913 58.875a14.528 14.528 0 01-5.786-27.856l-1.843-6.756-4.329 1.665-6.084 14.926c-1.64 3.716-3.883 5.544-6.871 5.565H34.453a14.56 14.56 0 11-5.687-13.703l5.355-5.355-1.071-3.779h-2.583a2.076 2.076 0 010-4.152h6.228a2.07 2.07 0 01.638 4.043l.55 1.938 17.953-3.116 5.303-2.047-1.45-4.835-4.372-.135a2.077 2.077 0 01.06-4.153h.066l5.867.18c.03.002.059.01.09.012a1.787 1.787 0 01.188.027 1.94 1.94 0 01.218.045c.056.015.11.036.164.056.071.026.143.055.21.088.052.026.101.058.15.088.063.038.125.078.183.12.05.04.097.084.143.127.05.046.1.093.144.144a1.82 1.82 0 01.12.155c.041.056.081.112.117.172.031.053.057.11.083.166a1.953 1.953 0 01.09.216c.007.023.02.041.026.064l2.437 8.125c.003.008.003.018.006.028a.197.197 0 01.008.024l2.447 8.969a14.527 14.527 0 111.779 28.944zM30.258 46.42H20.087a2.028 2.028 0 01-1.91-1.287 2.079 2.079 0 01.435-2.263l7.185-7.184a10.374 10.374 0 104.46 10.734zm0-4.152a10.315 10.315 0 00-1.52-3.648l-3.647 3.648zm8.087 0l-2.927-10.33-3.713 3.715a14.422 14.422 0 012.748 6.615zm14.69-15.28l-14.012 2.445 3.636 12.835h2.404c1.119 0 1.95-.83 3.008-3.093zm27.258 17.355a10.392 10.392 0 00-10.38-10.379c-.226 0-.448.02-.67.033l2.672 9.8a2.076 2.076 0 11-4.006 1.092l-2.672-9.8a10.376 10.376 0 1015.056 9.254z"
        data-name="90x70"
      ></path>
    </svg>
);

export default Bicycle;
