const fs = require("fs");
const  path = require("path");
const { posts,users } = require("../../../common/db");

// let posts = [];
// let users = [];

// const createReadStream = fs.createReadStream(
//     path.resolve("src", "common","db","posts.json")
// )

// createReadStream.on("data",(chunk)=>{
//     posts = JSON.parse(chunk)
// });


// ///user
// const createReadStreamUser = fs.createReadStream(
//     path.resolve("src", "common","db","users.json")
// )

// createReadStreamUser.on("data",(chunk)=>{
//     users = JSON.parse(chunk)
// });

// module.exports = {
//     GET : async(req,res)=>{

//         const returnPosts = [];

//         posts.forEach((post)=>{

//         const returnPost = {};
//         const findUser = users.find((e)=> e.id == post.userId );
//         returnPost.user = findUser;
//         returnPost.id = posts.id;
//         returnPost.title = posts.title;
//         returnPost.body = posts.body;

//         // const writer = fs.createWriteStream(
//         //     path.resolve("src","common","db","returnPost.json")
//         // );

//         // await writer.write(JSON.stringify(returnPost));
//         returnPosts.push(returnPost);
//         })
//     console.log(returnPosts)
//     res.send(returnPosts);
//     }
// }


let posts;
let users;


const createRader = fs.createReadStream(
    path.resolve("src","comment", "db", "posts.json")
);

createRader.on("data", (chunk)=>{
    posts = JSON.parse(chunk);
});


const creatReaderUser = fs.createReadStream(
    path.resolve("src","comment", "db", "users.json")
);
creatReaderUser.on("data", (chunk)=>{
    users = JSON.parse(chunk);
});
// const createRaderFull = fs.createReadStream(
//     path.resolve("src", "db", "full.posts.json")
// );

// createRaderFull.on("data", (chunk)=>{
//     full_posts = JSON.stringify(chunk);
// });

module.exports = {
    GET: async (req, res)=>{
        // console.log("posts")
        // res.send(posts);
        const returnPosts = [];

        posts.forEach((post)=>{
            const returnPost = {};

            const foundUSer = users.find((e)=> e.id == post.userId)
        returnPost.user = foundUSer;
        returnPost.id = posts.id;
        returnPost.title = posts.title;
        returnPost.body = posts.body;

        returnPosts.push(returnPost);    
  });
           res.send(returnPosts);
   
    },
}