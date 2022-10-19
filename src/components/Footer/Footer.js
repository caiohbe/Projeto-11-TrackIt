import styled from "styled-components"
import { secondaryColor } from "../../constants/colors"

function Footer() {
    return (
        <Bottom>
            <h2>Hábitos</h2>
            <div>Hoje</div>
            <h2>Histórico</h2>
        </Bottom>
    )
}

export default Footer

const Bottom = styled.div`
    height: 70px;
    width: 100vw;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;

    h2 {
        padding: 30px;
        color: ${secondaryColor};
    }

    div {
        color: #FFFFFF;
        background-color: ${secondaryColor};
        height: 90px;
        width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        margin-bottom: 40px;
    }
`