import "./styles.css";
import { FooterSection1 } from "./footer-section-1/FooterSection1.jsx";
import { FooterSection2 } from "./footer-section-2/FooterSection2.jsx";
import { FooterSection3 } from "./footer-section-3/FooterSection3.jsx";

/* way 1: direct way */
export const Footer = () => {
  return (
    <footer>
      <div>
        <FooterSection1 />
      </div>
      <div>
        <FooterSection2 />
      </div>
      <div>
        <FooterSection3 />
      </div>
    </footer>
  );
};
