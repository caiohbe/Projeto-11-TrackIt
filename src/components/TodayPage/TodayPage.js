import styled from "styled-components"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { mainColor, done, textColor } from "../../constants/colors"
import checkMark from "../../assets/images/checkMark.png"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import apiURL from "../../constants/URL"
import dayjs from "dayjs"
import { AuthContext } from "../../contexts/auth"

const date = dayjs()
const weekDay = date.$W

function TodayPage({token}) {
    const [arr, setArr] = useState([])
    const [habitsDone, setHabitsDone] = useState([])
    const [allHabits, setAllHabits] = useState([])

    const { setPercentage } = useContext(AuthContext)
    setPercentage(Math.round((habitsDone.length)/(allHabits.length)*100))


    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function habitSwitch(id) {
        if (!habitsDone.includes(id)) {
            setHabitsDone([...habitsDone, id])
            axios.post(`${apiURL}/habits/${id}/check`, id, config)
            
        } else if (habitsDone.includes(id)) {
            setHabitsDone(habitsDone.filter((habitIt) => {
                if (habitIt !== id) {
                    return true
                }
            }))

            axios.post(`${apiURL}/habits/${id}/uncheck`, id, config)

        }
    }

    useEffect(() => {
        axios.get(`${apiURL}/habits/today`, config)
        .then((teste) => {
            setAllHabits(teste.data)

            setArr(teste.data.map((item) => {

                if (item.done && !habitsDone.includes(item.id)) {
                    setHabitsDone([...habitsDone, item.id])
                }

                return (
                    <Habit habitsDone={habitsDone}
                    currentSequence={item.currentSequence} 
                    highestSequence={item.highestSequence} 
                    id={item.id} key={item.id} 
                    onClick={() => habitSwitch(item.id)}>

                        <h1>{item.name}</h1>

                        <h2>
                            Sequência atual: <span>{item.currentSequence}</span> <br />
                            Seu recorde: <StyledSpan>{item.highestSequence}</StyledSpan>
                        </h2>

                        <div>
                            <img src={checkMark} alr="checkMark" />
                        </div>
                    </Habit>
                )
            }))
        })
        .catch((err) => console.log(err.message))

    }, [habitsDone])



    return (
        <Today>
            <Header/>
            <HabitContainer habitsDone={habitsDone}>
                <h1>{<SetWeekDay />}, {date.$D}/{date.$M + 1}</h1>
                <h3> {habitsDone.length === 0 ? 'nenhum hábito concluído ainda' : `${Math.round((habitsDone.length)/(allHabits.length)*100)}% dos hábitos concluídos`} </h3>
                {arr}
            </HabitContainer>
            <Footer />
        </Today>
    )
}

function SetWeekDay() {
    if (weekDay === 0) {
        return 'Domingo'
    } else if (weekDay === 1) {
        return 'Segunda'
    } else if (weekDay === 2) {
        return 'Terça'
    } else if (weekDay === 3) {
        return 'Quarta'
    } else if (weekDay === 4) {
        return 'Quinta'
    } else if (weekDay === 5) {
        return 'Sexta'
    } else if (weekDay === 6) {
        return 'Sábado'
    }
}

export default TodayPage

const Today = styled.div`
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
        color: ${props => props.habitsDone.length === 0 ? '#BABABA' : '#8FC549'};
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
        background-color: ${props => props.habitsDone.includes(props.id) ? '#8FC549' : '#EBEBEB'};
        border: ${props => props.done ? '' : '1px solid #E7E7E7'};
        border-radius: 5px;
        right: 13px;
        top: 13px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        color: ${props => props.habitsDone.includes(props.id) ? '#8FC549' : {textColor}};
    }

    p {
        color: ${done};
    }
`

const StyledSpan = styled.span`
    color: ${props => props.currentSequence === props.highestSequence ? '#8FC549' : {textColor}};
`