// // event emitter example
// const { EventEmitter } = require('events');
// const eventEmitter =  new EventEmitter();

// eventEmitter.on('lunch', () => {
//     console.log('YUM')
// })

// eventEmitter.emit('lunch')



// // simple read file example
// const { readFile, readFileSync} = require('fs')

// const txt = readFileSync('./movies.txt', 'utf8')

// console.log(txt);

// console.log('Got movie text!')

// // non blocking read file example

// const { readFile, readFileSync} = require('fs')

// const txt = readFileSync('./movies.txt', 'utf8')
// readFile('./movies.txt', 'utf8', (err, ext) => {
//     console.log(txt)
// })

// console.log('this runs first cause its faster than reading a file!');

// // read file with promises, which are async and non blocking. produce cleaner code than using callbacks and have practically the same effect

// const { readFile } = require('fs').promises

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8')
// }

 // // modules

 // 1

 const movieModule = require('./movie-module')

//  console.log(myModule);

// 2
// const { readFile} = require('fs')
 
// const express = require('express')

// const app = express() ;

// app.get(    
//         '/',                         // url that user will navigate too
//         (request, response) => {     // callback function. params: request(users incoming data), response(your outgoing data)
//             //read html file from the file system and send to frontend

//             readFile('./index.html', 'utf8', (err, html) => {
//                 // here we have access to html so we send it to client

//                 // if some error occured, send error to client
//                 if (err) {
//                     response.status(500).send('sorry, out of order')
//                 }

//                 // if no error, send html to client
//                 response.send(html)
//             })

//         }) 
        

//     app.listen( process.env.PORT || 3000, () => console.log('App available at: http://localhost:3000')) 


//3 promise instead of callback

const { readFile } = require('fs').promises
 
const express = require('express')

const app = express() ;

app.use(express.static(__dirname + '/public'));

app.get(    
        '/',                         // url that user will navigate too
        async (request, response) => {     // callback function. params: request(users incoming data), response(your outgoing data)
            //read html file from the file system and send to frontend

            response.send(  await readFile('./index.html', 'utf8') )

        }) 
        

app.listen( process.env.PORT || 3000, () => console.log('App available at: http://localhost:3000')) 