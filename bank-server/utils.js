const fs = require('fs');

new Promise((resolve, reject)=>{
    fs.readFile('./sample.txt', function (err, data){
        if(err){
            return reject(err);
        }
        resolve(data.toString());
    });
}).then(data=>{
    console.log("data",data);
    return new Promise((resolve, reject)=>{
        fs.writeFile('./sample2.txt', 'sample2 content', (err)=>{
            if(err){
                return reject(err);
            }
            resolve("Saved");
        })
    })
}).then(data=>{
    console.log("data",data);
    return new Promise((resolve, reject)=>{
        fs.appendFile('./sample2.txt', 'sample2 content', (err)=>{
            if(err){
                return reject(err);
            }
            resolve("Saved");
        })
    })
}).then(data=>{
    console.log("data",data);
    return new Promise((resolve, reject)=>{
        fs.stat('./sample.txt', function (err, data){
            if(err){
                return reject(err);
            }
            resolve(data);
        });
    })
}).then(data=>{
    console.log("data",data);
})
