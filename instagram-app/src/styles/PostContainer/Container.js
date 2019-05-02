import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    margin-top: 4%;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #DBDBDB;
    border-radius: 5px;
    font-family: "Roboto";
    font-size: 1.4rem;
    background: white;

    :last-child {
        margin-bottom: 4%;
    }
`;

export default Container;
