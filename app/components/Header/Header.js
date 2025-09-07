import NavSec from "./NavSec";
import NavPrimary from "./NavPrimary";
import NavMobile from "./NavMobile";
import style from "./NavSec.module.scss";

export default function Header() {
  return (
    <header>
      <nav className={style.navSecWrapper}>
        <NavSec></NavSec>
      </nav>
      <nav className="navPrimaryWrapper">
        <NavPrimary></NavPrimary>
      </nav>

      <NavMobile></NavMobile>
    </header>
  );
}
