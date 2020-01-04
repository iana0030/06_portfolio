window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    document.querySelector("#menuknap").addEventListener("click", clickMenu);
}


function clickMenu() {
    console.log("clickMenu");
    document.querySelector("#menuknap").removeEventListener("click", clickMenu);

    document.querySelector("#burger").classList.remove("hidden");
    document.querySelector("#menuknap").addEventListener("click", clickFjern);
}


function clickFjern() {
    console.log("clickFjern");

    document.querySelector("#burger").classList.add("hidden");

    document.querySelector("#menuknap").removeEventListener("click", clickFjern);
    document.querySelector("#menuknap").addEventListener("click", clickMenu);
}
