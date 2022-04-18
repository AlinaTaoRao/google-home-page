import "./styles.css";
import { NavbarFirstItem } from './navbar-first-item/NavbarFirstItem.jsx';
import { NavbarSecondItem } from './navbar-second-item/NavbarSecondItem.jsx';

export const Navbar = () => {
  return (
    <nav>
      <div><NavbarFirstItem /></div>

      <div><NavbarSecondItem /></div>
    </nav>
  );
};
