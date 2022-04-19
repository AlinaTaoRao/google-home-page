import "./styles.css";

/* way 1: direct way, works */
// export const HeaderTitle = () => {
//   return (
//     <h1 className="header-title">
//       <span className="g">G</span>
//       <span className="o">O</span>
//       <span className="o2">O</span>
//       <span className="g2">G</span>
//       <span className="l">L</span>
//       <span className="e">E</span>
//     </h1>
//   );
// };

/* way 2: {} expression , works*/
export const HeaderTitle = () => {
  const classes = ["g", "o", "o2", "g2", "l", "e"];
  const spans = ["G", "O", "O", "G", "L", "E"];
  return (
    <h1 className="header-title">
      {spans.map((span, index) => (
        <span key={index} className={classes[index]}>
          {span}
        </span>
      ))}
    </h1>
  );
};

// export const HeaderTitle = (props) => {
//   return (
//     <h1 className="header-title">

//         <span className={props.class}>{props.span}</span>

//     </h1>
//   );
// };
