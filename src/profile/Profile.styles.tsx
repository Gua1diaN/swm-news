import styled from 'styled-components';
import { PlusSvg } from '../assets/plus';

export const PageContainer = styled.div`
  padding: 30px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledContentContainer = styled(ContentContainer)`
  border-bottom: 1px solid #5e5e5e;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Headline = styled.div`
  font-family: MessinaSansWeb, Arial, sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
`;

export const StyledParagraph = styled.p`
  font-family: MessinaSansWeb, Arial, sans-serif;
  font-size: 16px;
  line-height: 16px;
`;

export const BoldByline = styled(StyledParagraph)`
  font-weight: 600;
  margin-bottom: 0;
`;

export const NormalByline = styled(StyledParagraph)`
  margin-bottom: 0;  
  font-style: italic;
`;

export const BoldTime = styled(StyledParagraph)`
  margin-top: 0;
`; 

export const NormalTime = styled(StyledParagraph)`
  margin-top: 0;  
  margin-left: 5px;
`;

export const PlusSvgTag = styled(PlusSvg)`
  height: 100%;
  width: 100%;
  display: flex;
  vertical-align: middle;
`;