import logo from '../../assets/images/logo.png'
import styled from 'styled-components'
import { secondaryColor, disabled } from '../../constants/colors'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import 'react-loader-spinner'
import apiURL from '../../constants/URL'



function LoginPage({setToken}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loginText, setLoginText] = useState('Entrar')

    const navigate = useNavigate()


    function login(event) {
        event.preventDefault()
        
        setLoginText(
            <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#FFFFFF" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        )

        axios
        .post(`${apiURL}/auth/login`, {email, password})
        .then((user) => {
            setToken(user.data.token)
            navigate('/hoje')
        })
        .catch((err) => {
            alert(err.response.data.message)
            setLoginText('Entrar')
        })
    }

    return (
        <Page loginText={loginText}>
            <img src={logo} alt='logo'></img>
            <form onSubmit={login}>
                <input disabled={loginText !== 'Entrar'} onChange={e => setEmail(e.target.value)} required type='email' placeholder='email'/>
                <input disabled={loginText !== 'Entrar'} onChange={e => setPassword(e.target.value)} required type='password' placeholder='senha'/>
                <button type='submit'>{loginText}</button>
            </form>

            <StyledLink to={'/cadastro'}>
                <h3>Não tem uma conta? Cadastre-se!</h3>
            </StyledLink>
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
        background-color: ${props => props.loginText === 'Entrar' ? '#FFFFFF' : '#F2F2F2'};
        color: ${props => props.loginText === 'Entrar' ? '#000000' : '#AFAFAF'};

        &::placeholder {
            color: ${disabled};
        }
    }

    form {        
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;   
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
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: ${props => props.loginText === 'Entrar' ? 1 : 0.7};
    }
    `


const StyledLink = styled(Link)`
    font-size: 14px;
    color: ${secondaryColor};
`