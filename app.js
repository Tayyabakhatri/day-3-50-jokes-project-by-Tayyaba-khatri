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
        joke: "joke 1"
    },
    {
        joke: "joke 2"
    },
    {
        joke: "joke 3"
    },
    {
        joke: "joke 4"
    }
]
let index = 0


function showJokes(){
    let jokeDiv = document.getElementById("joke");
    // for(let key of jokes){
        console.log(key)
        jokeDiv.innerHTML=jokes[index].joke
    // }

showJokes()

}
let nextBtn = document.getElementById("btn")
nextBtn.addEventListener('click',()=>{
    index=(index+1)%jokes.length
    showJokes()
})
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




// let jokes = [
//     { joke: "joke 1" },
//     { joke: "joke 2" },
//     { joke: "joke 3" },
//     { joke: "joke 4" }
// ];

// let index = 0;

// function showJokes() {
//     let jokeDiv = document.getElementById("joke");
//     jokeDiv.innerHTML = jokes[index].joke; // Display the joke at the current index
// }

// showJokes(); // Show the first joke initially

// let nextBtn = document.getElementById("btn");
// nextBtn.addEventListener('click', () => {
//     index = (index + 1) % jokes.length; // Increment index and wrap around if it exceeds array length
//     showJokes(); // Display the next joke
// });

