import SfMessageWrapper from './sf-message-wrapper.vue'
import SfMessage from './sf-message.vue'

const DEFAULTDURATION = 3000

const DELAYDURATION = 1000

export default function (Vue) {
  /**
   * 初始化消息通知容器DOM
   */
  function initWrapper () {
    const SfMessageWrapperConstructor = Vue.extend(SfMessageWrapper)
    const SfMessageWrapperInstance = new SfMessageWrapperConstructor()
    SfMessageWrapperInstance.$mount()
    document.querySelector('#app').appendChild(SfMessageWrapperInstance.$el)
  }

  /**
   * 显示消息通知方法
   * @param {Object} SfMessageInstance
   */
  function showSfMessage (SfMessageInstance) {
    // 判定是否有容器，如果有没有，创建容器
    if (!document.querySelector('#sf-message-wrapper')) {
      initWrapper()
    }
    // 生成消息DOM
    document
      .querySelector('#sf-message-wrapper')
      .appendChild(SfMessageInstance.$el)
    // 消息展示
    SfMessageInstance.value = true
  }

  /**
   * 关闭消息通知方法
   * @param {Object} SfMessageInstance
   * @param {Number} duration
   */
  function hideSfMessage (SfMessageInstance, duration = DEFAULTDURATION) {
    // 延迟隐藏消息
    setTimeout(() => {
      SfMessageInstance.value = false
    }, duration)
    // 隐藏消息后删除消息DOM
    setTimeout(() => {
      document
        .querySelector('#sf-message-wrapper')
        .removeChild(SfMessageInstance.$el)
    }, duration + DELAYDURATION)
  }

  // 创建消息构造函数
  const SfMessageConstructor = Vue.extend(SfMessage)

  /**
   * 实例化消息
   * @param {Object} options
   */
  function generateSfMessageInstance (options) {
    return new SfMessageConstructor({
      data () {
        return {
          value: false,
          message: options.message,
          top: options.top,
          color: options.color,
          icon: options.icon
        }
      }
    })
  }
  return {
    success: function (options) {
      const SfMessageInstance = generateSfMessageInstance({
        ...options,
        color: 'success',
        icon: 'mdi-check-circle-outline'
      }).$mount()
      showSfMessage(SfMessageInstance)
      hideSfMessage(SfMessageInstance, options.duration)
    },
    error: function (options) {
      const SfMessageInstance = generateSfMessageInstance({
        ...options,
        color: 'error',
        icon: 'mdi-alert-octagon-outline'
      }).$mount()

      showSfMessage(SfMessageInstance)
      hideSfMessage(SfMessageInstance, options.duration)
    },
    warning: function (options) {
      const SfMessageInstance = generateSfMessageInstance({
        ...options,
        color: 'warning',
        icon: 'mdi-alert-circle-outline'
      }).$mount()

      showSfMessage(SfMessageInstance)
      hideSfMessage(SfMessageInstance, options.duration)
    },
    info: function (options) {
      const SfMessageInstance = generateSfMessageInstance({
        ...options,
        color: 'primary',
        icon: 'mdi-alert-outline'
      }).$mount()

      showSfMessage(SfMessageInstance)
      hideSfMessage(SfMessageInstance, options.duration)
    }
  }
}
