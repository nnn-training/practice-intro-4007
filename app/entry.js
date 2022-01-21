'use strict';
import $ from 'jquery';
const circle = $('#circle');
const scalingButton = $('#scaling-button');

scalingButton.click(() => {
  circle.animate({ width: '200pt', height: '200pt' }, 2000);
  circle.animate({ width: '100pt', height: '100pt' }, 2000);
});

const movingButton = $('#moving-button');

movingButton.click(() => {
  circle.animate({ marginLeft: '500px' }, 2000);
  circle.animate({ marginLeft: '20px' }, 2000);
});