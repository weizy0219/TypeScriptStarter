/**
 * This is a TypeScript Starter project
 * which contains basic less style compile, grunt and jsDoc
 * @param {msg} userName
 * @returns a boolean result which always true
 */


export  function hello(msg:string){
    console.log(`hello ${msg}`);
    return true;
}

hello('world');