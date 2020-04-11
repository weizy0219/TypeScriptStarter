/**
 * index.test.ts
 */

 import {hello} from '../src/index';

 test('hello world test',()=>{
     expect(hello('message')).toBe(true);
 })