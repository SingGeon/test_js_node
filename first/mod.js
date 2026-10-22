// Modules - Encaptuslated Code (only share minimum)
//CommenJS, every file in node is a module (by default)

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alter')
console.log(data)
require('./mind')


sayHi('susan')
sayHi(names.jhone)
sayHi(names.peter)