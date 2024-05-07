import styled from "@emotion/styled/macro"
import { ReactComponent as Ham } from "../../assets/ham.svg"
import { ReactComponent as Brand } from "../../assets/fabits-logo-mobile.svg"
import { ReactComponent as Bell } from "../../assets/notification-mobile.svg"
import { ReactComponent as Profile } from "../../assets/account-circle.svg"

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  background-color: #FFFFFF;
  border-bottom: 1px solid #E3E3E3;
`

const IconsContainer = styled.div`
  margin: 0 0 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled.div`
  height: 24px;
  width: 24px;
  background-color: transparent;
  margin: 0 16px 0 0;
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <IconsContainer>
        <Button><Ham /></Button>
        <Brand />
      </IconsContainer>
      <IconsContainer>
        <Button><Bell /></Button>
        <Button><Profile /></Button>
      </IconsContainer>
    </NavbarContainer>
  )
}

export default Navbar