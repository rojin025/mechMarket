import styled from "styled-components";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
const StyledLogo = styled.div`
  text-align: center;
`;

function Logo() {
  return (
    <StyledLogo className="flex justify-center items-center">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 rounded-full object-cover"
        />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
