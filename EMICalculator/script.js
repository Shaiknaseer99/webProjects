const principal=document.getElementById("loan-amount");
const interest=document.getElementById("interest-rate");
const tenure=document.getElementById("months-pay");
const calculate=document.getElementById("cal-btn");
const emi=document.getElementById("amount");


// the function is to calculate the emi
function calculateEMI()
{
    if(principal.value ==='' ||interest.value==='' ||tenure.value===''){
        alert("please fill all the fields");
        return;
    }
    else{
        const p=principal.value;
        const r=(interest.value)/1200;
        const n=tenure.value;
        
        const emiValue=(p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
        emi.textContent=emiValue.toFixed(2);
        
    }
}
calculate.addEventListener('click',calculateEMI);

