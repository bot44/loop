'use strict';

const Promise = require('any-promise');

function loop(fn, times) {
    if (typeof fn != 'function') {
        return Promise.reject(new TypeError('Loop fn must be a function!'));
    }

    let i = 0;
    let next = function (done) {
        if (times > 0) {
            if (++i > times) {
                done();
                return;
            }
        }

        try {
            Promise.resolve(fn()).then(() => next(done), done);
        } catch (err) {
            done(err);
        }
    };

    return new Promise((resolve, reject) => {
        next((err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

module.exports = loop;
