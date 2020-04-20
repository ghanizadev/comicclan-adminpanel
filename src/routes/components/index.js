import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 40px;
    width: 275px;
    border: 2px solid #F15454;
    background-color: transparent;
    border-radius: 5px;
    padding: 5px;
    margin: 8px 0;
    display: flex;
`;

const TextInput = styled.input`
    flex: 1;
    margin-left: 5px;
    border: none;
    background-color: transparent;
`;

export const Input = props => {

    return(
        <Container>
            <TextInput {...props} />
        </Container>
    );
}

export const Button = styled.button`
    height: 40px;
    width: 275px;
    border: none;
    color: #fdfdfd;
    background-color: #F15454;
    border-radius: 5px;
    margin: 8px 0;
`;