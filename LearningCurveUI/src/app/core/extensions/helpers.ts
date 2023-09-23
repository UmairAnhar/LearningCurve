import * as moment from 'moment';

export function isArrayEmpty(obj: any) {
    return obj.length == 0 ? true : false;
}

export function isZero(obj: any) {
    return obj == 0 ? true : false;
}

export function isNull(obj: any) {
    return obj == null ? true : false;
}

export function isUndefined(obj: any) {
    return obj == undefined ? true : false;
}

export function isEmpty(obj: any) {
    return obj == '' ? true : false;
}

export function convertDateToUtc(date: Date | string): string {
    if (!date)
        return '';

    let currentdate = new Date();
    let formattedDate = new Date(date);
    formattedDate.setHours(currentdate.getHours());
    formattedDate.setMinutes(currentdate.getMinutes());
    formattedDate.setSeconds(currentdate.getSeconds());
    let utcDate = moment(formattedDate).utc().format("YYYY-MM-DDTHH:mm:ssZZ");
    return utcDate;
}

export function convertOnlyDate(date: Date | string): string {
    if (!date)
        return '';

    let currentdate = new Date();
    let formattedDate = new Date(date);
    formattedDate.setHours(currentdate.getHours());
    formattedDate.setMinutes(currentdate.getMinutes());
    formattedDate.setSeconds(currentdate.getSeconds());
    let utcDate = moment(formattedDate).utc().format("YYYY-MM-DD");
    return utcDate;
}


export function dataURItoBlob(dataURI: string) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
}