// Lock dobbelsteen 1
function locked1() {
    var lock = document.getElementById("lock1");
    var currentSrc = lock.getAttribute("src");

    if (currentSrc === './images/unlock.png') {
        lock.setAttribute("src", "./images/lock.png");
    } else {
        lock.setAttribute("src", "./images/unlock.png");
    }
}

// Lock dobbelsteen 2
function locked2() {
    var lock = document.getElementById("lock2");
    var currentSrc = lock.getAttribute("src");

    if (currentSrc === './images/unlock.png') {
        lock.setAttribute("src", "./images/lock.png");
    } else {
        lock.setAttribute("src", "./images/unlock.png");
    }
}

// Lock dobbelsteen 3
function locked3() {
    var lock = document.getElementById("lock3");
    var currentSrc = lock.getAttribute("src");

    if (currentSrc === './images/unlock.png') {
        lock.setAttribute("src", "./images/lock.png");
    } else {
        lock.setAttribute("src", "./images/unlock.png");
    }
}

// Lock dobbelsteen 4
function locked4() {
    var lock = document.getElementById("lock4");
    var currentSrc = lock.getAttribute("src");

    if (currentSrc === './images/unlock.png') {
        lock.setAttribute("src", "./images/lock.png");
    } else {
        lock.setAttribute("src", "./images/unlock.png");
    }
}

// Lock dobbelsteen 5
function locked5() {
    var lock = document.getElementById("lock5");
    var currentSrc = lock.getAttribute("src");

    if (currentSrc === './images/unlock.png') {
        lock.setAttribute("src", "./images/lock.png");
    } else {
        lock.setAttribute("src", "./images/unlock.png");
    }
}

var count = 0

// Het gooien van de dobbelstenen
function gooien() {
    var dobbel1 = Math.round(5 * Math.random()) + 1;
    var dobbel2 = Math.round(5 * Math.random()) + 1;
    var dobbel3 = Math.round(5 * Math.random()) + 1;
    var dobbel4 = Math.round(5 * Math.random()) + 1;
    var dobbel5 = Math.round(5 * Math.random()) + 1;
    const lockcheck1 = document.getElementById("lock1").getAttribute("src");
    const lockcheck2 = document.getElementById("lock2").getAttribute("src");
    const lockcheck3 = document.getElementById("lock3").getAttribute("src");
    const lockcheck4 = document.getElementById("lock4").getAttribute("src");
    const lockcheck5 = document.getElementById("lock5").getAttribute("src");
    countPlus()
    

    // lockcheck 1
    if (lockcheck1 === './images/lock.png') {
        
    } else {
        if (dobbel1 == 1) {
            getal1();
        } else if (dobbel1 == 2) {
            getal2();
        } else if (dobbel1 == 3) {
            getal3();
        } else if (dobbel1 == 4) {
            getal4();
        } else if (dobbel1 == 5) {
            getal5();
        } else {
            getal6();
        }
    }


    // lockcheck 2
    if (lockcheck2 === './images/lock.png') {

    } else {
        if (dobbel2 == 1) {
            nummer1();
        } else if (dobbel2 == 2) {
            nummer2();
        } else if (dobbel2 == 3) {
            nummer3();
        } else if (dobbel2 == 4) {
            nummer4();
        } else if (dobbel2 == 5) {
            nummer5();
        } else {
            nummer6();
        }
    }


    // lockcheck 3
    if (lockcheck3 === './images/lock.png') {

    } else {
        if (dobbel3 == 1) {
            nummers1();
        } else if (dobbel3 == 2) {
            nummers2();
        } else if (dobbel3 == 3) {
            nummers3();
        } else if (dobbel3 == 4) {
            nummers4();
        } else if (dobbel3 == 5) {
            nummers5();
        } else {
            nummers6();
        }
    }


    // lockcheck 4
    if (lockcheck4 === './images/lock.png') {

    } else {
        if (dobbel4 == 1) {
            nummerss1();
        } else if (dobbel4 == 2) {
            nummerss2();
        } else if (dobbel4 == 3) {
            nummerss3();
        } else if (dobbel4 == 4) {
            nummerss4();
        } else if (dobbel4 == 5) {
            nummerss5();
        } else {
            nummerss6();
        }
    }


    // lockcheck 5
    if (lockcheck5 === './images/lock.png') {

    } else {
        if (dobbel5 == 1) {
            nummera1();
        } else if (dobbel5 == 2) {
            nummera2();
        } else if (dobbel5 == 3) {
            nummera3();
        } else if (dobbel5 == 4) {
            nummera4();
        } else if (dobbel5 == 5) {
            nummera5();
        } else {
            nummera6();
        }
    }
    

    function countPlus() {
        count++;
        document.getElementById("countDisplay").innerText = "Worpen: " + count;

        // Check if count is 3, replace the button with a Reset button
        if (count === 1000) {
            const button = document.getElementById("gooi");
            button.style.visibility = "hidden";
        }
    }
}

function reset() {
    count = 0;
    document.getElementById("countDisplay").innerText = "Worpen: " + count;
    
    const button = document.getElementById("gooi");
    button.style.visibility = "visible";

    const IMG = document.getElementById("IMG");
    IMG.setAttribute("src", "./images/MEX.png")
    
    const Image = document.getElementById("Image");
    Image.setAttribute("src", "./images/EN.png")

    const lockreset1 = document.getElementById("lock1");
    lockreset1.setAttribute("src", "./images/unlock.png")

    const lockreset2 = document.getElementById("lock2");
    lockreset2.setAttribute("src", "./images/unlock.png")

    const lockreset3 = document.getElementById("lock3");
    lockreset3.setAttribute("src", "./images/unlock.png")

    const lockreset4 = document.getElementById("lock4");
    lockreset4.setAttribute("src", "./images/unlock.png")

    const lockreset5 = document.getElementById("lock5");
    lockreset5.setAttribute("src", "./images/unlock.png")
}

// dobbelsteen 1
function getal1() {
    var ogen1 = document.getElementById("IMG");
    ogen1.setAttribute("src", "./images/1.jpg");
}

function getal2() {
    var ogen2 = document.getElementById("IMG");
    ogen2.setAttribute("src", "./images/2.jpg");
}

function getal3() {
    var ogen3 = document.getElementById("IMG");
    ogen3.setAttribute("src", "./images/3.jpg");
}

function getal4() {
    var ogen4 = document.getElementById("IMG");
    ogen4.setAttribute("src", "./images/4.jpg");
}

function getal5() {
    var ogen5 = document.getElementById("IMG");
    ogen5.setAttribute("src", "./images/5.jpg");
}

function getal6() {
    var ogen6 = document.getElementById("IMG");
    ogen6.setAttribute("src", "./images/6.jpg");
}




// dobbelsteen 2
function nummer1() {
    var oog1 = document.getElementById("Image");
    oog1.setAttribute("src", "./images/1.jpg");
}

function nummer2() {
    var oog2 = document.getElementById("Image");
    oog2.setAttribute("src", "./images/2.jpg");
}

function nummer3() {
    var oog3 = document.getElementById("Image");
    oog3.setAttribute("src", "./images/3.jpg");
}

function nummer4() {
    var oog4 = document.getElementById("Image");
    oog4.setAttribute("src", "./images/4.jpg");
}

function nummer5() {
    var oog5 = document.getElementById("Image");
    oog5.setAttribute("src", "./images/5.jpg");
}

function nummer6() {
    var oog6 = document.getElementById("Image");
    oog6.setAttribute("src", "./images/6.jpg");
}




// dobbelsteen 3
function nummers1() {
    var oogs1 = document.getElementById("Image2");
    oogs1.setAttribute("src", "./images/1.jpg");
}

function nummers2() {
    var oogs2 = document.getElementById("Image2");
    oogs2.setAttribute("src", "./images/2.jpg");
}

function nummers3() {
    var oogs3 = document.getElementById("Image2");
    oogs3.setAttribute("src", "./images/3.jpg");
}

function nummers4() {
    var oogs4 = document.getElementById("Image2");
    oogs4.setAttribute("src", "./images/4.jpg");
}

function nummers5() {
    var oogs5 = document.getElementById("Image2");
    oogs5.setAttribute("src", "./images/5.jpg");
}

function nummers6() {
    var oogs6 = document.getElementById("Image2");
    oogs6.setAttribute("src", "./images/6.jpg");
}





// dobbelsteen 4
function nummerss1() {
    var oogss1 = document.getElementById("Image3");
    oogss1.setAttribute("src", "./images/1.jpg");
}

function nummerss2() {
    var oogss2 = document.getElementById("Image3");
    oogss2.setAttribute("src", "./images/2.jpg");
}

function nummerss3() {
    var oogss3 = document.getElementById("Image3");
    oogss3.setAttribute("src", "./images/3.jpg");
}

function nummerss4() {
    var oogss4 = document.getElementById("Image3");
    oogss4.setAttribute("src", "./images/4.jpg");
}

function nummerss5() {
    var oogss5 = document.getElementById("Image3");
    oogss5.setAttribute("src", "./images/5.jpg");
}

function nummerss6() {
    var oogss6 = document.getElementById("Image3");
    oogss6.setAttribute("src", "./images/6.jpg");
}




// dobbelsteen 5
function nummera1() {
    var ooga1 = document.getElementById("Image4");
    ooga1.setAttribute("src", "./images/1.jpg");
}

function nummera2() {
    var ooga2 = document.getElementById("Image4");
    ooga2.setAttribute("src", "./images/2.jpg");
}

function nummera3() {
    var ooga3 = document.getElementById("Image4");
    ooga3.setAttribute("src", "./images/3.jpg");
}

function nummera4() {
    var ooga4 = document.getElementById("Image4");
    ooga4.setAttribute("src", "./images/4.jpg");
}

function nummera5() {
    var ooga5 = document.getElementById("Image4");
    ooga5.setAttribute("src", "./images/5.jpg");
}

function nummera6() {
    var ooga6 = document.getElementById("Image4");
    ooga6.setAttribute("src", "./images/6.jpg");
}