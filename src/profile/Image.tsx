import React from 'react';
import {
    StyledPage,
    StyledText
} from './Image.styles';

type Blocks = {
    captionText?: string,
    url?: string
    index: number,
}

export const Image = ({ captionText, url, index }: Blocks) => {
    return (
        <StyledPage data-testid={`image-item-${index}`} index={index}>
            <img src={url} alt={captionText} width='600'/>
            <StyledText>{captionText}</StyledText>
        </StyledPage>
    );
}