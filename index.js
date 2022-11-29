import unzipper from "unzipper"
import fs, { createReadStream } from "fs"
import { S3Client, PutObjectCommand, CompleteMultipartUploadCommand } from "@aws-sdk/client-s3";
import AWS from 'aws-sdk'
import { s3Client } from "./s3Client.js";
// import extractZip from "extract-zip"
// import { setTimeout } from "timers/promises";
// import { on } from "events";
import stream from "stream";
import { unlink } from "fs";
import { json } from "express";


const s3 = new AWS.S3()

const arr = []


async function main(){

//  await readZipFile()
 await uploadFile()

}



async function readZipFile(){

//   fs.createReadStream('./uploadWgene.zip')
//   .pipe(unzipper.Parse())
//   .pipe(stream.Transform({
//     objectMode: true,
//     transform: function(entry,e,cb) {
//       const fileName = entry.path;
//       const na = fileName.split('/pub2/')[1]
//       const type = entry.type; // 'Directory' or 'File'
//       const size = entry.vars.uncompressedSize; // There is also compressedSize;
//       if (type === 'File') {
//         console.log(fileName)
//         async function up(){
//             arr.push(entry.path)
//             console.log(arr)
//         //   entry.pipe(fs.createWriteStream('output/'+na))
//         //   .on('finish', cb)
//         //   .on('finish', async function(){
//         //   await  uploadFile('output/'+na)
//         // arr.push(na)
//         // console.log(arr)
//         //   })
          
//         }
//         up()
      

            
          

//       } else {
//         entry.autodrain();
//         cb();
//       }
//     }
//   }
// ))
  

const uu = await unzipper.Open.file('./uploadWgene.zip')
const file = uu.files
console.log(file.length)
fs.appendFileSync('./ik.js', '[')
for(let i = 0; i < file.length; i++){
  const na = file[i].path.split('/pub2/')[1]
  console.log(file[i].path)
  if(file[i].type === 'File'){
fs.appendFileSync('./ik.js',`{"path": "${file[i].path}"},`)
} else{

}
}
fs.appendFileSync('./ik.js', ']')

// fs.createReadStream('./uploadWgene.zip')
//     .pipe(unzipper.Parse())
//     .on('entry', async function (entry) {
//         const fileName = entry.path;
//         const na = fileName.split('/pub2/')[1]
//         const type = entry.type; // 'Directory' or 'File'
//         const size = entry.vars.uncompressedSize; // There is also compressedSize;
//         if (type === 'File') {
//            console.log(fileName)
//         } else {
//             console.log(fileName)
//             entry.autodrain();
//         }   
//     })





//   fs.createReadStream('./uploadWgene.zip')
//   .pipe(unzipper.Parse())
//   .on('entry', function (entry) {
//     console.log(entry)
//     const fileName = entry.path;
//     const type = entry.type; // 'Directory' or 'File'
//     const size = entry.vars.uncompressedSize; // There is also compressedSize;
//     const na = fileName.split('pub2/')[1]
//     console.log(entry.path)
//     if(entry.type === 'File'){
 
//     if (fileName.slice(fileName.length - 2) == 'json') {     
//       console.log(fileName + "-----> " + type + "---->" + size)
//      async function saveIt(){
//       console.log('saving It')
//       await entry.pipe(fs.createWriteStream('output/' + na).on('finish', async function(){
//         console.log('saved')
//         await uploadFile('output/'+na)

//       }))
//       return 'output/'+na
//     }  
//     saveIt()
    


// }} else {
//   entry.autodrain();
// }
//   }
//   )
}


async function GetList(){
    fs.readFile('ik.js','utf8', (err, data) => {
    if (err) throw err;
    console.log(data.length);
    // console.log(data)
    return data
  });
}


async function uploadFile(nu){

  fs.readFile('ik.json','utf8', async (err, data) => {
    if (err) throw err;
    // console.log(data)
    // const dg = await JSON.stringify(data)
    const ll = await JSON.parse(data)
    //  console.log(ll[0])


    // ll.forEach(element => {
    //   console.log(element.path)
    // });

for(let i = 0; i < ll.length; i++){
    // console.log(JSON.stringify(ll[i]))
uploadF(ll[i].path)

}
console.log(ll.length)
  });

  // for(let i = 0; i < lis.length; i++){
  //   console.log(lis[i])
    
  // }

async function uploadF(path){
console.log(path)
fs.createReadStream('uploadWgene.zip')
  .pipe(unzipper.ParseOne())
  .pipe(fs.createReadStream('temp/'+path));
  const zip = fs.createReadStream('uploadWgene.zip').pipe(unzipper.Parse({forceStream: true}));
  // for await (const entry of zip) {
  //   const fileName = entry.path;
  //   const type = entry.type; // 'Directory' or 'File'
  //   const size = entry.vars.uncompressedSize; // There is also compressedSize;
  //   const nu = path.split('/')[this.length - 1]
  //   console.log(nu)
  //   if (fileName === path) {
  //     entry.pipe(fs.createWriteStream('temp/' + nu));
  //     entry.autodrain();
  //   } else {
  //     entry.autodrain();
  //   }
  // }
}

//  fs.createReadStream(path).on('open', async function(data){
//   console.log(data)
  
  console.log(nu)
  // await  s3Client.send(new PutObjectCommand({
  //   Body: fs.createReadStream(nu),
  //   Bucket: 'wgene',
  //   Key: 'upload/js/'+nu,
    
  // })).then(Response =>{
  //   if(Response.$metadata.httpStatusCode === 200){
  //     console.log(
  //       "Successfully created "
  //   )
  //   unlink(nu, (err) => {
  //     if (err) throw err;
  //     console.log(nu+' was deleted');
  //   });
  // // fs.unlinkSync(nu)
   
  //   }
  // })
   


}







main()