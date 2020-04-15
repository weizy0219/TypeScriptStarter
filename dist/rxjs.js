"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var redis_1 = require("redis");
var obser = rxjs_1.from([1, 2, 3, 4]);
obser.subscribe({
    next: function (item) {
        console.log(item);
    },
    error: function (err) {
        console.log(err);
    },
    complete: function () {
        console.log('First Observable Done');
    }
});
var obser2 = new rxjs_1.Observable(function (productor) {
    productor.next('hello');
    productor.next('world');
    setTimeout(function () {
        productor.next('After 1 Sec');
        productor.complete();
    }, 1000);
});
obser2.subscribe({
    next: function (item) {
        console.log(item);
    },
    error: function (err) {
        console.log(err);
    },
    complete: function () {
        console.log('Second Observable Done');
    }
});
var redis = new redis_1.RedisClient({
    host: "localhost",
    port: 6379
});
redis.set('name', 'tom', function (err, res) {
    if (!err) {
        redis.get('name', function (err, res) {
            console.log(res);
        });
    }
});
//# sourceMappingURL=rxjs.js.map