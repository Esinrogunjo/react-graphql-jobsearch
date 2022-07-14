import * as React from "react";
import { SVGProps } from "react";

const Spinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="spinner"
    viewBox="0 0 50 50"
    width="2em"
    height="2em"
    {...props}
  >
    <circle className="path" cx={25} cy={25} r={20} fill="none" />
  </svg>
);

export default Spinner;
