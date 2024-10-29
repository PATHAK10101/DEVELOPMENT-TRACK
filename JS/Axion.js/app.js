// let btn = document.querySelector("button");
// btn.addEventListener("click", async()=>{
//     try{
//         let res = await axios.get(url);
//         console.log(res);
//         let p = document.querySelector("#result_2");
//         p.innerText = res.data;
//     }
//     catch(e){
//         let p = document.querySelector("#result_2");
//         p.innerText = "NOT FOUND ANY DATA";
//     }
// })

// let url = "https://cat-fact.herokuapp.com/facts";




//Activity using string query


let url="https://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);

    let collArr =await getcollege(country);
    Show(collArr);
});

function Show(collArr){
    let list = document.querySelector("#list");
    list.innerHTML="";
    for(col of collArr){
        console.log(col.name);
        let li =document.createElement("li");
        li.innerText = col.name;
        list.append(li);
    }

}

async function getcollege(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(e){
        console.log(e);
        return "something went wrong";
    }
    
}
