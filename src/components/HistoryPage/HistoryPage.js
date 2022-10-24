import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styled from "styled-components"
import { mainColor, textColor } from "../../constants/colors"

function HistoryPage() {
    return (
        <History>
            <Header />
            <HabitContainer>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </HabitContainer>
            <Footer />

        </History>
    )
}

export default HistoryPage

const History = styled.div`
    margin-top: 70px;    
    font-family: 'Lexend Deca';
`


const HabitContainer = styled.div`
    padding: 18px;
    padding-top: 25px;

    h1 {
        font-size: 23px;
        color: ${mainColor};
        line-height: 30px;
        margin-bottom: 18px;

    }

    h2 {
        font-size: 18px;
        color: ${textColor};
    }
`