/**
 * 03-01-05.js - a simple JavaScript file that gets loaded with
 * page 1 of Workbook 3 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 *
 */

// we do enable typescript type checking - see
// https://graphics.cs.wisc.edu/Courses/559-sp2020/pages/typed-js/
// and
// https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files
// @ts-check

/* jshint -W069, -W141, esversion:6 */
export {};

/** @type {HTMLCanvasElement} */
const canvas = ( /** @type {HTMLCanvasElement} */ document.getElementById("canvas1"));
const context = canvas.getContext('2d');

// draw squares with triangles in them
// access "context" because its in scope
// note that these both draw at the origin!
function drawUpArrow() {
    context.save();
    context.fillStyle = "goldenrod";
    context.fillRect(0, 0, 20, 20);
    context.fillStyle = "red";
    context.beginPath();
    context.moveTo(10, 5);
    context.lineTo(5, 15);
    context.lineTo(15, 15);
    context.fill();
    context.restore();
}

function drawDownArrow() {
    context.save();
    context.fillStyle = "goldenrod";
    context.fillRect(0, 0, 20, 20);
    context.fillStyle = "green";
    context.beginPath();
    context.moveTo(10, 15);
    context.lineTo(5, 5);
    context.lineTo(15, 5);
    context.fill();
    context.restore();
}

for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
        context.save();
        context.translate(20 + c * 40, 20 + r * 40);
        // this is intentionally funky code:
        // note how I compute what function to call, then I call it!
        (((r + c) % 2) ? drawUpArrow : drawDownArrow)();
        context.restore();
    }
}
