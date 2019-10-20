function widthTraverse(tree) {
    const queue = [tree];

    while (queue.length) {
        const node = queue.shift();
        
        console.log(node.value);

        if (node.children.length) {
            queue.push(...node.children);
        }
    }
}

widthTraverse({
    value: 7,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 4,
                    children: []
                },
                {
                    value: 3,
                    children: [
                        {
                            value: 5,
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            value: 6,
            children: [
                {
                    value: 1,
                    children: []
                }
            ]
        },
        {
            value: 8,
            children: []
        }
    ]
});