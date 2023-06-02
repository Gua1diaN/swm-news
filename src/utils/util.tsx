import React from 'react';
import { cloneElement, ReactElement } from 'react';
import { TagLike } from './TagLike';

export const formatDate = (dateAndTime: string | undefined): string | undefined => {
    if (!dateAndTime) {
        return undefined;
    }
    // enum weekdayType {
    //     short = "short",
    //     long = "long",
    //     narrow = "narrow"
    // }
    // enum numericType {
    //     numeric = 'numeric',
    //     twoDigit = '2-digit'
    // }
    const newDate = new Date(dateAndTime);
    // const options = { weekday: weekdayType['short'], year: numericType['numeric'], month: weekdayType['long'], day: numericType['numeric'] };
    // const dateTimeFormat = new Intl.DateTimeFormat('en-GB', options);
    // const result = dateTimeFormat.format(newDate);

    const date = newDate.getDate();
    const day = newDate.getDay();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    const hours = newDate.getHours() > 9 ? newDate.getHours() : ('0' + newDate.getHours());
    const minutes = newDate.getMinutes() > 9 ? newDate.getMinutes() : ('0' + newDate.getMinutes());
    const weekdaysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const amOrPm = newDate.getHours() > 11 ? 'PM' : 'AM';
    const result = weekdaysArray[day] + ', ' + date + ' ' + monthsArray[month] + ' ' + year + ' ' + hours + ':' + minutes + amOrPm;
    return result;
}



/**
 * @returns a component which wraps an SVG element and forwards all props to it
 */
export const wrapSvg = (template: ReactElement): TagLike<'svg'> => props =>
  cloneElement(template, props);