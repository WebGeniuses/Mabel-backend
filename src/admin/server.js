const server = require("./modules/index")
const {PORT_ADMIN}= require("../../config/config")

server.listen(PORT_ADMIN, console.log("http://localhost:"+PORT_ADMIN+"/posts"))