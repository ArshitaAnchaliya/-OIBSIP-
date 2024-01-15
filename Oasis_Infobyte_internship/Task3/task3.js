let btn=document.querySelector('button');

btn.onclick=()=>{

    var num = Number(document.querySelector('#inputvalue').value);
    console.log(num);

var type = document.querySelector('#conversionvalue').value;

var far;
var cel;
var kcel;

if (type === 'Fahrenheit') {
    ftocelcius(num);
    let c = ftocelcius(num);
    c = c.toFixed(4);

    document.querySelector('#resultval').value = c + '\u00B0C';
}

else if (type === 'Celcius') {
     let f = ctofahrenhiet(num);
    document.querySelector('#resultval').value = f + '\u00B0F';
}




function ftocelcius(num) {

    cel = (num - 32) * 5 / 9;
    return cel;

}


function ctofahrenhiet(num){
    far = (num*9/5)+32;
    return far;
}


}


