

import NavSec from "./NavSec"
import NavPrimary from "./NavPrimary"
import NavMobile from "./NavMobile"

export default function Header() {
  return (
    <header>
      <nav className="nav-sec">

      <NavSec></NavSec>
        
      </nav>
      <nav className="nav-primary">
      <NavPrimary></NavPrimary>
      </nav>

      <NavMobile></NavMobile>
    </header>
  );
}
