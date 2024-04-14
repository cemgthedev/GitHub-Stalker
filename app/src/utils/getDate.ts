export function getDate(localDateTimeInString: string): string {
    const date = new Date(localDateTimeInString);
    const formattedData = date.toLocaleString('pt-br', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    return formattedData;
}