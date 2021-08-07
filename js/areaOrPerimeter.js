
areaOrPerimeter = function (l, w) {

    if (l === w) {
        return (l * w);
    }
    return (2 * l + 2 * w);

}

console.log(areaOrPerimeter(4, 4), 16);
console.log(areaOrPerimeter(6, 10), 32);