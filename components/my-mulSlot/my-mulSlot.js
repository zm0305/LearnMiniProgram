// components/my-mulSelect/my-mulSelect.js
Component({
  //---------------让使用者可以给组件传入数据---------------
  properties: {

  },
  //---------------定义组件内部的初始化数据---------------
  data: {

  },
  //---------------定义组件内部的函数---------------
  methods: {

  },
  //---------------定义组件的配置选项---------------
  //multipleSlots，在使用多插槽时设置为true
  //styleIsolation，设置样式的隔离方式
  options: {
    multipleSlots: true
  },

  //---------------定义外界给组件传入的额外的样式---------------
  externalClasses: [],

  //---------------可以监听属性properties/data的改变---------------
  observers: {
    //监听哪个值，就以值的名称为key，但是监听的方法中只有newValue，没有oldValue
    counter: function (newVal) {

    }
  },
  //---------------组件中监听生命周期函数---------------
  //1、监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log("监听组件所在页面显示出来时");
    },
    hide() {
      console.log("监听组件所在页面隐藏起来时");
    },
    resize() {
      console.log("监听页面尺寸的改变");
    }
  },
  //2、监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log("组件创建时");
    },
    attached() {
      console.log("组件被添加到页面时");
    },
    ready() {
      console.log("组件被渲染时");
    },
    moved() {
      console.log("组件从一个地方移到另一个地方");
    },
    detached() {
      console.log("组件被移除时");
    }
  }
})