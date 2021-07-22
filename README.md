# Project name

#### Brief description

Multiples of 3 and 5:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

1. Loop through all numbers from 0 to 999. Increase +1
2. Requirement for each (number % 5 === 0) || (number % 3 === 0) 
3. If number answers requirement, add to Final Sum.

function(num)

function(10) === function(9) + one more number 

function(4) => 3
function(5) => 3
function(6) => 3, 5
function(7) => 3, 5, 6
function(8) => 3, 5, 6
function(9) => 3, 5, 6
function(10) => 3, 5, 6, 9

#### By Shannon Lee

#### _Table of Contents_

1. [Description](#description)
2. [Technologies Used](#technologies)
3. [Setup/Installation Requirements](#setup)
4. [Additional Setup/Installation Note for Windows Users](#windows)
5. [Specifications](#specs)
6. [Known Bugs](#bugs)
7. [License](#license)
8. [Contact Information](#contact)


## Description <a id="description"></a>

Description here

## Technologies Used <a id="technologies"></a>

* _Babel/core 7.6.4_
* _Babel/plugin-transform-modules-commonjs 7.6.0_
* _Bootstrap 4.5.0_
* _clean-webpack-plugin 3.0.0_
* _CSS_
* _css-loader 3.2.0_
* _eslint 6.3.0_
* _eslint-loader 3.0.0_
* _file-loader 1.1.6_
* _HTML5_
* _html-loader 0.5.5_
* _html-webpack-plugin 3.2.0_
* _JavaScript ES6_
* _Jest 24.9.0_
* _jQuery 3.5.1_
* _Node Package Manager 6.14.9_
* _popper.js 1.16.1_
* _style-loader 1.0.0_
* _webpack 4.39.3_
* _webpack-cli 3.3.8_
* _webpack-dev-server 3.11.2_

## Setup/Installation Requirements <a id="setup"></a>

Setup requirements
* Make sure [Node.js](https://nodejs.org/en/) and [Node Package Manager (npm)](https://www.npmjs.com/) are set up on your local machine. If not, follow the installation guide [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js).
* This environment was created on a Mac OS. If you are on a non Mac machine, make the following change to package.json
  * change line 8 to `"start": "npm run build & webpack-dev-server --open --mode development",`

Installation
* 

## Specifications <a id="specs"></a>

Please refer to `test directory` for a comprehensive breakdown of all specs for this project. All tests were run through Jest.

## Known Bugs <a id="bugs"></a>
* Any bugs go here

## License <a id="license"></a>
*[MIT](https://choosealicense.com/licenses/mit/)*

Copyright (c) 2021 Shannon Lee

## Contact Information <a id="contact"></a>
**_Shannon Lee [mailto](mailto:shannonleehj@gmail.com)_**