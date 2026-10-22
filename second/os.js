// OS module provides a few basic operating-system related utility functions
const os = require('os')

// info about current user
const user = os.userInfo()


// method returns the system uptime in seconds
console.log(`The system uptime is  ${os.uptime()} seconds`)

const cuurentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(cuurentOS)