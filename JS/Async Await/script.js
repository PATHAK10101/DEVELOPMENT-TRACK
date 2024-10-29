// //Async and Awaits
// async function greet(){
//     return "hello";
// }


// async function greet(){
//     // throw 'error';          
// }
//                                                 //Automativcally add promises to the code
// greet()
// .then((result)=>{
//     console.log('Succeeded');
//     console.log(result)
// })

// .catch((err)=>{
//     console.log("error",err);
// })


//AWAIT KEYWORD

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
} 

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     console.log("done");
    
// }

//Handling Rejection

async function demo_2() {
    try{
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        console.log("done");
    }

    catch(err){
        console.log(err);
    }

    let num = 5;
    console.log(num);
}

