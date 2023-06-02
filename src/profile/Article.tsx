import React, { useEffect, useState } from 'react';
import { StyledParagraph } from './Profile.styles';

interface Intensions {
    index: number,
    kind: string,
    length: number
}
type Blocks = {
    text?: string,
    intentions?: Intensions[],
    index?: number
}

export const Article = ({ text, intentions, index }: Blocks) => {

    const [finalText, setFinalText] = useState('');

    useEffect(() => {
        if (text && intentions) {
            let sortedIntentions = intentions.sort((a, b) => a.index - b.index);
            let specialResult = sortedIntentions.map((intention, index) => {
                if (intention.kind === 'emphasized') {
                    let end = intention.index + intention.length;
                    return ("<span style='font-weight:bold;'>" + text.slice(intention.index, end) + "</span>");
                } else if (intention.kind === 'important') {
                    let end = intention.index + intention.length;
                    return ("<span style='text-decoration: underline;color: #0341fc;'>" + text.slice(intention.index, end) + "</span>");
                } 
                return '';
            });
        
            let result = '';
            for(let i=0; i<sortedIntentions.length; i++) {
                if (i==0) {
                    result = result + text.slice(0, sortedIntentions[i].index) + specialResult[i] + text.slice(sortedIntentions[i].index + sortedIntentions[i].length, sortedIntentions[i+1].index);
                } else if (i === sortedIntentions.length - 1) {
                    result = result + specialResult[i] + text.slice(sortedIntentions[i].index + sortedIntentions[i].length);
                } else {
                    result = result + text.slice(sortedIntentions[i].index, sortedIntentions[i].index + sortedIntentions[i].length) + specialResult[i];
                }
            }
            setFinalText(result);
        }
    }, [text, intentions]);

        return (
            <>
                {
                    intentions && intentions.length > 0 ?
                        <div dangerouslySetInnerHTML={{__html: finalText}} data-testid={`article-item-${index}`}></div>:
                        <StyledParagraph data-testid={`article-item-${index}`}>{text}</StyledParagraph>
                }
            </>
        );
        
}