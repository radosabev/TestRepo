function food(input) {
    let word = input;
    switch (word) {
        case 'banana':
        case 'apple':
            return 'fruit'
            break;
        case 'tomato':
        case 'apple':
            return 'vegetable';
            break;
        case 'salt':
            return 'seasoning'
            break;
        default:
            return 'unknown';
    }
}

console.log(food('tomato'));
