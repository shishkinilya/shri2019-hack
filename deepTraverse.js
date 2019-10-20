function deepTraverse(tree) {
    console.log(tree.value);

    if (tree.children.length) {
        for (let node of tree.children) {
            deepTraverse(node);
        }
    };
}

deepTraverse({
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