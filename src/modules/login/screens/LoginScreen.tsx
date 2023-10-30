import Input from "../../../shared/inputs/input/Input";
import Button from "../../../shared/inputs/input/buttons/button/button";
import { BackgroundImage, ContainerLogin, LogoImage, LimitedContainer, ContainerLoginScreen, TitleLogin } from "../styles/LoginScreen.styles";

const LoginScreen = () => {

    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.jpg" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logoKM.png" />
                    <TitleLogin level={2}>LOGIN</TitleLogin>
                    <Input title="USUÁRIO" />
                    <Input title="SENHA" />
                    <Button margin="32px 0px 16px 0px" type="primary">ENTRAR</Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>);
};

export default LoginScreen;