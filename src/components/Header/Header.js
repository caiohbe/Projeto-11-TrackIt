import styled from "styled-components"
import { mainColor } from "../../constants/colors"
import trackIt from "../../assets/images/trackIt.png"

function Header() {
    return (
        <Top>
            <img src={trackIt} alt='logo'/>
            <img className="perfilImage" src='https://www.clipartkey.com/mpngs/m/198-1988954_staff-profile-photo-facebook-blank-profile-picture-male.png' alt="userImage" />
        </Top>
    )
}

export default Header

const Top = styled.div`
    width: 100vw;
    height: 70px;
    background-color: ${mainColor};
    box-shadow: 0px 4px 4px 0px #00000026;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 18px;
    position: fixed;
    top: 0;
    left: 0;

    .perfilImage {
        width: 51px;
        height: 51px;
        border-radius: 100%;
    }
`