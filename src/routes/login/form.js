import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Button } from '../components';

const Container = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

const Title = styled.h1`
    color: #F15454;
    align-self: flex-start;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 25px;
`;

const Form = ({ onLogin }) => {
    const [data, setData] = useState({});

    return(
        <Container>
            <FormContainer>
                <Title>Login</Title>
                <Input type="text" name="username" placeholder="Username" onChange={e => setData({...data, username: e.target.value})} />
                <Input type="password" name="password" placeholder="Password" onChange={e => setData({...data, password: e.target.value})} />
                <Button type="button" onClick={() => onLogin(data)}>Login</Button>
            </FormContainer>
        </Container>
    );
}

export default Form;