// 注册一个小程序示例
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("小程序初始化完成：onLaunch");
    /* wx.getUserInfo({
      success: (res) => {
        console.log(res);
      }
    }) */
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("onShow");
    //options中的scene字段代表打开小程序的场景
    console.log(options);
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("onError:" + msg);
  },
  /**
   * 页面找不到监听函数
   */
  onPageNotFound: function () {

  },
  //定义全局变量
  globalData: {
    name: "haha",
    age: 18
  }
})