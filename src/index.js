exports.min = function min(array) {
    array = typeof array !== "undefined" ? array : [];
    return array.length ? Math.min(...array) : 0;
};

exports.max = function max(array) {
    array = typeof array !== "undefined" ? array : [];
    return array.length ? Math.max(...array) : 0;
};

exports.avg = function avg(array) {
    array = typeof array !== "undefined" ? array : [];
    if (array.length) {
        let total = array.reduce((sum, num) => sum + num);
        return total / array.length;
    } else {
        return 0;
    }
};
