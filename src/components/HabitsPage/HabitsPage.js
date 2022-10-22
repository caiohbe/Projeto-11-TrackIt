import Header from "../Header/Header"
import styled from "styled-components"
import { mainColor, secondaryColor, textColor, disabled } from "../../constants/colors"
import Footer from "../Footer/Footer"
import { useEffect, useState } from "react"
import axios from "axios"
import apiURL from "../../constants/URL"
import thrash from '../../assets/images/thrash.png'

function HabitsPage({ token }) {
    const [arr, setArr] = useState([])
    const [habitIds, setHabitIds] = useState([])
    const [visible, setVisible] = useState(false)
    const [deletedHabit, setDeletedHabit] = useState('')


    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios
        .get(`${apiURL}/habits`, config)
        .then((habits) => {
            console.log(habits)
            setArr(habits.data.map((habit) => {

                if (!habitIds.includes(habit.id)) {
                    setHabitIds([...habitIds, habit.id])

                }

                const dayButtons = [
                    <button>D</button>,
                    <button>S</button>,
                    <button>T</button>,
                    <button>Q</button>,
                    <button>Q</button>,
                    <button>S</button>,
                    <button>S</button>
                ]

                const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

                habit.days.forEach((d) => {
                    dayButtons[d] = <button className="selected">{days[d]}</button>
                })

                return (
                    <Habit id={habit.id}>
                        {habit.name}
                        
                        <div>
                            {dayButtons}
                        </div>

                        <img onClick={() => {
                            setVisible(!visible)
                            setDeletedHabit(habit.id)
                        }} src={thrash} alt='thrash' />
                </Habit>
                )
            }))
        })
    }, [habitIds])

    function deleteHabit (id) {
        setVisible(!visible)
        console.log(id) 
    
        axios
        .delete(`${apiURL}/habits/${id}`, config)
        .then(() => {
            const newHabits = habitIds.filter((h) => {
                if(h !== id) {
                    return true
                }
            })

            setHabitIds(newHabits)
        })
    
    }

    return (
        <Habits>
            <DeleteHabit visible={visible}>
                <div className="background"></div>

                <div className="text">
                    <p>Você realmente deseja remover esse hábito?</p>
                    <div className="buttons">
                        <button onClick={() => setVisible(!visible)}>Cancelar</button>
                        <button onClick={() => deleteHabit(deletedHabit)}>Confirmar</button>
                    </div>
                </div>
                
            </DeleteHabit>
            <Header />
            <AddHabit onClick={() => console.log(arr, habitIds)}>
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

                {arr}

                <h2>{arr.length === 0 ? 'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!' : ''}</h2>
            </MyHabits>
            <Footer />
        </Habits>
        
    )
}



export default HabitsPage

const DeleteHabit = styled.div`
    display: ${props => props.visible ? 'flex' : 'none'};
    justify-content: center;

    .background {
        position: fixed;
        z-index: 1;
        width: 100vw;
        height: 100vh;
        background-color: #666666;
        opacity: 0.5;
    }

    .text {
        position: fixed;
        z-index: 2;
        height: 90px;
        background-color: #FFFFFF;
        top: 160px;
        padding: 20px;
        border-radius: 12px;
        position: relative;
    }

    .buttons {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 20px;

        button {
            font-family: 'Lexend Deca';
            margin-left: 20px;
            width: 85px;
            height: 35px;
            border: none;
            border-radius: 5px;
        }

        & button:nth-child(1) {
            background-color: #FFFFFF;
            color: ${secondaryColor};
        }

        & button:nth-child(2) {
            background-color: ${secondaryColor};
            color: #FFFFFF;
        }
    }
`

const Habit = styled.div`
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 25px;
    padding: 12px;
    position: relative;
    box-sizing: border-box;
    background-color: #FFFFFF;
    height: 90px;
    border-radius: 12px;
    display:  flex;
    flex-direction: column;

    .selected {
        background: #CFCFCF;
        color: #FFFFFF;
        border: none;
    }

    img {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    button {
        width: 30px;
        height: 30px;
        margin: 4px;
        margin-left: 0px;
        margin-right: 8px;
        color: ${disabled};
        border: 1px solid ${disabled};
        background-color: #FFFFFF;
        border-radius: 5px;
        font-size: 20px;
    }

    div {
        display: flex;
    }
`

const Habits = styled.div`
    background-color: #E5E5E5;
    width: 100vw;
    height: 100vh;
    margin-top: 70px;    
    padding-bottom: 200px;
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
        margin-left: 0px;
        margin-right: 8px;
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