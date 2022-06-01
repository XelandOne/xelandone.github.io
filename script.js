const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");

let scrollSpeed = 25;
let movementSpeed = 30;
let spaceLeft = 0;

const bd = document.querySelector('body');

document.onmousemove = mouseMove
//document.onwheel = scrolling;

function scrolling(event) {
    event.preventDefault();

    spaceLeft += event.deltaY * -0.01;


    // Restrict scale
    spaceLeft = Math.min(Math.max(-2, spaceLeft), 0);


    //firstName.style.position = 'relative';
    firstName.style.right = spaceLeft * scrollSpeed + '%';

    //lastName.style.position = 'relative';
    lastName.style.left = spaceLeft * scrollSpeed + '%';
}


function mouseMove(event) {
    let relX = event.clientX / bd.getClientRects()[0]['width'];
    let relY = event.clientY / bd.getClientRects()[0]['height'];


    firstName.style.right = relX * movementSpeed + '%';
    lastName.style.left = relX * movementSpeed + '%';

    firstName.style.top = relY * movementSpeed + '%';
    lastName.style.bottom = -relY * movementSpeed + '%';
}
