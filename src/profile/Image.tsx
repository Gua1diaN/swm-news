import React from 'react';
import {
    StyledPage,
    StyledText
} from './Image.styles';
import { Blocks } from '../types';


export const Image = ({ captionText, url, index }: Partial<Blocks>) => {
    return (
        <StyledPage data-testid={`image-item-${index}`} index={index ? index : 0}>
            <img src={url} alt={captionText} width='600'/>
            <StyledText>{captionText}</StyledText>
        </StyledPage>
    );
}