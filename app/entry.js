'use strict';
import $ from 'jquery';
const block = $('#block');
const movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px','opacity': 0 }, 500);
  block.animate({ 'marginLeft': '20px','opacity': 1 }, 1000);
});
