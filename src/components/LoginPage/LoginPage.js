import logo from '../../assets/images/logo.png'
import styled from 'styled-components'
import { secondaryColor } from '../../constants/colors'
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <Page>
            <>
                <img src={logo}></img>
                <input type='text' placeholder='email'/>
                <input type='text' placeholder='senha'/>
                <button>Entrar</button>
                <Link>
                    <h3>Não tem uma conta? Cadastre-se!</h3>
                </Link>
            </>
        </Page>
    )
}

export default LoginPage

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
            color: #DBDBDB;
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

