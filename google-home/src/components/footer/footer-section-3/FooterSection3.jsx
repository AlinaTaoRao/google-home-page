import "./styles.css";

/* way 1: direct way */
export const FooterSection3 = () => {
  return (
    <ul className="footer-section-3">
      <a className="footer-child-item3" href="#">
        <li>Privacy</li>
      </a>
      <a className="footer-child-item3" href="#">
        <li>Teams</li>
      </a>
      <a className="footer-child-item3" href="#">
        <li>Settings</li>
      </a>
    </ul>
  );
};
