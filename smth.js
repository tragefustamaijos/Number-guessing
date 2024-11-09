const _mini = document.getElementById("mini");
const _maxi = document.getElementById("maxi");
const _sumbit = document.getElementById("submit");
const _toate = document.getElementById("toate");
const _text = document.getElementById("text");
const _guessing = document.getElementById("guessing");
const _input = document.getElementById("input");
const _retry = document.getElementById("retry");
const _attempt = document.getElementById("attempt");

_input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      _attempt.click();
    }
})

_maxi.addEventListener("keypress", function(event){
    if(event.key == "Enter")
    {
        event.preventDefault();
        _sumbit.click();
    }
})

let answer;
let min;
let max;
let cnt;

function attempts()
{
    cnt++;
    let userinput = Number(_input.value);
    _input.value = "none";
    if(userinput < min || userinput > max)
         _text.textContent = "You got to enter a valid number";
    else
    if(userinput < answer)
        _text.textContent = "Go higher";
    else
    if(userinput > answer)
        _text.textContent = "Go lower";
    else
        if(userinput  == answer)
        {
            _text.textContent = `CORRECT! The answer is ${answer}. You guessed it in ${cnt} attempts.`
            _retry.style.display = "block"
        }
    console.log(userinput);
    console.log(max)
}

function ready()
{
    min = Number(_mini.value);
    max = Number(_maxi.value);
    console.log(min + " " + max);
    if(min > max)
        {
            _text.textContent = "Your moron! Your min is bigger than your max. Try again";
            return;
        }
    if(max - min <= 5)
    {
        _text.textContent = `That would be too easy. Choose a larger interval`;
        return;
    }
    _text.textContent = "";
    _toate.style.display = "none";
    _guessing.style.display = "block"
    answer = Math.floor(Math.random() * (max - min + 1) + min);
    cnt = 0;
}

_retry.onclick = function(){
    location.reload();
}

function f()
{

}