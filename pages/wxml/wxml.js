// pages/wxml/wxml.js
Page({
  data: {
    msg: "haha",
    age: 18,
    time: new Date().toLocaleString(),
    isActive: false,
    isShow: false,
    score: 40,
    arr: [1, 4, 6, 9],
    data: [
      [10, 11, 12],
      [13, 14, 15]
    ]
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        time: new Date().toLocaleString()
      })
    }, 1000);
  },
  handleChangeColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitch() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})