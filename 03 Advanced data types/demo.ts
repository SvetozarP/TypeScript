// Union type - function takes either string or array
function printGreeting(text: string | string[]): void {
    if (typeof text === 'string') {
        console.log(text);
    } else {
        console.log(text.join(' '));
        
    }
}

printGreeting('Hello');
printGreeting(['Hello', 'its', 'me']);

// Intersection type - object has both properties
function showContact(contactPerson: {name: string} & {email: string}) {
    return contactPerson;
}

let contactPerson: {name: string} & {email: string} = {
    name: 'Someone',
    email: 'foo@bar.com'
}

console.log(showContact(contactPerson));
