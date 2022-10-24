import styled from "styled-components"
import { mainColor } from "../../constants/colors"
import trackIt from "../../assets/images/trackIt.png"
import React, { useContext } from "react"
import { AuthContext } from '../../contexts/auth'

function Header() {
    const { image } = useContext(AuthContext)

    return (
        <Top>
            <img data-identifier="avatar" src={trackIt} alt='logo'/>
            <img className="perfilImage" src={image} alt="userImage" />
        </Top>
    )
}

export default Header

const Top = styled.div`
    z-index: 1;
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