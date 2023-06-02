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
import { Props } from '../types';

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