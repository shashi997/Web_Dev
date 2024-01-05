
// click on h1/html/anything it will give message of this
document.querySelector("li").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

const myImg = document.querySelector("img");
// anonymous function change image on click 
myImg.onclick = () => {
    const mySrc = myImg.getAttribute("src");
    if (mySrc === "images/red-and-orange-galaxy.jpg") {
        myImg.setAttribute("src", "images/galaxy-star.jpg");
    }
    else {
        myImg.setAttribute("src", "images/red-and-orange-galaxy.jpg");
    }
}


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }
    else{
        localStorage.setItem("name", myName);
        myHeading.textContent = "Space is Cool, "+ myName ;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = "Space is Cool, " + storedName ;
}

myButton.onclick = () => {
    setUserName();
}