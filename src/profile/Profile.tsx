import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { 
    PageContainer,
    ContentContainer,
    Headline,
    Row,
    BoldByline,
    BoldTime,
    NormalByline,
    NormalTime,
    PlusSvgTag,
    StyledContentContainer,
} from './Profile.styles';
import { Header } from './Header';
import { Article } from './Article';
import { Image } from './Image';
import { Quote } from './Quote';
import { formatDate } from '../utils/util';

export const Profile = () => {
    const url = "http://localhost:8000/news";

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

    const [newsContent, setNewsContent] = useState<Props>();
    const getNewsData = () => {
        axios.get(url)
          .then((response) => setNewsContent(response.data))
          .catch((error) => console.log(error));
    }

    useEffect(() => {
        getNewsData();
    }, []);

    return (
        <>
            {
                newsContent ? 
                    <PageContainer data-testid="whole-article">
                        <StyledContentContainer>
                            <Header newsContent={newsContent} />
                        </StyledContentContainer>
                        <ContentContainer>
                            {
                                newsContent?.blocks?.map( (block, index) => {
                                    if (block.kind === 'text') {
                                        return (
                                            <Article text={block.text} intentions={block.intentions} key={block.text} index={index} />
                                        );
                                    } else if (block.kind === 'image') {
                                        return (
                                            <Image captionText={block.captionText} url={block.url} key={block.captionText} index={index} />
                                        );
                                    } else if (block.kind === 'pull-quote') {
                                        return (
                                            <Quote text={block.text} attribution={block.attribution} key={block.attribution} index={index} />
                                        );
                                    }
                                    return null;
                                })
                            }
                        </ContentContainer>
                    </PageContainer>
                : null
            }
        </>
    );
}