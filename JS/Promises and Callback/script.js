//Setting Up Callbacks

// let h1 = document.querySelector("h1");
// function change_color(color, delay, nextcolorchange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextcolorchange) nextcolorchange();
//     }, delay);

//     change_color("green", 1000,()=>{
//         change_color("red", 1000, ()=>{
//             change_color("blue", 1000, ()=>{
//                 change_color("orange", 1000, ()=>{
//                     change_color("purple", 1000, ()=>{
//                         change_color("pink", 1000, ()=>{
//                             change_color("yellow", 1000, ()=>{
//                                 change_color("green", 1000, ()=>{
//                                     change_color("red", 1000);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// }                                                                                                

//Refactoring the above code with the help of Promises

let h1 = document.querySelector("h1");
function change_color(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed:");
        },delay);
    });
};


// change_color("red", 1000)
// .then(()=>{
//     console.log("Color change success:");
//     return change_color("blue", 1000);
// })
// .then(()=>{
//     console.log("Color change success:");
//     return change_color("orange", 1000);
// })

// .then(()=>{
//     console.log("Color change success:");
//     return change_color("purple", 1000);
// })

// .then(()=>{ 
//     console.log("Color change success:");
//     return change_color("pink", 1000);
// })

// .then(()=>{
//     console.log("Color change success:");
//     return change_color("yellow", 1000);
// })

// .then(()=>{
//     console.log("Color change success:");
//     return change_color("green", 1000);
// })


//Refactoring the code with Async and Await

async function color(){
    await change_color("red", 1000);
    await change_color("blue", 1000);
    await change_color("orange", 1000);
    await change_color("purple", 1000);
    await change_color("pink", 1000);
    await change_color("yellow", 1000);
    await change_color("green", 1000);
}





//Setting Up Promises

// function SbtoDb(data, success, failure){
//     let speed = Math.floor(Math.random()*10)+1;
//     if(speed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// SbtoDb("Maqsad", ()=>{
//     console.log("success");
//     SbtoDb("Maqsad 2", ()=>{
//         console.log("success2");},
//         ()=>{
//             console.log("failure2");
//         });
//     },
//     ()=>{
//         console.log("failure");
//     }
// );


//OPtimized Promise

// function SbtoDb(data){
//     return new Promise((resolve, reject)=>{
//         let speed = Math.floor(Math.random()*10)+1;
//         if(speed>4){
//             resolve("success:Strong connection");
//         }
//         else{
//             reject("failure:Weak connection");
//         }
//     });
// }

// //then() and catch() function  and Chaining in Promises

// SbtoDb("MAQSAD")
// .then(()=>{
//         console.log("SUCCESS");
//         return SbtoDb("MAQSAD 2");
//     })
// .then(()=>{
//         console.log("SUCCESS 2");
//         return SbtoDb("MAQSAD 3");
//     })
// .then(()=>{
//         console.log("SUCCESS 3");
//     })
    
// .catch(()=>{
//     console.log("FAILURE");
// });




