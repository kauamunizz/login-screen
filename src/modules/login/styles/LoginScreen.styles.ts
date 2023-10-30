import styled from 'styled-components';
import { Space, Typography } from 'antd';

const { Title } = Typography;

export const BackgroundImage = styled.img`
    position: absolute;    
    left: -320px;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
`;

export const LogoImage = styled.img`
    width: 280px;
`;

export const TitleLogin = styled(Title)`
    color: #006397 !important;
`

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    width: 100%;
    /* height: 100vh; */
    max-width: 646px;
    right: 0;
    top: 0;
    padding: 22px;
`;

export const ContainerLoginScreen = styled.div`
    display: flex;
    justify-content: right;
    width: 100%;
    height: 100vh;
`;

export const LimitedContainer = styled.div`
    width: 100%;
    max-width: 498px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;