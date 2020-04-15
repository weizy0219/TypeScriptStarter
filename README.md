[English](./README.md)  |  [中文文档](./README_ZH.md)
# TypeScriptStarter
A TypeScript Starter Project to build basic scaffold and implement different functions original from javascript

## 1. General
This project's object is to set up basic typescript development enviroment with necessary packages, so as to help developers quickly start project coding.
The purpose of basic functions includes :
- [x] Basic typescript project scaffold with project structure and typescript, ts-node and @types/node packages.
- [x] Docs generation functions with typedoc and @vamship/grunt-typedoc packages.
- [x] Less package with additional setup to generate css files.
- [x] Grunt automation toolbox with necessary packages (which might be replaced with gulp? in the future, and additional functions to be added) 
- [x] Use Eslint with AlloyTeam EsLint file for code link functions
- [x] Jest/Jasmine test enviroment developement enviroment
- [ ] Electron desktop application developement enviroment
- [ ] nodejs and express basic web developement enviroment 
- [ ] mongoose and mysql database development enviroment
  
The `helloworld` branch is intend to cover most of above functions except web development and database, which will be divided into independent branches.

## 2. How to start

The project is build with VS Code, and it is strongly recommanded to install `TypeScript Hero` 
- clone current project and run `npm install` under root dir
- Run `grunt` to start compile and watch
- Run `npm run test` to use jest to test code
- See `package.json` and `Gruntfile.js` for detailed command

Some scaffold initial sample as following, you can follow the steps to start your own project:
1. To compile typescript and initialize a project
![scaffold1](./img/scaffold1.gif)

2. To setup the project file structure of a project:
![scaffold2](./img/scaffold2.gif)

3. To setup and use grunt
![scaffold3](./img/scaffold3_grunt.gif)

4. To setup and use Eslint
   
Typescript use ESlint for code lint officially, and a typescript-eslint project is build for this purpose, so it is best to use ESLint.

```bash
npm install --save-dev eslint
npm install --save-dev typescript @typescript-eslint/parser
npm install --save-dev @typescript-eslint/eslint-plugin

#it is to recommanded to use Alloy teem ESLint purpose or you can set up your own
npm install --save-dev eslint-config-alloy
```
See `.eslintrc.js` file in root directory for detailed configuration.



## 3. Functions

## 4. Brunches
