


let countFire = document.querySelector('.countFire b');
let countShotFire = document.querySelector('.countShotFire b');
let soundFire = document.querySelector('.sound-fire');
let soundShotFire = document.querySelector('.sound-shotFire');
let counter = '0';
let counterLose = '0';


document.body.addEventListener('click', shotFire);

function shotFire(one) {
    let unit = one.target;
    if (unit.classList.contains('units')) {
        soundShotFire.play();
        counter++;
        countShotFire.textContent = counter;
        unit.classList.add('kill')
    }
    else {
        soundFire.play();
        counterLose++;
        countFire.textContent = counterLose;
    }
}

