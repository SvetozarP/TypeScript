function reverseDayOfWeek(dayName: string): void {

    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    };

    console.log(Days[dayName as keyof typeof Days] || 'error'); // Reverse lookup in Enum object
    

}

reverseDayOfWeek('Monday')