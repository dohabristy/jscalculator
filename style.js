function DeleteMe(){
    document.getElementById("result-box").value = ""
}

function calculator (valueshow){
    document.getElementById("result-box").value += valueshow
}

function answer(){
    var a = document.getElementById("result-box").value;
    var b = eval(a);
    document.getElementById("result-box").value = b
}