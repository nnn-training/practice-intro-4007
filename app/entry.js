'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');
const opacityButton = $('#opacity-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.click(() => {
  block.animate({ 'marginLeft': '500pt' }, 500);
  block.animate({ 'marginLeft': '20pt' }, 500);
});

opacityButton.click(() => {
  block.animate({ opacity: 0 }, 2000);
  block.animate({ opacity: 1 }, 2000);
});