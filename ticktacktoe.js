//vanilla 
// var squares = document.querySelectorAll("td");
// var heyy = document.querySelector("#bt")
// heyy.addEventListener("click",ressy)
// var hey = document.querySelector("#b");
// hey.addEventListener("click",res); 
// function ressy(){
//     window.location.href = "https://www.google.com/"
// }

// function res(){
  
//     for(var i = 0;i < squares.length; i++){
//         squares[i].textContent = " " ;
//     }
   
// }

// function board(){
//     if(this.textContent==''){
//         this.textContent='X';
//     }
//     else if(this.textContent=='X'){
//         this.textContent='O';
//     }
//     else{
//         this.textContent='';
//     }
// }

// for(var i=0;i<squares.length;i++){
//     squares[i].addEventListener("click",board)
// }

//jquery

$('td').click(function(){
    if($(this).text() =='o'){
        $(this).text(" ") 
    }
    else {
        $(this).text("X")
    }
})
$('td').dblclick(function(){
    $(this).text("o")
})