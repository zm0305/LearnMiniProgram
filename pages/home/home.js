// page/home.js
import request from "../../service/network.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //原生发送网络请求
    // wx.request({
    //   url: 'http://152.136.185.210:7878/api/m5/recommend',
    //   success: function (result) {
    //     console.log(result);
    //   }
    // })
    // wx.request({
    //   url: 'http://152.136.185.210:7878/api/m5/home/data',
    //   data: {
    //     type: "sell",
    //     page: 1
    //   },
    //   success: function (result) {
    //     console.log(result);
    //   }
    // })
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: "POST",
    //   data: {
    //     name: "haha",
    //     age: "18"
    //   },
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })

    //封装后
    request({
      url: "http://httpbin.org/post",
      method: "POST",
      data: {
        name: "haha",
        age: "18"
      },
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },

})