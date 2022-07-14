import * as React from "react";
import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.939 5.188c-2.745 0-4.97 2.322-4.97 5.188 0 2.865 2.225 5.188 4.97 5.188 2.744 0 4.969-2.323 4.969-5.188 0-2.866-2.225-5.188-4.97-5.188Zm-7.454 5.188c0-4.298 3.337-7.782 7.454-7.782 4.116 0 7.454 3.484 7.454 7.782a7.98 7.98 0 0 1-1.378 4.509l5.983 6.246a1.338 1.338 0 0 1 0 1.834 1.206 1.206 0 0 1-1.757 0l-5.983-6.246a7.21 7.21 0 0 1-4.32 1.438c-4.116 0-7.453-3.484-7.453-7.781Z"
      fill="#00717D"
    />
  </svg>
);

export default SearchIcon;
