import React from 'react';
import styled from 'styled-components';
import background from '../../assets/bg.png';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as Mail} from '../../assets/mail.svg';
import {ReactComponent as File} from '../../assets/file-text.svg';

const Container = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F15454;
    background-image: url(${background});
    position: relative; 
`;

const Title = styled.h1`
    color: #fdfdfd;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 25px;
`;

const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 25px;
    display: flex;
    flex-direction: column;
`;

const Link = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
    align-self: flex-end;
`;

const TextWrapper = styled.section`
    height: 65%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    font-size: 22px;
    font-weight: 400;
`;
const Panel = () => {

    return(
        <Container>
            <Logo />
            <TextWrapper>
                <Title>Administration panel</Title>
                <p>
                    For further information, you can check the documentation about how to use this interface.
                    If you prefer, contact the administrator.
                </p>
            </TextWrapper>
            <Footer>
                <Link>
                    <File />
                    <a href="./v3/api-docs">Documentation</a>
                </Link>
                <Link>
                    <Mail />
                    <a href="mailto:jf.melo6@gmail.com">Contact the administrator</a>
                </Link>
            </Footer>
        </Container>
    );
}

export default Panel;