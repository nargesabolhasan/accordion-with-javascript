const wraper=document.querySelector(".wraper")
wraper.addEventListener("click",e=>{
//    console.log(e.target.className,e.className,e, e.target.tagName,e.target.matches('.wraper'))
   if(e.target.matches('h3')){
    e.target.nextElementSibling.classList.toggle("open")
   }
})
