function timeConversion(s) {
    const timeParts = s.slice(0, -2).split(':'); 
    let hour = parseInt(timeParts[0]);
    const minutes = timeParts[1];
    const seconds = timeParts[2];
    const ampm = s.slice(-2); 

    if (ampm === 'PM') {
        if (hour !== 12) {
            hour += 12;
        }
    } else { 
        if (hour === 12) {
            hour = 0;
        }
    }

    const formattedHour = hour.toString().padStart(2, '0');

    return `${formattedHour}:${minutes}:${seconds}`;
}