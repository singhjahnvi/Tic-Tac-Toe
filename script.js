var header = document.querySelector("#head");

function colorChanger(){
    var letters = "0123456789ABCDEF";
    var color = "#"
    for (var i = 0; i < 6; i++){
        color+= letters[Math.floor(Math.random()*16)];
        //Math.random()*16: it will generate a random integer between 0 to 15.999...
        //Math.floor(Math.random()*16): will generate a random interger between 0 to 15 which will act as an index for the string letters[].
        //letters[Math.floor(Math.random()*16)]: will select an element from "0123456789ABCDEF" according to the random index generated
        //This process will repeat 6 times to generate a color code.
    }
    return color;
}

function randomColor(){
    var inputColor = colorChanger();
    header.style.color = inputColor;
}

setInterval("randomColor()", 200)



var re = document.querySelector("#b")

var squares = document.querySelectorAll("td")

function clearBoard(){
    for(var i=0; i<squares.length; i++){
        squares[i].textContent = "";
    }
}

re.addEventListener('click',clearBoard);

function changeMake()
{
    if (this.textContent === '')
    {
        this.textContent = 'X';
    }
    else if (this.textContent === 'X')
    {
        this.textContent = 'O';
    }
    else
    {
        this.textContent = '';
    }
}

for(var i=0; i<squares.length; i++)
{
    squares[i].addEventListener('click', changeMake);
}

/*for (var i = 0; i < squares.length; i++)
{
    squares[i].addEventListener("click", function()
    {
        this.textContent = "X";
    })
    squares[i].addEventListener("dblclick", function()
    {
        this.textContent = "O";
    })
}
*/
