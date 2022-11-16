function computeloan(){
var amount=document.getElementById('amount').value;
var interestrate=document.getElementById('interest_rate').value;
var months=document.getElementById('months').value;
var interest=(amount*(interestrate*0.01)/months)
var payment=(amount/months)+ interest;

document.getElementById('payment').innerHTML="Aylıq Ödəniş: AZN"+payment.toFixed(2)+"<br>Faiz:AZN "+interest.toFixed(2);

var totalpayment=0;
for(i=0; i<months;i++){
    totalpayment=+totalpayment+payment;
}
document.getElementById('totalpayment').innerHTML="Ümümi Ödəniləcək Məbləğ:AZN"+totalpayment.toFixed(2);
}
function Catch(){
    var button=document.getElementById('btn');
    button.style.left =(Math.random()*1000 + "px");
    button.style.top =(Math.random()*500 + "px");
}