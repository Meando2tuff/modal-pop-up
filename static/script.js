document.addEventListener('DOMContentLoaded' , () =>{
    let modal = document.getElementById("")
    let open = document.getElementById("")
    let close= document.getElementById("")


    open.addEventListener("click", () =>{
        modal.style.display = 'block' ;
    } )
} )
close.addEventListener("click", () =>{
    modal.style.display = 'none' ;
} )
window.addEventListener("click" , (event) =>{ 
    if( event.target == modal ){
        modal.style.display = 'none' ;
    }

})


