import React from 'react';
import {
    StyledPage,
    ContentContainer,
    TextWrap,
    TitleWrap
} from './Quote.styles';

type Blocks = {
    text?: string,
    attribution?: string,
    index?: number
}

export const Quote = ({ text, attribution, index }: Blocks) => {
    return (
        <StyledPage data-testid={`quote-item-${index}`}>
            <ContentContainer>
                <TitleWrap>
                    {text}
                </TitleWrap>
                <TextWrap>
                    {attribution}
                </TextWrap>
            </ContentContainer>
        </StyledPage>
    );
}