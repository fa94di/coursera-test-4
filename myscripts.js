
function loadMenuItems(){
    var myrandom=Math.round(Math.random()*2)
    var link1="single-categories.html"
    var link2="single-categories1.html"
    var link3="single-categories2.html"
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
};
function toggleNav() {
    var nav = document.getElementById("nav-n"),
     main = document.getElementById("main.content");
    if (nav.style.width == "250px") {
      nav.style.width = "0";
      main.style.marginRight = "0";
    }
    else {
      nav.style.width = "250px";
      main.style.marginRight = "250px";
    }
  }