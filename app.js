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

async function abc() {
    try {

        let awai = await fetch('https://www.urdupoint.com/kids/category/jokes')
        if(!awai.ok){
            throw new Error('Network response was not OK');
        }
        const data = await awai.json()
        console.log(data)
        let joke = document.getElementById('joke')
        joke.innerHTML = data.message
} catch(error) {
        console.error('Error:', error);
    }
}
let btn = document.getElementById('btn')
btn.addEventListener("click",abc)


