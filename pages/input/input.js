// pages/input/input.js
Page({
  bindinput: function (evt) {
    console.log(evt);
    console.log("bindinput");
  },
  bindfocus: function (evt) {
    console.log(evt);
    console.log("bindfocus");
  },
  bindblur: function (evt) {
    console.log(evt);
    console.log("bindblur");
  },
  bindconfirm: function (evt) {
    console.log(evt);
    console.log("bindconfirm");
  },
})