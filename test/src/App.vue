<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 按钮 -->
    <div class="vio-item">
      <label>Button:</label> 
      <vio-button class="vio-btn" @click="onClick(11)">确定</vio-button>
      <vio-button class="vio-btn" @click="onClick" bgcolor="#409eff" color="#fff">确定</vio-button>
      <vio-button class="vio-btn" @click="onClick" bgcolor="#67c23a" color="#fff">成功</vio-button>
      <vio-button class="vio-btn" @click="onClick" bgcolor="#e6a23c" color="#fff">警告</vio-button>
      <vio-button class="vio-btn" @click="onClick" bgcolor="#f56c6c" color="#fff">危险</vio-button>
    </div>
    <!-- 输入框 -->
    <div class="vio-item">
      <label>Input: </label>
      <vio-input
      v-model="input1"
      placeholder="请输入信息">
      </vio-input>

      <vio-input
        v-model="input2"
        placeholder="请输入信息">
      </vio-input>

      <vio-input
        placeholder="输入框禁用"
        :disabled="inputDisabled">
      </vio-input>
    </div>
  </div>
</template>

<script>
const tools= require('ysd-tools')

export default {
  name: 'App',
  data() {
    return {
      input1: '',
      input2: '',
      inputDisabled: true,
      tools
    }
  },
  mounted() {
    const dtType = this.tools.dataType(2023)
    console.log(dtType)
  },
  methods: {
    onClick() {
      console.log('click')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
