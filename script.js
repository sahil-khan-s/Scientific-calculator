function insert(num){
    document.form1.textview.value=document.form1.textview.value+num;
}


// function equal(){
//     var exp = document.form1.textview.value;
//     if (exp)
//     {
//         document.form1.textview.value=eval(exp)
//     }
// }
function equal(){
    // var exp = document.form1.textview.value;
    let x =document.form1.textview.value;
    let y;
    try {
      y = eval(x)
    } catch (error) {
      alert("Syntax error");
      return;
    }
    document.form1.textview.value = y ;
}



function backspace(){
    var exp = document.form1.textview.value;
    document.form1.textview.value = exp.substring(0,exp.length - 1);
}
function square() {
	form1.textview.value = eval(form1.textview.value) * eval(form1.textview.value)
}
function sqrt() {
	form1.textview.value = Math.sqrt(form1.textview.value);
}
function tan() {
	form1.textview.value = Math.tan(form1.textview.value);
}
function sin() {
	form1.textview.value = Math.sin(form1.textview.value);
}
function cos() {
	form1.textview.value = Math.cos(form1.textview.value);
}
function ln() {
	form1.textview.value = Math.log(form1.textview.value);
}

// function add() {
//  var add =form1.textview.value;
//  if(add.length>2){
//     alert("U can't add Two operators")
//  }
// }

// function minus() {
// //  var minus =document.getElementById('minuss').value
// var minus = form1.textview.value;
//  if(minus.length>2){
//     alert("U can't subtract Two operators");
//  }
// console.log(minus)

// }


