function reverseLinkedList(list) {
    let current = list;
    let last = {
        value: current.value,
        next: null
    };
    let result = {};

    if (!current.next) return last;

    while (current.next) {
        current = current.next;
        result = {
            value: current.value,
            next: last
        }
        last = result;
    }

    return result;
}

const list1 = {
    value: 1,
    next: null
};
const list2 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
};

console.log(reverseLinkedList(list1));
console.log(reverseLinkedList(list2));
