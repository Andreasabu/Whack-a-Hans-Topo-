function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandom(500, 1000));