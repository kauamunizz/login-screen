import { BackgroundImage, ContainerLogin, LogoImage, LimitedContainer, ContainerLoginScreen } from "../styles/LoginScreen.styles";

const LoginScreen = () => {

    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.jpg" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logoKM.png" />
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>);
};

export default LoginScreen;