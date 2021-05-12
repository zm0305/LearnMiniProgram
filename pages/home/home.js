// page/home.js
Page({
  data: {
    titles: ["a", "b", "c"]
  },
  handleBtnClick: function () {
    console.log(1);
  },
  handleTouchStart: function (evt) {
    console.log(evt.type);
    console.log("点击开始时触发");
  },
  handleTouchmove: function () {
    console.log("点击移动时触发");
  },
  handleTouchEnd: function () {
    console.log("点击结束时触发");
  },
  handleTap: function () {
    console.log("点击时触发");
  },
  handleLongPress: function () {
    console.log("长按超过350s时触发，如果指定了事件回调函数并且触发了，tap事件不会被触发");
  },
  handleClickEvent: function (evt) {
    console.log(evt);
  },
  handleTouchEndEvent: function (event) {
    console.log(event);
  },
  handleInner: function (event) {
    // console.log(event);
  },
  handleOuter: function (event) {
    //点击inner时，event中的target和currentTarget不同，tatget是inner，currentTarget是outer
    console.log(event);
  },
  handleItemClick: function (event) {
    console.log(event);
    console.log(event.currentTarget.dataset);
  },
  //事件冒泡和事件捕获
  handleCaptureView1: function () {
    console.log("handleCaptureView1");
  },
  handleCaptureView2: function () {
    console.log("handleCaptureView2");
  },
  handleCaptureView3: function () {
    console.log("handleCaptureView3");
  },
  handleBindView1: function () {
    console.log("handleBindView1");
  },
  handleBindView2: function () {
    console.log("handleBindView2");
  },
  handleBindView3: function () {
    console.log("handleBindView3");
  },

})