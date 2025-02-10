// set up the counter 

// const { is } = require("jsdom/lib/jsdom/living/generated/Blob");

let counterValue= 0;
let isPaused = false 
let interValid ;

function startTimer(){
    interValid = setInterval(() => {
        if(!isPaused){
            counterValue ++;
            document.getElementById("counter").textContent = counterValue;
        }
    },1000);
}

// Create the function to increment or decrement the counter 

document.getElementById("Plus").addEventListener("click",() => {
    if(!isPaused){
        counterValue++;
        document.getElementById("counter").textContent = counterValue
    }
})

document.getElementById("minus").addEventListener("click",() => {
    if(!isPaused){
        counterValue--;
        document.getElementById("counter").textContent = counterValue
    }
})
 
const likes = {}

document.getElementById("heart").addEventListener("click", () => {
    if(!isPaused){
        if(likes[counterValue]){
            likes[counterValue]++;
        }
        else {
            likes[counterValue] = 1;
        }
    
    const likesList = document.querySelector(".likes")
    const existingLikes = document.querySelector(`like-${counterValue}`)

    if(existingLikes){
        existingLikes.textContent = `${counterValue} has been liked ${likes[counterValue]} times`
    }
    else{
        const newLike = document.createElement("li")
        newLike.id = `like-${counterValue}`
        newLike.textContent = `${counterValue} has been liked ${likes[counterValue]} }`
        likesList.appendChild(newLike)
    }
}
})

//pause and resume the counter
document.getElementById("Pause").addEventListener("click",() => {
    isPaused = !isPaused;
    const buttons  = document.querySelectorAll("button:not(#Pause)")
    buttons.forEach(button => {
        button.disabled = isPaused;
    })
    document.getElementById("Pause").textContent = isPaused ? "resume" : "Pause"
    if(!isPaused){
        startTimer()
    }else {
        clearInterval(interValid)
    }
})

// Add comments and append them to the DOM

document.getElementById("comment-form").addEventListener("submit", (event) => {
    event.preventDefault()
    const commentInput = document.getElementById("comment-input")
    const commentText = commentInput.value.trim();

    if(commentText){
        const commentDiv = document.createElement("div")
        commentDiv.textContent = commentText
        document.getElementById("list").appendChild(commentDiv)
        commentInput.value = "";
    }
})

document.addEventListener('DOMContentLoaded',startTimer)