import React from 'react';
import {
    StyledPage,
    ContentContainer,
    TextWrap,
    TitleWrap
} from './Quote.styles';
import { Blocks } from '../types';

export const Quote = ({ text, attribution, index }: Partial<Blocks>) => {
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