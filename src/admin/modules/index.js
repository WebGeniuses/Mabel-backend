const express = require("express")
const server =express()
///rout
const AdminRout = require("./users/route")

///middleware
server.use(express.json())


server.use(AdminRout)

module.exports = server;