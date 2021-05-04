var num=0;
document.addEventListener('DOMContentLoaded', ()=>{
    /*<button id="plus">+</button>
    <button id="minus">-</button>*/

    //Creation of <p>
    let divNum = document.getElementById('num');
    let n = document.createElement('p');
    let text = document.createTextNode('0');

    n.id = 'p1';
    n.appendChild(text);
    divNum.appendChild(n);

    //Creation of buttons
    let divBtn = document.getElementById('btn');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    
    btn1.innerHTML = '+';
    btn1.id = 'plus';
    divBtn.appendChild(btn1);

    btn2.innerHTML = '-';
    btn2.id = 'minus';
    divBtn.appendChild(btn2);

    btn1.addEventListener('click', addOne);
    btn2.addEventListener('click', subtractOne);

    
});


let addOne = ()=>{
    num = Number(document.getElementById('p1').innerHTML);
    document.getElementById('p1').innerHTML = ++num;
}

let subtractOne = ()=>{
    num = Number(document.getElementById('p1').innerHTML);
    document.getElementById('p1').innerHTML = --num;
}


