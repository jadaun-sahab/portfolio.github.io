let v= document.getElementById("uls")
v.style.display="none"

function menutoggle(){
    if(v.style.display=="none"){
        v.style.display="block"
    }
    else{
        v.style.display="none"
    }
}
// ------------------------------------------------------------------

let viewmore =document.getElementById("morep");
let na=document.getElementById("more");
viewmore.style.display="none"
function showmore(){
    if(viewmore.style.display=="none"){
       na.innerText="View Less"
        viewmore.style.display="block";
    }
    else{
        na.innerText="View More"
        viewmore.style.display="none"
    }
}