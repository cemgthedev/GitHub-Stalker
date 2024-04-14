export function getTime(localDateTimeInString: string): string {
    const time = new Date(localDateTimeInString);
    const formattedTime = time.toLocaleString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    return formattedTime;
}