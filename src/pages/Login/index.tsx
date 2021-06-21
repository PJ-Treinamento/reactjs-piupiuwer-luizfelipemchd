import React, { FormEvent } from "react";
import { useState } from "react";
import { Container, ErrorMessage, InputBonito, PasswordWrapper } from "./styles";
import Logo from "../../assets/images/logo.svg"
import ShowPassword from "../../assets/icons/showPass.svg"
import HidePassword from "../../assets/icons/hidePass.svg"
import api from "../../services/api";
import useAuth, { IUserData } from "../../hooks/useAuth";
import { AxiosResponse } from "axios";

interface Cred {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    
    const [visibility, setVisibility] = useState<"password" | "text">("password")  
    const [userEMail, setUserEMail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [failTry, setFailTry] = useState<number>(0);
    const {token, user, setUserData} = useAuth()

    const ToogleVisibility = () => {
        setVisibility(visibility === "password" ? "text" : "password");
    }

    const login = async ({ email, password }: Cred) => {
        try{
            const response: AxiosResponse<IUserData> = await api.post('/sessions/login', {
                email,
                password,
            })
            setFailTry(0)
            return response.data;
        }catch(error){
            setFailTry(failTry + 1)
            console.log(error);
            return {} as IUserData;
        } 
    };

    const loginRequest = async (event: FormEvent) => {

        event.preventDefault();

        console.log(userPassword);
        console.log(userEMail);
        
        const {user, token} = await login({ email: userEMail, password: userPassword});

        if(user && token){ 
            setUserData( {user, token} )
            
            localStorage.setItem("@Piupiuwer:token", token);
            localStorage.setItem("@Piupiuwer:user", JSON.stringify(user));
            
            api.defaults.headers.authorization = `Bearer ${token}`
        }
        
    }

    return (
    <>
        <Container> 
            <img src={Logo} alt="PiuPiuwer"/>

            <form onSubmit={loginRequest}>
                
                <InputBonito name="email" placeholder="E-mail (Correio Eletrônico)" value={userEMail} onChange={e => setUserEMail(e.target.value)}/>
                
                <PasswordWrapper>
                    <InputBonito name="password" placeholder="Senha" type={visibility} value={userPassword} onChange={e => setUserPassword(e.target.value)}/>
                    <img src={visibility === "password" ? ShowPassword : HidePassword} alt="Mostrar Senha" onClick={ToogleVisibility}/>
                </PasswordWrapper>

                <ErrorMessage display={failTry !== 0}>
                    E-mail e/ou senha inválidos! {failTry > 2 ? " Tem ceterza que possui uma conta?" : ""}
                </ErrorMessage>

                <button type="submit">
                    Entrar
                </button>

            </form>

        </Container>
    </>
    );
}

export default Login;