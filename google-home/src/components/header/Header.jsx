import "./styles.css";
import { HeaderTitle } from "./header-title/HeaderTitle.jsx";
import { InputForm } from "./input-form/InputForm.jsx";
import { HeaderBtn } from "./header-btn/HeaderBtn.jsx";

/* way 1: direct way */
export const Header = () => {
  return (
    <header>
      <HeaderTitle  />
      <InputForm />
      <HeaderBtn />
    </header>
  );
};

