import styled from "styled-components"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { secondaryColor, mainColor } from "../../constants/colors"

function TodayPage() {
    return (
        <>
            <Header />
            <AddHabit>
                <h1>Meus hábitos</h1>
                <button>+</button>
            </AddHabit>
            <Footer />
        </>
    )
}

export default TodayPage


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
