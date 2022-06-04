function getElementCenter(element) {
    const {top, left, width, height} = element.getBoundingClientRect();
    return {
        x: left + width / 2,
        y: top + height / 2
    };
}

function getDistanceToPoint(element, x, y) {
    const aPosition = getElementCenter(element);

    return Math.hypot(aPosition.x - x, aPosition.y - y);
}
