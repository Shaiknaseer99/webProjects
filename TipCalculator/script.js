const bill=document.querySelector('#bill-amount');
const tip=document.querySelector('#tip-percentage');
const amount  = document.querySelector('#amount');
const calculate=document.querySelector('#btn');
console.log(bill,tip);
//this function calculates tip based on bill amount and tip percentage
 function calculateTip()
 {
    const billvalue = bill.value ;
    const tipvalue=tip.value ;

     const tipAmount=billvalue*tipvalue/100;
     amount.textContent = tipAmount.toFixed(2);

     
 }
 calculate.addEventListener('click',calculateTip);
