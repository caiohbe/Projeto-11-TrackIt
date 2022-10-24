import styled from "styled-components"
import { secondaryColor } from "../../constants/colors"
import { useNavigate } from "react-router-dom"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AuthContext} from '../../contexts/auth'
import React, { useContext } from "react";


function Footer() {
    const navigate = useNavigate()

    const { percentage } = useContext(AuthContext)

    return (
        <Bottom>
            <h2 data-identifier="habit-page-action" onClick={() => navigate('/habitos')}>Hábitos</h2>
            <div onClick={() => navigate('/hoje')}>
            <CircularProgressbar 
                value={percentage}
                text={'Hoje'}
                background
                backgroundPadding={6}
                styles={buildStyles({
                backgroundColor: `${secondaryColor}`,
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
                })}
            />
            </div>
            <h2 data-identifier="historic-page-action" onClick={() => navigate('/historico')}>Histórico</h2>
        </Bottom>
    )
}

export default Footer

const Bottom = styled.div`
    z-index: 1;
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
        height: 110px;
        width: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
    }
`