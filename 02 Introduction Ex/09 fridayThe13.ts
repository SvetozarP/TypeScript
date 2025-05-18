function friday13(arg: unknown[]): void {

    enum months {
        January,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December
    };

    for (const element of arg) {
        if ( element instanceof Date ) {
            const montDay = element.getDate();
            const weeklyDay = element.getDay();
            const month = element.getMonth();
            const year = element.getFullYear();

            if (montDay === 13 && weeklyDay === 5) {
                console.log(`${montDay}-${months[month]}-${year}`);
                
            }
        }
    }
}


friday13(
    [
    {},
    new Date(2025, 4, 13),
    null,
    new Date(2025, 5, 13),
    '13-09-2023',
    new Date(2025, 6, 13),
]

)