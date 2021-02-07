var sidebar = document.getElementById("sidebar");

function changeMenuIcon(x) {
    x.classList.toggle("change");
    openNav();
    expandInfo();
}

function openNav() {
    if (sidebar.style.display == 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

function expandInfo() {
    if (sidebar.style.display == 'block') {
        var info = document.getElementById("textbox");
        info.style.marginLeft = "250px";
    } else {
        var info = document.getElementById("textbox");
        info.style.marginLeft = "0";
    }
}

function myFunction(x) {
    if (x.matches) {
        if (sidebar.style.display == 'none') {
            sidebar.style.display = 'block';
            document.getElementById("textbox").style.marginLeft = "250px";
            document.getElementById("menu").classList.toggle("change");
        }

    } else {
        if (sidebar.style.display == 'block') {
            sidebar.style.display = 'none';
            document.getElementById("textbox").style.marginLeft = "0px";
            document.getElementById("menu").classList.toggle("change");
        }
    }
}

var x = window.matchMedia("(min-width: 900px)");
myFunction(x);
window.matchMedia("(min-width: 900px)").addListener(myFunction);
