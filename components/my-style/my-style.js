// components/my-style/my-style.js
Component({
  options: {
    //默认值为isolated，这种情况下样式是不会相互影响的
    // styleIsolation: "isolated"
    //外部页面可以影响自定义组件
    // styleIsolation: "apply-shared",
    //自定义组件和外部页面可以相互影响
    styleIsolation: "shared"
  }
})