function distanceFromHqInBlocks(hqStart){
    if (hqStart > 42)
        return hqStart - 42
    else (hqStart < 42)
        return 42 - hqStart
}

function distanceFromHqInFeet(hqStart) {
    if (hqStart > 42)
        return (hqStart - 42)*264
    else (hqStart < 42)
        return (42 - hqStart)*264
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination)
        return (start - destination)*264
    else (start < destination)
        return (destination - start)*264
}

function calculatesFarePrice(start, destination) {
    let blockDistance = Math.abs(start - destination)
    let distanceTravelled = blockDistance * 264;
    if (distanceTravelled <=400) {
        console.log("gives customers a free sample");
        return 0;
    }
    else if (distanceTravelled >= 2500) {
        return "cannot travel that far";
    }
    else if (400 < distanceTravelled && distanceTravelled < 2000) {
        let rideCost = (0.02 * (distanceTravelled - 400));
        return rideCost;
    }
    else if (2000 <=distanceTravelled < 2500) {
        return 25;
    }
}