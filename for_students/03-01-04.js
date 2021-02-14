/**
 * 03-01-04.js - a simple JavaScript file that gets loaded with
 * page 1 of Workbook 3 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 *
 */
/* jshint -W069, -W141, esversion:6 */

/**
 * 
 * This is for drawTriSquare - it loads in a separate module that holds the code for the function
 * so we can put that code into a separate file (called "03-01-TriSquare.js")
 * 
 * Now is a good time to learn about modules!
 * 
 * Check your favorite JavaScript book (if it is up to date with ES6).
 * https://github.com/nzakas/understandinges6/blob/master/manuscript/13-Modules.md
 * is a nice tutorial.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * is an official reference
 */
export {};

import * as trisquare from "./03-01-TriSquare.js";

/** @type {HTMLCanvasElement} */
const canvas = ( /** @type {HTMLCanvasElement} */ document.getElementById("canvas1"));
const context = canvas.getContext('2d');
trisquare.drawTriSquare(context);
context.translate(40, 0);
trisquare.drawTriSquare(context);
context.translate(40, 0);
trisquare.drawTriSquare(context);
context.translate(40, 0);
trisquare.drawTriSquare(context);

