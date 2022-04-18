import "./styles.css";

export const NavbarSecondItem = () => {
  return (
    <ul className="nav-bar-second-item">
      <a className="navbar-second-item" href="#">
        <li>Gmail</li>
      </a>
      <a className="navbar-second-item" href="#">
        <li>Images</li>
      </a>
      <a className="navbar-second-item" href="#">
        <i className="fas fa-beer"></i>
      </a>
      <a className="navbar-second-item" href="#">
        <img src="../../../assets/navbar-img.jpg" alt="user" />
      </a>
    </ul>
  );
};
