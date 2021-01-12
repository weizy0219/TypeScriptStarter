/**
 * This is a Typescript starter project_ [Project Web](https://github.com/weizy0219/TypeScriptStarter)
 */

console.log(HelloToSomeone('World'));


/**
 * @param name  The name that you want to say hello to.
 * @returns  A string of 'Hello' and the name you want to say hello to
 * 
 * 
 * example
 * ```typescript
 * const returnValue=HellotoSomeone('Liyan');
 * ```
 */

function HelloToSomeone(name:string):string{
    return `Hello ${name}`;
}