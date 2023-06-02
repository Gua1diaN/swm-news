import styled from 'styled-components';

export const StyledPage = styled.div<{ index: number}>`
    text-align: center;
    ${({ index }) => index > 0 && `
        margin-top: 20px;
    `}
`;

export const StyledText = styled.p`
    text-align: center;
`;