import React from 'react';
import styled, { css } from "styled-components";

const BoldText = styled.p`
    font-weight: bold;
    font-size: 14px;

    ${props =>
        props.title &&
        css`
            font-size: 16px;
        `};
`;

export default BoldText;
