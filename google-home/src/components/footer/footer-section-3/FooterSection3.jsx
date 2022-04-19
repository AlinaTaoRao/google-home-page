import "./styles.css";

/* way 1: direct way, works */
// export const FooterSection3 = () => {
//   return (
//     <ul className="footer-section-3">
//       <a className="footer-child-item3" href="#">
//         <li>Privacy</li>
//       </a>
//       <a className="footer-child-item3" href="#">
//         <li>Teams</li>
//       </a>
//       <a className="footer-child-item3" href="#">
//         <li>Settings</li>
//       </a>
//     </ul>
//   );
// };

/* way 2: {} expression , works*/
export const FooterSection3 = () => {
  const itemClass = "footer-child-item3";
  const lists = ["Privacy", "Teams", "Settings"];
  return (
    <ul className="footer-section-3">
      {lists.map((list, index) => (
        <a key={index} className={itemClass} href="#">
          <li key={index}>{list}</li>
        </a>
      ))}
    </ul>
  );
};
