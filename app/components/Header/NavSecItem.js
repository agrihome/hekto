import Link from "next/link";
import style from "./NavSec.module.scss";

export default function NavSecItem({ children, className }) {
  return (
    <li className={`${className || ""}`}>
      <Link href="/" className={`${style.navSecItem} `}>{children}</Link>
    </li>
  );
}
