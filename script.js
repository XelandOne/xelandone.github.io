function scrolling(event) {
    event.preventDefault();

    spaceLeft += event.deltaY * -0.01;


    // Restrict scale
    spaceLeft = Math.min(Math.max(-2, spaceLeft), 0);

    var scrollSpeed = 25;

    firstName.style.position = 'relative';
    firstName.style.right = spaceLeft * scrollSpeed + '%';

    lastName.style.position = 'relative';
    lastName.style.left = spaceLeft * scrollSpeed + '%';
}

document.body.style.overflow = "visible";
var spaceLeft = 0;
var bd = document.querySelector('body');
var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");

bd.onwheel = scrolling;