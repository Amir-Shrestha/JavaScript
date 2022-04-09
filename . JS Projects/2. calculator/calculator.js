// let power = "x"+"n".sup();
// document.getElementById("power").innerHTML = power

document.getElementById("power").innerHTML = "x<sup>n</sup>"

function click_key(val){
    document.getElementById('input-view').value += String(val);
}

function clear_all(){
    document.getElementById('input-view').value='';
}

function back_slash(){
    let exp_str = document.getElementById('input-view').value;
    document.getElementById('input-view').value=String(exp_str).slice(0, -1);
}

function result(){
    let expression = document.getElementById('input-view').value;
    document.getElementById('input-view').value=eval(expression);
    console.log(expression)
}

