import { Observable,of, from } from 'rxjs';
import { RedisClient } from 'redis';

// 使用from可以从数组生成源并消费
let obser=from([1,2,3,4]);

obser.subscribe({
    next(item){
        console.log(item);
    },
    error(err){
        console.log(err);
    },
    complete(){
        console.log('First Observable Done');
    }
})


// 自定义生成源
let obser2 = new Observable<string>(productor =>{
    productor.next('hello');
    productor.next('world');
    setTimeout(()=>{
        productor.next('After 1 Sec');
        productor.complete();
    },1000);
});

obser2.subscribe({
    next(item){
        console.log(item);
    },
    error(err){
        console.log(err);
    },
    complete(){
        console.log('Second Observable Done');
    }
});

// 使用redis

let redis = new RedisClient({
    host:"localhost",
    port:6379
});

redis.set('name','tom',(err,res)=>{
    if(!err){
        redis.get('name',(err,res)=>{
            console.log(res);
        });
    }
});

