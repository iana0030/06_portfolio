window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    document.querySelector("#menuknap").addEventListener("click", clickMenu);

    document.querySelector("#mappe_1").addEventListener("mouseover", hoverBig);
    document.querySelector("#mappe_2").addEventListener("mouseover", hoverBig);
    document.querySelector("#mappe_3").addEventListener("mouseover", hoverBig);
    document.querySelector("#mappe_4").addEventListener("mouseover", hoverBig);
}

function clickMenu() {
    console.log("clickMenu");
    document.querySelector("#menuknap").removeEventListener("click", clickMenu);

    document.querySelector("#menuknap").textContent = "X";

    document.querySelector("section").classList.add("overlay");

    document.querySelector("#burger").classList.remove("hidden");
    document.querySelector("#menuknap").addEventListener("click", clickFjern);
}


function clickFjern() {
    console.log("clickFjern");

    document.querySelector("#burger").classList.add("hidden");

    document.querySelector("#menuknap").textContent = "☰";

    document.querySelector("section").classList.remove("overlay");

    document.querySelector("#menuknap").removeEventListener("click", clickFjern);
    document.querySelector("#menuknap").addEventListener("click", clickMenu);
}

function hoverBig() {
    console.log("hover big");

    this.classList.remove("bigger_reverse");
    this.classList.add("bigger");

    document.querySelector("#mappe_1").removeEventListener("mouseover", hoverBig);
    document.querySelector("#mappe_1").addEventListener("mouseout", removeHoverBig);
    document.querySelector("#mappe_2").removeEventListener("mouseover", hoverBig);
    document.querySelector("#mappe_2").addEventListener("mouseout", removeHoverBig);
    document.querySelector("#mappe_3").removeEventListener("mouseover", hoverBig);
    document.querySelector("#mappe_3").addEventListener("mouseout", removeHoverBig);
    document.querySelector("#mappe_4").removeEventListener("mouseover", hoverBig);
    document.querySelector("#mappe_4").addEventListener("mouseout", removeHoverBig);
}

function removeHoverBig() {
    console.log("hover big gone");

    this.classList.remove("bigger");
    this.classList.add("bigger_reverse");

    document.querySelector("#mappe_1").addEventListener("mouseover", hoverBig);
    document.querySelector("#mappe_1").removeEventListener("mouseout", removeHoverBig);
    document.querySelector("#mappe_2").addEventListener("mouseover", hoverBig);
    document.querySelector("#mappe_2").removeEventListener("mouseout", removeHoverBig);

    document.querySelector("#mappe_3").addEventListener("mouseover", hoverBig);
    document.querySelector("#mappe_3").removeEventListener("mouseout", removeHoverBig);

    document.querySelector("#mappe_4").addEventListener("mouseover", hoverBig);
    document.querySelector("#mappe_4").removeEventListener("mouseout", removeHoverBig);


}
