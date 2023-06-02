export interface Intensions {
    index: number,
    kind: string,
    length: number
}

export interface Blocks {
    kind: string,
    captionText?: string,
    text?: string,
    url?: string,
    attribution?: string,
    intentions?: Intensions[],
    index?: number
}

export interface Props {
    headline: string,
    source: string,
    byline: string,
    publicationDate: string,
    blocks: Blocks[]
}