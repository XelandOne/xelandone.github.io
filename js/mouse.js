const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");

let scrollSpeed = 25;
let movementSpeed = 30;
let blurStrengthFactor = 5;
let spaceLeft = 0;

const bd = document.querySelector('body');

document.onmousemove = mouseMove

//document.onwheel = scrolling;

/**
 * @deprecated Position now uses function mouseMove
 */
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
    let bodyWidth = bd.getClientRects()[0]['width']
    let bodyHeight = bd.getClientRects()[0]['height']

    let relX = event.clientX / bodyWidth;
    let relY = event.clientY / bodyHeight;


    firstName.style.right = relX * movementSpeed + '%';
    lastName.style.left = relX * movementSpeed + '%';

    firstName.style.top = relY * movementSpeed + '%';
    lastName.style.bottom = -relY * movementSpeed + '%';

    let firstNameDistance = getDistanceToPoint(firstName, event.clientX, event.clientY) / (0.5 * (bodyHeight + bodyWidth));
    let lastNameDistance = getDistanceToPoint(lastName, event.clientX, event.clientY) / (0.5 * (bodyHeight + bodyWidth));

    firstName.style.filter = 'blur(' + Math.log(firstNameDistance + 1) * blurStrengthFactor + 'px)';
    lastName.style.filter = 'blur(' + Math.log(lastNameDistance + 1) * blurStrengthFactor + 'px)';
}

