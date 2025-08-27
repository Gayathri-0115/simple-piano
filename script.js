var key_btn = document.querySelectorAll(".key")

for (let i = 0; i < key_btn.length; i++) {

    key_btn[i].addEventListener("click", function () {
        var index=i+1;
        var audio = new Audio(`./Keys-in-piano/key${index}.mp3`);
        audio.play();
    })
    
}

var key_btn = document.querySelectorAll(".key")

for (let i = 0; i < key_btn.length; i++) {

    key_btn[i].addEventListener("mouseover", function () {
        var index=i+1;
        var audio = new Audio(`./Keys-in-piano/key${index}.mp3`);
        audio.play();        
    })
    
}

var keys={
    "a":"1",
    "s":"2",
    "d":"3",
    "f":"4",
    "g":"5",
    "h":"6",
    "j":"7",
    "k":"8",
}

document.addEventListener("keydown",function(e){
    var press=e.key;
    console.log(keys[press]);
    var audio=new Audio("./Keys-in-Piano/key"+keys[press]+".mp3");
    audio.play() ;  
})
