//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    tempFilePaths: ''
  },
  onLoad: function () {
  },
  chooseimage: function () {
    wx.authorize({
      scope: 'scope.writePhotosAlbum',
      success(res) {
        console.log('保存图片授权成功')
      },
      fail() {
        console.log('保存图片授权失败')
      }
    });
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#CED63A",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })

  },

  chooseWxImage: function (type) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res);
        that.setData({
          tempFilePaths: res.tempFilePaths[0],
        })
      }
    })
  }


}) 