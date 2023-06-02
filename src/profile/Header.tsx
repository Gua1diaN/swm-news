import React from 'react';
import { 
    Headline,
    Row,
    BoldByline,
    BoldTime,
    NormalByline,
    NormalTime,
    PlusSvgTag,
} from './Profile.styles';
import { formatDate } from '../utils/util';

interface Intensions {
    index: number,
    kind: string,
    length: number
}

interface Blocks {
    kind: string,
    captionText?: string,
    text?: string,
    url?: string,
    attribution?: string,
    intentions?: Intensions[]
}

interface Props {
    headline: string,
    source: string,
    byline: string,
    publicationDate: string,
    blocks: Blocks[]
}

interface NewsContent {
    newsContent: Props
}

export const Header = ({newsContent}: NewsContent) => {

    return (
        <div data-testid="test-header">
            <Headline>{newsContent?.headline}</Headline>
            <Row>
                <BoldByline>{newsContent?.byline}</BoldByline>
                <NormalByline>, {newsContent?.source}</NormalByline>
            </Row>
            <Row>
                <BoldTime>{formatDate(newsContent?.publicationDate)}</BoldTime>
                <NormalTime><PlusSvgTag /></NormalTime>
            </Row>
        </div>
    );
} 