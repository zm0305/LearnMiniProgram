// pages/image/image.js
Page({
  data: {
    imgPath: ""
  },
  handleChooseAlbum: function () {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        const path = res.tempFilePaths[0];
        this.setData({
          imgPath: path
        })
      }
    })
  },
  handleImgLoad:function(){
    console.log("handleImgLoad");
  }
})