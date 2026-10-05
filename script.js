
document.getElementById("colorButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightyellow";
});


document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        document.getElementById("message").innerHTML =
        "You pressed the SPACEBAR!";
    }
});


document.getElementById("box").addEventListener("mouseover", function() {
    document.getElementById("box").style.backgroundColor = "pink";
});

document.getElementById("box").addEventListener("mouseout", function() {
    document.getElementById("box").style.backgroundColor = "lightblue";
});