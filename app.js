// userName = "tayyaba"
// let key = "id"
// let obj = {
//     userName,
//     [key]: 9
// }
// console.log(obj)
// async function abc() {
//     try {
//       const response = await fetch('https://www.wix.com');
//       console.log(response);  // Will not contain useful information
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
//   }
//   abc();
let jokes = [
    {
        joke1: "joke 1"
    },
    {
        joke2: "joke 2"
    },
    {
        joke3: "joke 3"
    },
    {
        joke4: "joke 4"
    }
]
let index = 0


function showJokes(){
    let jokeDiv = document.getElementById("joke");
    // console.log(oneByOne)
    for(let key of jokes){
        console.log(key)
        jokeDiv.innerHTML=jokes[index]
    }
    // jokes.forEach((joke,()=>{
    //     let oneByOne = jokes[index]
    //     jokeDiv.innerHTML=oneByOne
    // }))
}
showJokes()
let nextBtn = document.getElementById("btn")
nextBtn.addEventListener('click',showJokes)

// async function abc() {
//     let index=0
//     try {
//         let jokeDiv=document.getElementById("joke");
//         let oneByOne = jokes[index]
//         console.log(oneByOne)

// let awai = await fetch('https://www.urdupoint.com/kids/category/jokes')
// if (!awai.ok) {
//     throw new Error('Network response was not OK');
// }
// const data = await awai.json()
// console.log(data)
// let joke = document.getElementById('joke')
// joke.innerHTML = data.message
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
// let btn = document.getElementById('btn')
// btn.addEventListener("click", abc)


