const celsius=document.querySelector('#celsius')
const kelvin=document.querySelector('#kelvin')
const fahrenheit=document.querySelector('#fahreinheit');
celsius.addEventListener('input',()=>
{
    // this function convert the celsius to kelvin and fahrenheit
    const celsiusValue=celsius.value;
    const kelvinValue=parseFloat(celsiusValue)+273.15;
    const fahrenheitValue=parseFloat(celsiusValue)*(9/5)+32;
    kelvin.value=kelvinValue.toFixed(2);
    fahrenheit.value=fahrenheitValue.toFixed(2);
    console.log("the celsius value is : ", celsiusValue);

})
kelvin.addEventListener('input',()=>
{
    // this function convert the kelvin to celsius and fahrenheit
    const kelvinValue=kelvin.value;
    const celsiusValue=parseFloat(kelvinValue)-273.15;
    const fahrenheitValue=parseFloat(kelvinValue)*(9/5)-459.67;
    celsius.value=celsiusValue.toFixed(2);
    fahrenheit.value=fahrenheitValue.toFixed(2);
})

fahrenheit.addEventListener('input',()=>
{
    // this function convert the fahrenheit to celsius and kelvin
    const fahrenheitValue=fahrenheit.value;
    const celsiusValue=(parseFloat(fahrenheitValue)-32)*(5/9);
    const kelvinValue=(parseFloat(fahrenheitValue)+459.67)*(5/9);
    celsius.value=celsiusValue.toFixed(2);
    kelvin.value=kelvinValue.toFixed(2);
})