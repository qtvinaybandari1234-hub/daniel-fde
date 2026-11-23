import { waHref, igHref, ext } from "../lib.js";

export const WaLink = ({ className = "btn btn-wa", children, ...p }) => (
  <a className={className} href={waHref} {...ext} {...p}>{children}</a>
);
export const IgLink = ({ className = "btn btn-ig", children, ...p }) => (
  <a className={className} href={igHref} {...ext} {...p}>{children}</a>
);
