import styled from "styled-components"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { mainColor, notDone, done, textColor } from "../../constants/colors"
import checkMark from "../../assets/images/checkMark.png"

function TodayPage() {
    return (
        <Today>
            <Header />
            <HabitContainer>
                <h1>Segunda, 17/05</h1>
                <h3>nenhum hábito concluído ainda</h3>
                <Habit>
                    <h1>Ler 1 capítulo de livro</h1>

                    <h2>Sequência atual: <span>4 dias</span> <br />
                    Seu recorde: 5 dias</h2>
                    <div>
                        <img src={checkMark} alt='checkMark' />
                    </div>
                </Habit>
                <Habit>
                    <h1>Ler 1 capítulo de livro</h1>

                    <h2>Sequência atual: <span>4 dias</span> <br />
                    Seu recorde: <span>4 dias</span></h2>
                    <div>
                        <img src={checkMark} alt='checkMark' />
                    </div>
                </Habit>
                <Habit>
                    <h1>Ler 1 capítulo de livro</h1>

                    <h2>Sequência atual: <span>1 dias</span> <br />
                    Seu recorde: 5 dias</h2>
                    <div>
                        <img src={checkMark} alt='checkMark' />
                    </div>
                </Habit>
            </HabitContainer>
            <Footer />
        </Today>
    )
}

export default TodayPage

const Today = styled.div`
    background-color: #E5E5E5;
    width: 100vw;
    height: 100vh;
    margin-top: 70px;    
    margin-bottom: 70px;
    font-family: 'Lexend Deca';

`

const HabitContainer = styled.div`
    padding: 18px;
    padding-top: 25px;

    h1 {
        font-size: 23px;
        color: ${mainColor};
        line-height: 40px;
    }

    h3 {
        font-size: 18px;
        color: ${notDone};
        margin-bottom: 20px;
    }
`

const Habit = styled.div`
    box-sizing: border-box;
    height: 94px;
    padding: 15px;
    background-color: #FFFFFF;
    border-radius: 5px;
    position: relative;
    margin-bottom: 10px;

    h2 {
        font-size: 13px;
        line-height: 16px;
    }

    h1 {
        line-height: 25px;
    }
    
    h1, h2 {
        color: ${textColor};
    }

    div {
        position: absolute;
        width: 70px;
        height: 70px;
        background-color: ${done};
        border-radius: 5px;
        right: 13px;
        top: 13px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        color: ${done};
    }
`