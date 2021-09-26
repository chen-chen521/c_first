// index.js
// 获取应用实例
var rand,sum;//定义全局变量
function createRand(){
  rand=[];
  sum='';
  for(var i=0;i<7;i++){
    var r=0;
    while(r<1||r>31){
      r=(Math.random()*100).toFixed(0);//产生100以内的随机整数并转换为数值类型
    }
    rand.push(r);//将产生的随机数添加到数组中
    sum+=rand[i];
    console.log(rand[i]);//在控制台上显示数组元素
  }
  console.log(sum);
};
Page({
  onLoad:function(){
    createRand();//调用产生随机数的全局函数
    this.setData({
      rand:rand,
      sum:sum
    })
  },
  newRand:function(){
    createRand();
    this.setData({
      rand:rand,
      sum:sum
    })
  }
})