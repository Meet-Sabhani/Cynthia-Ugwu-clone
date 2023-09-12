// let menu = document.getElementById("manu")

// menu.addEventListener("click",function(){
//     menu.innerHTML = "<h4>home</h4><h4>about</h4><h4>Serises</h4><h4>Contect</h4>"
// })

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function MouseFollower(){
    window.addEventListener("mousemove",function(dets){
        this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}

MouseFollower(); 

let elem = document.querySelectorAll(".elem")
let elemimg = document.querySelectorAll(".elem img")

elem.forEach(function(val){
    // console.log(val)
    val.addEventListener("mouseenter",(function(){
        val.childNodes[1].style.opacity = 1;        
        // console.log(val.childNodes)
    }));
    val.addEventListener("mouseleave",function(){
        val.childNodes[1].style.opacity = 0;
    });
    val.addEventListener("mousemove",function(dets){
        val.childNodes[1].style.left = dets.x+"px";

        // val.childNodes[1].style.top = dets.y+"px";
    })
})