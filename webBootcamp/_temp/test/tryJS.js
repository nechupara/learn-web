'use strict'

// const point1 = [6288288.69549710 ,5148211.05761632];
// const point2 = [6288300.73283613 ,5148221.67387598];
// const point3 = [6288313.12177964 ,5148207.62656383];
// const point4 = [6288301.08444061 ,5148197.01030417];

const point1 = [5148211.05761632, 6288288.69549710];
const point2 = [5148221.67387598, 6288300.73283613];
const point3 = [5148207.62656383, 6288313.12177964];
const point4 = [5148197.01030417, 6288301.08444061];

const points = [point1, point2, point3, point4];

function findArea (points) {
    //points - [[coordX, coordY], [coordX, coordY], [coordX, coordY], [coordX, coordY]]
    let sum1 = 0; //n-1 cycles
    let sum2 = 0;

    for (let i = 0; i < 3; i++) {
        sum1 += points[i][0]*points[i+1][1]; // x(i)*y(i+1)
        sum2 += points[i+1][0]*points[i][1]; // // x(i+1)*y(i)
    }

    // for getting abs of number (sum1 + x(4)*y(1) - sum2 - x(1)*y(4))
    let modulOfSum = sum1 + points[3][0] * points[0][1] - sum2 - points[0][0] * points[3][1];
    // getting abs of number
    modulOfSum = Math.abs(modulOfSum);
    console.log('module', modulOfSum);
    const square = 0.5 * modulOfSum;

    const side1 = findDistance(points[0], points[1]);
    const side2 = findDistance(points[1], points[2]);
    console.log('side1', side1);
    console.log('side2', side2);
    return side1 * side2;
}

function findDistance(point1, point2) {

    // dist between points 2 and 1 (index: 1 and 0)
    return Math.sqrt((point2[0] - point1[0])**2 + (point2[1] - point1[1])**2);

}

console.log(findArea(points));
