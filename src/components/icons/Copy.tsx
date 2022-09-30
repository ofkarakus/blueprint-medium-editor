import { SVGProps } from "react";

const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M479.168 113.227a10.678 10.678 0 0 0-2.304-3.435L370.197 3.125A10.739 10.739 0 0 0 362.666 0h-192C164.776 0 160 4.776 160 10.667V64H42.667C36.776 64 32 68.776 32 74.667v426.667C32 507.224 36.776 512 42.667 512h298.667c5.891 0 10.667-4.776 10.667-10.667V448h117.333c5.891 0 10.667-4.776 10.667-10.667v-320a10.683 10.683 0 0 0-.833-4.106zM373.333 36.416l70.251 70.251h-70.251V36.416zm-42.666 454.251H53.333V85.333H224v96c0 5.891 4.776 10.667 10.667 10.667h96v298.667zm-85.334-320v-70.251l70.251 70.251h-70.251zm213.334 256H352V181.333a10.743 10.743 0 0 0-3.125-7.541L242.208 67.125A10.737 10.737 0 0 0 234.667 64h-53.333V21.333H352v96c0 5.891 4.776 10.667 10.667 10.667h96v298.667z" />
  </svg>
);

export default SvgCopy;
