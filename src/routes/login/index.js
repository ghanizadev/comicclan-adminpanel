import React from 'react';
import styled from 'styled-components';
import Form from './form';
import Panel from './panel';
import {credentials} from '../../services/login';

const Container = styled.div`
    background-color: #333;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
`;

const Login = () => {

    return(
        <Container>
            <Panel />
            <Form onLogin={async data => {
                await credentials(data)
                .then(() => window.alert('Success!'))
                .catch(() => window.alert('fail'));
            }}/>
        </Container>
    );
}

export default Login;