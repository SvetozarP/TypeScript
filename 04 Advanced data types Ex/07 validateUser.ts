type User = {
    id: number | string,
    username: string,
    passwordHash: string | string[],
    status: 'Locked' | 'Unlocked' | 'Deleted',
    email?: string
}

// function isUser(user: any): user is User {
//     return (
//         typeof user === 'object' &&
//         user !== null &&
//         (
//             (typeof user.id === 'number' && user.id > 100) ||
//             (typeof user.id === 'string' && user.id.length === 14)
//         ) &&
//         typeof user.username === 'string' &&
//         (
//             (typeof user.passwordHash === 'string' && user.passwordHash.length === 20) ||
//             (
//                 Array.isArray(user.passwordHash) &&
//                 user.passwordHash.length === 4 &&
//                 user.passwordHash.every((k: string) => typeof k === 'string' && k.length === 8)
//             )
//         ) &&
//         ['Locked', 'Unlocked'].includes(user.status) &&
//         (typeof user.email === 'string' || typeof user.email === 'undefined')
//     );
// };


function isUser(user: any): user is User {
    if (typeof user !== 'object' || user === null) return false;

    const { id, username, passwordHash, status, email } = user;

    const validId = (typeof id === 'number' && id > 100) ||
                    (typeof id === 'string' && id.length === 14);

    const validUsername = (typeof username === 'string' && username.length >= 5 && username.length <= 10)

    const validPasswordHash =
        (typeof passwordHash === 'string' && passwordHash.length === 20) ||
        (Array.isArray(passwordHash) &&
         passwordHash.length === 4 &&
         passwordHash.every((k: unknown) => typeof k === 'string' && k.length === 8));

    const validStatus = ['Locked', 'Unlocked'].includes(status);

    const validEmail = typeof email === 'undefined' || typeof email === 'string';

    return validId &&
           validUsername &&
           validPasswordHash &&
           validStatus &&
           validEmail;
}

console.log(isUser({ id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' })); // false
console.log(isUser({ id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' })); // true
console.log(isUser({ id: '20', username: 'testing', passwordHash: '123456-123456-123456', status:'Deleted', email: 'something' })); // false
console.log(isUser({ id: 255, username: 'Pesho', passwordHash: ['asdf1245', 'qrqweggw', '123-4567', '98765432'], status: 'Locked', email: 'something' })); // true
console.log(isUser({ id: 'qwwe-azfg-ey38', username: 'Someone', passwordHash: ['qwezz8jg', 'asdg-444','12-34-56'], status: 'Unlocked' })); // false
console.log(isUser({ id: 1344, username: 'wow123', passwordHash: '123456-123456-1234567', status: 'Locked', email: 'something@abv.bg' })); // false