var btn=document.querySelector("#btn");

btn.addEventListener('click',()=>{
    document.querySelector('#btn').style.cssText="background-color:crimson;color:white;";
});

btn.addEventListener('click',()=>{
   console.log("Button Clicked.....");
});