const inpValue = document.querySelector('#input-section');
const output=document.querySelector('#res');
inpValue.addEventListener('input',()=>
{
    const input = inpValue.value;
    const out = input*2.2;
    output.innerText=out.toFixed(2);
})