import { ComponentType } from 'react';

/** A component which takes the same props as a DOM element with the given tag-name. */
export type TagLike<T extends ValidTagNames> = ComponentType<TagProps<T>>;

/** The props accepted by a DOM element with the given tag-name. */
export type TagProps<T extends ValidTagNames> = JSX.IntrinsicElements[T];

type ValidTagNames = keyof JSX.IntrinsicElements;
