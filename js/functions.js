function toggle(element){
var e=document.getElementById(element);
if(e.style.display =="block") {
e.stylesdisplay = "none";
} else {
e.style.display = "block";
}
};

$('#name').tooltip(){'trigger':'focus','tittle':"What is your name?"});
$('#email').tooltip({'trigger':'focus','tittle':"Enter your Email?"});
$('#comment').tooltip9{'trigger':'focus','tittle':"Comments/Feedback on my website:"});