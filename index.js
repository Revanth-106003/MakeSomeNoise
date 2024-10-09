var buttons=document.querySelectorAll("button");

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function (event) {
        var buttonInnerHtml=event.target.innerHTML;
        makeSound(buttonInnerHtml);
    });
}
document.addEventListener("keypress",function(e){
    makeSound(e.key);
});
function makeSound(key) {
    key = key.trim().toLowerCase();
    switch (key) {
        case 'r':
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case 'e':
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        case 'v':
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        case 'a':
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
        case 'n':
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break;
        case 't':
            var snare = new Audio("snare.mp3");
            snare.play();
            break;
        case 'h':
            var crash = new Audio("crash.mp3");
            crash.play();
            break;
        default:
            console.log("press Any button and enjoy some Music ");
            break;
    }
}