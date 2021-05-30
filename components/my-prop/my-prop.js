// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //第一种定义方式，但是没有默认值
    title: String,
    //第二种定义方式，可以定义默认值
    content: {
      type: String,
      value: "默认content",
      //用于监听这个值的变化，可以获取到变化前后的值
      observer: function (newV, oldV) {
        console.log(newV, oldV);
      }
    }
  },
  externalClasses: [
    "titleclass"
  ]
})