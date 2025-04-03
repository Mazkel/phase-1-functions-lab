num = 43
function distanceFromHqInBlocks(num) {
    return Math.abs(num - 42)
}

function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end)*264;
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = Math.abs(start - destination) * 264;

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    }else {
        return 'cannot travel that far'
    }
}