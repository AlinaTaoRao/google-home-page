import "./styles.css";

/* way 1: direct way, works*/
// export const FooterSection1 = () => {
//   return (
//     <ul className="footer-section-1">
//       <a className="footer-child-item1" href="#">
//         <li>Advertising</li>
//       </a>
//       <a className="footer-child-item1" href="#">
//         <li>Business</li>
//       </a>
//       <a className="footer-child-item1" href="#">
//         <li>How Search Work</li>
//       </a>
//     </ul>
//   );
// };

/* way 2: {} expression , works*/
export const FooterSection1 = () => {
  const itemClass = "footer-child-item1";
  const lists = ["Advertising", "Business", "How Search Work"];
  return (
    <ul className="footer-section-1">
      {lists.map((list, index) => (
        <a key={index} className={itemClass} href="#">
          <li key={index}>{list}</li>
        </a>
      ))}
    </ul>
  );
};
