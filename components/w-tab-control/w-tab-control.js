// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event) {
      let index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      })
      this.triggerEvent("clickItem", {
        index,
        title: this.properties.title[index]
      }, {});
    }
  }
})