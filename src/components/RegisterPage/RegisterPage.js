import logo from '../../assets/images/logo.png'
import styled from 'styled-components'
import { secondaryColor, disabled } from '../../constants/colors'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import apiURL from '../../constants/URL'
import { ThreeDots } from 'react-loader-spinner'
import 'react-loader-spinner'

function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')

    const [registerText, setRegisterText] = useState('Cadastrar')

    const navigate = useNavigate()

    function register(event) {
        event.preventDefault()

        setRegisterText(
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

        const form = {email, name, image, password}

        axios
        .post(`${apiURL}/auth/sign-up`, form)
        .then((user) => {
            navigate('/')
        })
        .catch((err) => {
            alert(err.response.data.message)

            setRegisterText('Cadastrar')
        })
        
    }

    return (
        <Page registerText={registerText}>
            <img src={logo} alt='logo'></img>
            <form onSubmit={register}>
                <input data-identifier="input-email" disabled={registerText !== 'Cadastrar'} onChange={e => setEmail(e.target.value)} required type='email' placeholder='email'/>
                <input data-identifier="input-password" disabled={registerText !== 'Cadastrar'} onChange={e => setPassword(e.target.value)} required type='password' placeholder='senha'/>
                <input data-identifier="input-name" disabled={registerText !== 'Cadastrar'} onChange={e => setName(e.target.value)} required type='text' placeholder='nome'/>
                <input data-identifier="input-photo" disabled={registerText !== 'Cadastrar'} onChange={e => setImage(e.target.value)} required type='url' placeholder='URL foto'/>
                <button type='submit'>{registerText}</button>
            </form>
            
            <StyledLink data-identifier="back-to-login-action" to={'/'}>Já tem uma conta? Faça login!</StyledLink>

        </Page>
    )
}

export default RegisterPage

const Page = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    background-color: #FFFFFF;
    width: 100vw;
    height: 100vh;
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
        color: ${props => props.registerText === 'Cadastrar' ? '#000000' : '#AFAFAF'};

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
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: ${props => props.registerText === 'Cadastrar' ? 1 : 0.7};
    }

    form {        
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;   
    }
`

const StyledLink = styled(Link)`
    font-size: 14px;
    color: ${secondaryColor};
`