const path = require("path")
const fs = require("fs")

let users =[];
const creatReader = fs.createReadStream(
    path.resolve("src","common","db", "users.json")
);

creatReader.on("data",(chunk)=>{
    users = JSON.parse(chunk);
});


module.exports = {
   CREAT : async (req, res)=>{
    //    const { name, title,body, isAdmin, login, Parol} = req.body;
        const  NewUser = req.body;
        NewUser.id = users[users.length - 1].id + 1;

        console.log(users)

        users.push(NewUser);

        const writer = fs.createWriteStream(
            path.resolve("src","common","db","users.json")
        );

        await writer.write(JSON.stringify(users));
        res.send(users);
    },
};