import "./styles.css";

/* way 1: direct way */
export const FooterSection1 = () => {
  return (
    <ul className="footer-section-1">
      <a className="footer-child-item1" href="#">
        <li>Advertising</li>
      </a>
      <a className="footer-child-item1" href="#">
        <li>Business</li>
      </a>
      <a className="footer-child-item1" href="#">
        <li>How Search Work</li>
      </a>
    </ul>
  );
};
