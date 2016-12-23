function loop(fn, times) {
    if (typeof fn != 'function') {
        throw new TypeError('fn must be a function!');
    }

    let i = 0;
    let next = function () {
        if (times > 0) {
            if (++i > times) {
                return;
            }
        }

        return Promise.resolve(fn()).then(next);
    }

    return next();
}

module.exports = loop;
