import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

function Header() {
  return (
    <span className="flex items-center justify-between p-4">
      <Logo />
      <MainNav />
    </span>
  );
}

export default Header;
