// page/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    isShow: true
  },

  handleIncrement(event) {
    console.log(event);
    console.log(event.detail);
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event) {
    console.log(event.detail);
  },
  handleSelect: function () {
    // 目的：修改my-select中的counter
    // 获取组件对象，可以使用class选择器和id选择器
    const mySelect = this.selectComponent("#select-id");
    // const mySelect = this.selectComponent(".select-cls");
    console.log(mySelect);
    // 通过setData直接修改组件中的值，不建议，不够规范
    // mySelect.setData({
    //   counter: mySelect.data.counter + 20
    // })
    // 建议通过在组件中暴露一个方法，让外部组件来调用
    mySelect.incrementCounter(30);
  },
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})