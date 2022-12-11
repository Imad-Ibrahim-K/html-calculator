function buttonclick(val){

document.getElementById("screenDisplay").value+=val;
  if(val=='clr'){
    document.getElementById("screenDisplay").value="";
  }
}
function equalButton(){
    var text=document.getElementById('screenDisplay').value
    var result=eval(text)
    document.getElementById('screenDisplay').value=result
}

