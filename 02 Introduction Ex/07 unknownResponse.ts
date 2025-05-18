function unknwonResponse(arg: unknown): string {
    if ('value' in (arg as any) && typeof (arg as any).value === 'string') {
        return (arg as any).value
    } else {
        return '-'
    }
}

console.log(unknwonResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log(unknwonResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));

