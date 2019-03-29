import wepy from 'wepy'

export default class Alerts extends wepy.mixin {
  data = {
    mixin: 'Alerts'
  };
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    },
    showToasts(title){
      wx.showToast({
        title: title,
        icon: 'succes',
        duration: 1000,
        mask:true
      })
    },

  };
}
