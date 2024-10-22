let jokes = [
    {
        joke: "ایک خاتون نے دوسری خاتون سے پو چھا۔”جنت میں مردوں کو تو حوریں ملیں گی مگر عورتوں کو کیا ملے گا؟“ ”یہی اپنے اپنے خاوند۔“ دوسری عورت نے جواب میں بتایا۔ پہلی عورت نے یہ سنا تو تلخی سے بولی۔”دفع کرو پھر مرنے کا کیا فائدہ۔“"
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


function showJokes() {
    let jokeDiv = document.getElementById("joke");
    jokeDiv.className="jokeFont"
    jokeDiv.innerHTML = jokes[index].joke
}
showJokes()
let nextBtn = document.getElementById("btn")
nextBtn.addEventListener('click', () => {
    index = (index + 1) % jokes.length
    showJokes()
})

