'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});


const movingButton = $('#moving-button');

movingButton.on('click', () => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

const dancingButton = $('#dancing-button');

dancingButton.on('click', () => {
  block.animate({'marginLeft': '100px'}, 100);
  block.animate({'marginLeft': '-30px'}, 150);
  block.animate({'marginTop': '100px'}, 150);
  block.animate({'marginButtom': '-80px'}, 180);
  block.animate({'width': '200px'}, 200);
  block.animate({'marginLeft': '100px'}, 150);
  block.animate({'marginLeft': '10px'}, 180);
  block.animate({'width': '50px'}, 100);
  
});