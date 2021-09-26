// index.js
// 获取应用实例
var money,lilv,years;
Page({
  benNum:function(e){
    money=parseInt(e.detail.value);
  },
  lixiNum:function(e){
    lilv=parseInt(e.detail.value);
  },
  YNum:function(e){
    years=parseInt(e.detail.value);
  },
  calc:function(e){
    for(var i=0;i<years;i++){
      money=(money*(1+lilv*0.01)).toFixed(2)*1;
    }
    this.setData({
      years:years
    })
    this.setData({
      money:money
    })
  }
})
