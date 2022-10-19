import Header from "../Header/Header"
import styled from "styled-components"
import { mainColor, secondaryColor, textColor, disabled } from "../../constants/colors"
import Footer from "../Footer/Footer"

function HabitsPage() {
    return (
        <Habits>
            <Header />
            <AddHabit>
                <h1>Meus hábitos</h1>
                <button>+</button>
            </AddHabit>
            <MyHabits>
                <CreatingHabit>
                    <input type='text' placeholder='nome do hábito' />

                    <WeekDays>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </WeekDays>

                    <Buttons>
                        <button>Cancelar</button>
                        <button>Salvar</button>
                    </Buttons>
                </CreatingHabit>
                <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
            </MyHabits>
            <Footer />
        </Habits>
        
    )
}

export default HabitsPage

const Habits = styled.div`
    background-color: #E5E5E5;
    width: 100vw;
    height: 100vh;
    margin-top: 70px;    
    font-family: 'Lexend Deca';

`

const AddHabit = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 18px;
    padding-top: 25px;

    h1 {
        font-size: 23px;
        color: ${mainColor};
        line-height: 40px;
    }

    button {
        border: none;
        border-radius: 5px;
        color: #FFFFFF;
        width: 40px;
        height: 35px;
        background-color: ${secondaryColor};
        font-size: 27px;
    }
`

const MyHabits = styled.div`
    color: ${textColor};
    font-size: 18px;
    padding: 18px ;
`

const CreatingHabit = styled.div`
    background-color: #FFFFFF;
    height: 180px;
    padding: 18px;
    position: relative;
    margin-bottom: 35px;
    border-radius: 12px;

    input {
        height: 45px;
        width: 95%;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        color: ${textColor};
        font-size: 20px;
        padding-left: 11px;
        margin-bottom: 4px;

        &::placeholder {
            font-family: 'Lexend Deca';
            color: ${disabled};
        }
    }
`

const WeekDays = styled.div`
    button {
        width: 30px;
        height: 30px;
        margin: 4px;
        color: ${disabled};
        border: 1px solid ${disabled};
        background-color: #FFFFFF;
        border-radius: 5px;
        font-size: 20px;
    }
`

const Buttons = styled.div`
    position: absolute;
    bottom: 16px;
    right: 16px;

    button {
        font-family: 'Lexend Deca';
        width: 85px;
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-left: 12px;
        font-size: 16px;
    }

    & button:nth-child(1) {
        color: ${secondaryColor};
        background-color: #FFFFFF;
    }

    & button:nth-child(2) {
        color: #FFFFFF;
        background-color: ${secondaryColor};
    }
`