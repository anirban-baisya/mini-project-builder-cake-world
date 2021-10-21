/*Fill your code */
var layer = 0;
var total = 0;
var choctotal=0;
var strawtotal=0;
var buttertotal=0;
var vannilatotal=0;
var redveltotal=0;
var layer1  = document.getElementById('layer1');
var layer2  = document.getElementById('layer2');
var layer3  = document.getElementById('layer3');
var layer4  = document.getElementById('layer4');
var layer5  = document.getElementById('layer5');
var candle  = document.getElementById('candle');
var chocbtn = document.getElementById('Chocolatebtn');
var strawbtn = document.getElementById('Strawberrybtn');
var butterbtn = document.getElementById('Butterscotchbtn');
var vannilabtn = document.getElementById('Vannilabtn');
var redvelbtn = document.getElementById('Redvelvetbtn');
var buybttn = document.getElementById('buybtn');


chocbtn.onclick=function()
{
    layer++
    choctotal+=300;
    document.getElementById('chocolateBill').innerHTML = 'Chocolate -----------'+choctotal;
    total=total+300;

    switch (layer) {
        case 1:
            layer1.style.visibility="visible";
        layer1.style.background='rgb(65,14,14)';
            break;
        case 2:
            layer2.style.visibility="visible";
        layer2.style.background='rgb(65,14,14)';
            break;
        case 3:
            layer3.style.visibility="visible";
        layer3.style.background='rgb(65,14,14)';
            break;
        case 4:
            layer4.style.visibility="visible";
        layer4.style.background='rgb(65,14,14)';
            break;
        case 5:
            layer5.style.visibility="visible";
        layer5.style.background='rgb(65,14,14)';
            break;
    
        default:
            alert("Sorry....u can not add more then 5 layer!")
            break;
    }

    // if(layer<=5)
    // document.getElementById('chocolateBill').innerHTML = 'Chocolate -----------'+choctotal;
}



strawbtn.onclick=function()
{
    layer++
    strawtotal+=100;
    document.getElementById('strawberryBill').innerHTML = 'Strawberry -----------'+strawtotal;
    total=total+100;

    switch (layer) {
        case 1:
            layer1.style.visibility="visible";
        layer1.style.background='rgb(240,75,103)';
            break;
        case 2:
            layer2.style.visibility="visible";
        layer2.style.background='rgb(240,75,103)';
            break;
        case 3:
            layer3.style.visibility="visible";
        layer3.style.background='rgb(240,75,103)';
            break;
        case 4:
            layer4.style.visibility="visible";
        layer4.style.background='rgb(240,75,103)';
            break;
        case 5:
            layer5.style.background='rgb(240,75,103)';
            layer5.style.visibility="visible";
            break;
    
        default:
            alert("Sorry....u can not add more then 5 layer!")
            break;
    }

    if(layer<=5)
    document.getElementById('strawberryBill').innerHTML = 'Strawberry -------- '+strawtotal;
}





butterbtn.onclick=function()
{
    layer++
    buttertotal+=200;
    document.getElementById('butterscotchBill').innerHTML = 'Butterscotch -----------'+buttertotal, 
    total=total+200;

    switch (layer) {
        case 1:
            layer1.style.visibility="visible";
        layer1.style.background='rgb(255, 242, 128)';
            break;
        case 2:
            layer2.style.visibility="visible";
        layer2.style.background='rgb(255, 242, 128)';
            break;
        case 3:
            layer3.style.visibility="visible";
        layer3.style.background='rgb(255, 242, 128)';
            break;
        case 4:
            layer4.style.visibility="visible";
        layer4.style.background='rgb(255, 242, 128)';
            break;
        case 5:
            layer5.style.visibility="visible";
        layer5.style.background='rgb(255, 242, 128)';
            break;
    
        default:
            alert("Sorry....u can not add more then 5 layer!")
            break;
    }

    if(layer<=5)
    document.getElementById('butterscotchBill').innerHTML = 'Butterscotch ----- '+buttertotal;
}




vannilabtn.onclick=function()
{
    layer++
    vannilatotal+=250;
    document.getElementById('vannilaBill').innerHTML = 'Vannila ---------------- '+vannilatotal;
    total=total+250;

    switch (layer) {
        case 1:
            layer1.style.visibility="visible";
        layer1.style.background='rgb(243,229,171)';
            break;
        case 2:
            layer2.style.visibility="visible";
        layer2.style.background='rgb(243,229,171)';
            break;
        case 3:
            layer3.style.visibility="visible";
        layer3.style.background='rgb(243,229,171)';
            break;
        case 4:
            layer4.style.visibility="visible";
        layer4.style.background='rgb(243,229,171)';
            break;
        case 5:
            layer5.style.visibility="visible";
        layer5.style.background='rgb(243,229,171)';
            break;
    
        default:
            alert("Sorry....u can not add more then 5 layer!")
            break;
    }

    if(layer<=5)
    document.getElementById('vannilaBill').innerHTML = 'Vannila ---------------- '+vannilatotal;
}





redvelbtn.onclick=function()
{
    layer++
    redveltotal+=350;
    document.getElementById('redvelvetBill').innerHTML = 'Redvelvet ----------- '+redveltotal;
    total=total+350;

    switch (layer) {
        case 1:
            layer1.style.visibility="visible";
        layer1.style.background='rgb(147,63,51)';
            break;
        case 2:
            layer2.style.visibility="visible";
        layer2.style.background='rgb(147,63,51)';
            break;
        case 3:
            layer3.style.visibility="visible";
        layer3.style.background='rgb(147,63,51)';
            break;
        case 4:
            layer4.style.visibility="visible";
        layer4.style.background='rgb(147,63,51)';
            break;
        case 5:
            layer5.style.visibility="visible";
        layer5.style.background='rgb(147,63,51)';
            break;
    
        default:
            alert("Sorry....u can not add more then 5 layer!")
            break;
    }

    if(layer<=5)
    document.getElementById('redvelvetBill').innerHTML = 'Redvelvet ----------- '+redveltotal;
}





buybttn.onclick=function()
{
    candle.style.visibility= 'visible';
    document.getElementById('total').innerHTML = 'Total ----------- '+total; 
    buybttn.value='PAY: '+total;
}