type charInput = {
    code: 200 | 301 | 201,
    text: string,
};

type charInputParam = {
    code: 400 | 404 | 500,
    text: string,
    printChars?: number
};

function returnHTTPcode(HTinput: charInput | charInputParam): void {
    switch (HTinput.code) {
        case 200:
        case 201:
        case 301: console.log(HTinput.text); return;
        case 400:
        case 404:
        case 500: console.log(HTinput.text.slice(0, HTinput.printChars ? HTinput.printChars : HTinput.text.length));
        
        
    }
}

returnHTTPcode({ code: 200, text: 'OK' });
returnHTTPcode({ code: 201, text: 'Created'});
returnHTTPcode({ code: 400, text: 'Bad Request', printChars: 4});
returnHTTPcode({ code: 404, text: 'Not Found'});
returnHTTPcode({ code: 404, text: 'Not Found', printChars: 3});
returnHTTPcode({ code: 500, text: 'Internal Server Error', printChars: 1});
returnHTTPcode({ code: 500, text: 'Internal Server Error'});