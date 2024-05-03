const textarea=document.querySelector('#textarea');
const count = document.querySelector('#count');
const output = document.querySelector('#output-display');
count.addEventListener('click',()=>{

    const input=textarea.value;
    let count = 0 ;
    if(input.length==0)
    {
        output.innerText="Please enter some text";

    }
    else{

        for(let i=0; i<input.length; i++)
       {
        if(input[i]==='a' || input[i]==='e' || input[i]==='o' || input[i]==='i' || input[i]==='u')
        {
             count++;
        }
       }
        output.innerText=`The number of vowels in the input text is ${count}`;
    }
});
