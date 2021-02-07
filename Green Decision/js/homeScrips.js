let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = 1;
    }
    slideLeft();
});

arrowRight.addEventListener('click', function () {
    if (current === sliderImages.length - 1) {
        current = sliderImages.length - 2;
    }
    slideRight();
});

startSlide();

function popup(e) {
    e.style.display = "block";
}

function popup1(id) {
    var e = document.getElementById("pop1");
    if (id == "btn1") {
        e.children[0].innerHTML = "Great Job"
    } else {
        e.children[0].innerHTML = "You can do better"
    }
    popup(e);
}

document.getElementById("pop1btn").onclick = function () {
    var popup = document.getElementById("pop1");
    popup.style.display = "none";
    slideRight();
}

function popup2(object) {
    var e = document.getElementById("pop2");
    if (object == "walk") {
        e.children[1].innerHTML = "Walking is always a great exercise and a great way to enjoy the weather! It requires no fossil fuels. Walk more when the weather is nice!"
    } else if (object == "bus") {
        e.children[1].innerHTML = "Public transportation is also a great choice! Although it requires some fuel fossils, 'a full bus is six times more fuel-efficient than a regular solo car.'";
        e.children[2].style.display = 'block';
        document.getElementById("learn").href = "http://www.acogok.org/why-transit-matters-environment/";

    } else if (object == "bike") {
        e.children[1].innerHTML = "Biking is a great way to travel. It is fast, convenient, and energy-efficient!"
    } else if (object == "car") {
        e.children[1].innerHTML = "Car population is one of the primary causes of climate change and global warming. It contributes one-fifth of the United States's total greenhouse gas pollution!";
        e.children[2].style.display = 'block';
        document.getElementById("learn").href = "https://sciencing.com/effects-car-pollutants-environment-23581.html"
    }

    popup(e);
}

document.getElementById("pop2btn").onclick = function () {
    var popup = document.getElementById("pop2");
    popup.style.display = "none";
    slideRight();
}

function popup3(object) {
    var e = document.getElementById("pop3");
    if (object == "elevator") {
        e.children[1].innerHTML = "Elevators use quite a bit of energy, especially when you are the only person in them. Three floors are not that hard. Try stairs next time!"
    } else {
        e.children[1].innerHTML = "Walking Stairs is definitely a green choice. In fact, it also improves your health in many different ways. It will help you lose weight and build muscle!e"
    }
    popup(e);
}

document.getElementById("pop3btn").onclick = function () {
    var popup = document.getElementById("pop3");
    popup.style.display = "none";
    slideRight();
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id)
}

function drop(event, ID) {
    var trash = document.getElementById(event.dataTransfer.getData("text"));
    event.dataTransfer.clearData();

    var x = document.getElementsByClassName("trash");

    if (trash.id == "trash1" && ID == "trashcan3") {
        trash.style.display = "none";
        if (x[0].style.display == "none" && x[1].style.display == "none" && x[2].style.display == "none" && x[3].style.display == "none") {
            popup(document.getElementById("end"))
        } else {
            popup(document.getElementById("correct"));
        }
    } else if (trash.id == "trash2" && ID == "trashcan4") {
        trash.style.display = "none";
        if (x[0].style.display == "none" && x[1].style.display == "none" && x[2].style.display == "none" && x[3].style.display == "none") {
            popup(document.getElementById("end"))
        } else {
            popup(document.getElementById("correct"));
        }
    } else if (trash.id == "trash3" && ID == "trashcan4") {
        trash.style.display = "none";
        if (x[0].style.display == "none" && x[1].style.display == "none" && x[2].style.display == "none" && x[3].style.display == "none") {
            popup(document.getElementById("end"))
        } else {
            popup(document.getElementById("correct"));
        }
    } else if (trash.id == "trash4" && ID == "trashcan4") {
        trash.style.display = "none";
        if (x[0].style.display == "none" && x[1].style.display == "none" && x[2].style.display == "none" && x[3].style.display == "none") {
            popup(document.getElementById("end"))
        } else {
            popup(document.getElementById("correct"));
        }
    } else {
        popup(document.getElementById("incorrect"));
    }



}
document.getElementById("pop4btnCor").onclick = function () {

    document.getElementById("correct").style.display = "none";
}

document.getElementById("pop4btnInc").onclick = function () {

    document.getElementById("incorrect").style.display = "none";
}


document.getElementById("start_over").onclick = function () {
    document.getElementById("end").style.display = "none";
    var x = document.getElementsByClassName("trash");
    for (i = 0; i < 4; i++) {
        x[i].style.display = "inline-block";
    }
    current = 0;
    startSlide();
}
