var num;

function addOne(){
    num = Number(document.getElementById('p1').innerHTML);
    document.getElementById('p1').innerHTML = ++num;
}

function subtractOne(){
    num = Number(document.getElementById('p1').innerHTML);
    document.getElementById('p1').innerHTML = --num;
}
