for(var i=0;i<=6;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        play(this.innerHTML)
        buttonAddAnimation(this.innerHTML);
        setColorWhite(this.innerHTML)
    })
}
function play(key)
{
    switch(key)
        {
            case 'w':
                var audio = new Audio("/sounds/tom-1.mp3");
                audio.play();
                break;
            case 'a':
                var audio = new Audio('/sounds/tom-2.mp3');
                audio.play();

                break;
            case 's':
                var audio = new Audio('/sounds/tom-3.mp3');
                audio.play();

                break;
            case 'd':
                var audio = new Audio('/sounds/tom-4.mp3')    
                audio.play();
                break;
            case 'j':
                var audio = new Audio('/sounds/snare.mp3')    
                audio.play();
                break;
            case 'k':
                var audio = new Audio('/sounds/crash.mp3')    
                audio.play();  
                break;
            case 'l':
                var audio = new Audio('/sounds/kick-bass.mp3')    
                audio.play();      
                break;
        }
}
document.addEventListener("keydown",function (event){
play(event.key)
buttonAddAnimation(event.key)
setColorWhite(event.key)
})
function buttonAddAnimation(key)
{
   var active = document.querySelector("."+key);
   active.classList.add("pressed");
   setTimeout(function(){active.classList.remove("pressed")},100)
}


function setColorWhite(key)
{
    var active = document.querySelector("."+key);
    active.style.color = "white"
    setTimeout(function(){active.style.color="#DA0463"},100)
}