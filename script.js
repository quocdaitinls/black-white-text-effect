var pointer=document.querySelector(".pointer");
pointer.addEventListener("mousemove", function(e) {
    pointer.style.top=e.pageY + "px";
    pointer.style.left=e.pageX + "px";
})