'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');
const opacityButton = $('#opacity-button');
const allButton = $('#all-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

opacityButton.click(() => {
  block.animate({ opacity: 0.1 }, 700);
  block.animate({ opacity: 1 }, 1100);
});

const n1 = Math.floor( Math.random() * 31 ) + 120;
const n2 = Math.floor( Math.random() * 601 ) + 150;
const n3 = Math.floor( Math.random() * 301 ) + 550;
const n4 = Math.floor( Math.random() * 401 ) + 900;

allButton.click(() => {
  const n1 = Math.floor( Math.random() * 31 ) + 120;
  const n2 = Math.floor( Math.random() * 601 ) + 150;
  const n3 = Math.floor( Math.random() * 50 ) + 35;
  const n4 = Math.floor( Math.random() * 301 ) + 550;
  const n5 = Math.floor( Math.random() * 401 ) + 900;

  block.animate({ width: `${n1}pt`, height: `${n1}pt` }, n4);
  block.animate({ opacity: 0 }, n5);
  block.animate({ 'marginLeft': `${n2}px`, 'marginTop': `${n3}px` }, n5);
  block.animate({ opacity: 1 }, n5);
  block.animate({ width: `100pt`, height: `100pt` }, n5);
  block.animate({ 'marginLeft': `20px` }, n5);
});