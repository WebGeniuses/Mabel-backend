require("dotenv").config()

const {env}= require("process")
module.exports = {
    PORT_USER: env.PORT_USER || 3500,
    PORT_ADMIN: env.PORT_ADMIN ||4500
};