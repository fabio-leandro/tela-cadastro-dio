import { HeaderContainer, Logo } from "./styles"
import logo from "../../images/logo.svg"
import Menu from "../Menu";

const Header = () => {

    return(
        <HeaderContainer>
            <Logo src={logo} />
            <Menu/>
        </HeaderContainer>
    )
}

export default Header;