function printGreeting(text: string | string[]): void {
    if (typeof text === 'string') {
        console.log(text);
    } else {
        console.log(text.join(' '));
        
    }
}

printGreeting('Hello');
printGreeting(['Hello', 'its', 'me']);