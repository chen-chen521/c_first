Page({
    data: {
      imgUrls: [
        '/images/德州市.jpg',//图片的相对位置
        '/images/德州扒鸡.jpg',
        '/images/金丝小枣.jpg',
        '/images/保店驴肉.jpg'
      ],//可在微信小程序开发平台中获取相关代码，辅助index.wxml使用（实现轮播图的功能）
      indicatorDots: true,
      autoplay: true,//自动播放
      interval: 2000,//图片播放间隔（2s）
      duration: 1000,//每张图片播放的时间（1s）
      circular: true,//循环播放图片
      prolist:[{//创立一个列表，用来实现多张图片的插入，用循环来辅助实现（在index.wxml中）
        proname:"name1",
        proprice:10,
      }, {
          proname: "name2",
          proprice: 20,
        }, {
          proname: "name3",
          proprice: 30,
        }, {
          proname: "name4",
          proprice: 40,
        }, 
      ]
    }
  })