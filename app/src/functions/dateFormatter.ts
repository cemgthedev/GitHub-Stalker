export function getDate(localDateTimeInString: string): string {
    const date = new Date(localDateTimeInString);
    const formattedData = date.toLocaleString('pt-br', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    return formattedData;
}

export function getTime(localDateTimeInString: string): string {
    const time = new Date(localDateTimeInString);
    const formattedTime = time.toLocaleString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    return formattedTime;
}