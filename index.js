let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//let sidemenu=document.getElementById("sidemenu");
//console.log(sidemenu);

function openmenu(){
    sidemenu.style.right="0";
    //console.log(sidemenu);
}

function closemenu(){
    sidemenu.style.right="-200px";
}