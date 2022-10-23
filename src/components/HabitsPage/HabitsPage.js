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
    const [visibleInput, setVisibleInput] = useState(false)
    const [deletedHabit, setDeletedHabit] = useState('')
    const [habitName, setHabitName] = useState('')
    const [dayNumber, setDayNumber] = useState([])

    const days = [['D', 0], ['S', 1], ['T', 2], ['Q', 3], ['Q', 4], ['S', 5], ['S', 6]]

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

                

                habit.days.forEach((d) => {
                    dayButtons[d] = <button className="selected">{days[d][0]}</button>
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

    }, [habitIds, visibleInput])

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

    function saveHabit(name, days) {
        if (name === '') {
            alert('Hábito sem nome')
            return
        } else if (days.length === 0) {
            alert('Selecione os dias da semana')
            return
        }

        const habit = {
            name,
            days: days.sort()
        }

        console.log(name, days)

        axios.
        post(`${apiURL}/habits`, habit, config)
        .then(() => {
            setVisibleInput(false)
        })

        
    }

    function daySwitch(num) {
        if (!dayNumber.includes(num)) {
            setDayNumber([...dayNumber, num])
        } else {
            setDayNumber(dayNumber.filter((d) => {
                if (d !== num) {
                    return true
                }
            }))
        }
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
                <button onClick={() => setVisibleInput(true)}>+</button>
            </AddHabit>
            <MyHabits>
                <CreatingHabit visibleInput={visibleInput}>
                    <input onChange={(e) => setHabitName(e.target.value)} type='text' placeholder='nome do hábito' />

                    <div>
                        {days.map((day, i) => {
                            return (
                                <StyledButton key={i} dayNumber={dayNumber} dayIndex={i} onClick={() => daySwitch(i)}>{day[0]}</StyledButton>
                            )
                        })}
                    </div>

                    <Buttons>
                        <button onClick={() => setVisibleInput(false)}>Cancelar</button>
                        <button onClick={() => saveHabit(habitName, dayNumber)}>Salvar</button>
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

const StyledButton = styled.button`
        width: 30px;
        height: 30px;
        margin: 4px;
        margin-left: 0px;
        margin-right: 8px;
        color: ${props => props.dayNumber.includes(props.dayIndex) ? '#FFFFFF' : disabled};
        border: 1px solid ${disabled};
        background-color: ${props => props.dayNumber.includes(props.dayIndex) ? '#CFCFCF' : '#FFFFFF'};
        border-radius: 5px;
        font-size: 20px;
`

const DeleteHabit = styled.div`
    position: fixed;
    z-index: 3;
    height: 100vh;
    width: 100vw;

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
    margin-top: 70px;    
    margin-bottom: 0px;
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
    display: ${props => props.visibleInput ? '' : 'none'};

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