import { SVGProps } from "react";

const SvgSave = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 49 49"
    xmlSpace="preserve"
    width="18px"
    height="18px"
    {...props}
  >
    <path d="M27.5 5h6v10h-6z" />
    <path d="M39.914 0H.5v49h48V8.586L39.914 0zM10.5 2h26v16h-26V2zm29 45h-31V26h31v21z" />
    <path d="M13.5 32h7a1 1 0 1 0 0-2h-7a1 1 0 1 0 0 2zM13.5 36h10a1 1 0 1 0 0-2h-10a1 1 0 1 0 0 2zM26.5 36c.27 0 .52-.11.71-.29.18-.19.29-.45.29-.71s-.11-.521-.29-.71c-.37-.37-1.04-.37-1.41 0a.996.996 0 0 0-.3.71c0 .27.109.52.29.71.189.18.439.29.71.29z" />
  </svg>
);

export default SvgSave;
