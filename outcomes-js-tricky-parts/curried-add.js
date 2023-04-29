function curriedAdd(total) {

    function add(num) {
        if (num === undefined) {
            return total;
        } else {
            total += num;
            return add;
        }
    }

    return add;
}

module.exports = { curriedAdd };
