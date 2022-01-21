'use strict';
import $ from 'jquery';
const scalingBlock = $('#scaling-block');
const scalingButton = $('#scaling-button');
const movingBlock = $('#moving-block');
const movingButton = $('#moving-button');

scalingButton.on('click',()=>{
  scalingBlock.animate({ width: '200pt', height: '200pt' }, 2000);
  scalingBlock.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.on('click', ()=>{
  movingBlock.animate({ 'marginLeft': '500px'}, 500);
  movingBlock.animate({ 'marginLeft': '20px'}, 1000);
});