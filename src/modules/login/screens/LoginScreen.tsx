import axios from "axios";

import { useState } from "react";
import Input from "../../../shared/inputs/input/Input";
import Button from "../../../shared/inputs/input/buttons/button/button";
import { BackgroundImage, ContainerLogin, LogoImage, LimitedContainer, ContainerLoginScreen, TitleLogin } from "../styles/LoginScreen.styles";

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {

        const returbObject = axios({
            method: "post",
            url: "/user/12345",
            data: {
                firstName: "Fred",
                lastName: "Flintstone",
            },
        });
        alert(`login: ${username}, senha: ${password}`)
    }

    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.jpg" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logoKM.png" />
                    <TitleLogin level={2}>LOGIN</TitleLogin>
                    <Input title="USUÁRIO:" margin="32px 0px 0px" onChange={handleUsername} value={username} />
                    <Input type="password" title="SENHA:" margin="32px 0px 0px" onChange={handlePassword} value={password} />
                    <Button margin="64px 0px 16px 0px" type="primary" onClick={handleLogin}>ENTRAR</Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>);
};

export default LoginScreen;