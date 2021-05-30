// page/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: 'Hello World',
      duration: 3000,
      //设置为true时，底部页面无法进行操作
      mask: true,
      icon: "loading"
    })
  },
  handleShowModel() {
    wx.showModal({
      title: "Model标题",
      content: "Model内容",
      cancelColor: 'red',
      cancelText: "退出",
      success: function (res) {
        if (res.cancel) {
          console.log("取消了");
        } else if (res.confirm) {
          console.log("confirm了")
        }
        console.log(res);
      }
    })
  },
  handleShowLoading() {
    //需主动调用 wx.hideLoading 才能关闭提示框
    //一般用于网络请求的loading框，因为不确定时间
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {
          console.log("hideLoading...");
        },
      })
    }, 3000);
  },
  handleShowActionSheet() {
    //下拉选框
    wx.showActionSheet({
      itemList: ["1", "2", "3", "4", "5", "6"],
      itemColor: "red",
      success: function (res) {
        console.log(res);
        //点击的index
        console.log(res.tapIndex);
      }
    })
  },
  onShareAppMessage: function (options) {
    console.log(options);
    return {
      title: "分享啦啦啦",
      path: "/pages/about/about"
    }
  }
})