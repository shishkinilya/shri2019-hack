function checkBraces(str) {
    const stack = [];
    
    str.split('').forEach(brace => {
        // Если открывающаяся скобка
        if (/\{|\[|\(/.test(brace)) {
            stack.push(brace);
        } else {
            // Закрывающаяся скобка
            const stackBrace = stack.pop();
            if (stackBrace === '{' && brace !== '}') {
                return false;
            }
            if (stackBrace === '[' && brace !== ']') {
                return false;
            }
            if (stackBrace === '(' && brace !== ')') {
                return false;
            }
        }
    });

    return !stack.length;
}

console.log(checkBraces('{[()]}'));
console.log(checkBraces('{{}'));