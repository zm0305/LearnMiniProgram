//获取全局变量
const app = getApp();
console.log(app.globalData.name);
Page({
  data: {
    name: "hello world",
    age: 18,
    students: [{
        id: 1001,
        age: 22,
        name: "aaa"
      },
      {
        id: 1002,
        age: 23,
        name: "bbb"
      },
      {
        id: 1003,
        age: 24,
        name: "ccc"
      }
    ],
    counter: 0
  },
  handleAddBtnClick() {
    //页面无法同步实时更新
    // this.data.counter++;
    // console.log("handleBtnClick...");
    // console.log(this.data.counter);

    this.setData({
      // counter: ++this.data.counter
      counter: this.data.counter + 1
    })
  },
  handleSubBtnClick() {
    this.setData({
      // counter: --this.data.counter
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event);
  }
})