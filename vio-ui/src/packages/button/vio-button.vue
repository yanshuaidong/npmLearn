<template>
  <button
    class="vio-button"
    @click="handleClick"
    :style="{backgroundColor: bgcolor, color: color}">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'VioButton',
  props: {
    // 背景颜色
    bgcolor: String,
    // 文字颜色
    color: String
  },
  methods: {
    // 点击事件
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style lang="scss" scoped>
// 按钮样式
.vio-button {
  padding: 6px 20px;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  color: #666;
  cursor: pointer;
}
</style>

