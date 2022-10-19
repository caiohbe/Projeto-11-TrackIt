import logo from '../../assets/images/logo.png'
import styled from 'styled-components'
import { secondaryColor, disabled } from '../../constants/colors'
import { Link } from 'react-router-dom'

function RegisterPage() {
    return (
        <Page>
            <>
                <img src={logo} alt='logo'></img>
                <input type='text' placeholder='email'/>
                <input type='text' placeholder='senha'/>
                <input type='text' placeholder='nome'/>
                <input type='text' placeholder='URL foto'/>

                <button>Cadastrar</button>
                <Link>
                    <h3>Já tem uma conta? Faça login!</h3>
                </Link>
            </>
        </Page>
    )
}

export default RegisterPage

const Page = styled.div`
    font-family: 'Lexend Deca', sans-serif;

    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        margin-top: 70px
    }

    input {
        margin-bottom: 8px;
        border: 1px solid #D4D4D4;
        padding-left: 11px;
        box-sizing: border-box;

        &::placeholder {
            color: ${disabled};
        }
    }

    input, button {
        height: 45px;
        font-size: 20px;
        border-radius: 5px;
        width: 80%;
    }

    button {
        border: none;
        background-color: ${secondaryColor};
        color: #FFFFFF;
        margin-bottom: 25px;
    }

    h3 {
        font-size: 14px;
        color: ${secondaryColor};
    }
`