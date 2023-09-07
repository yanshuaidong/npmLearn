<template>
  <div id="app">
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
      @input="aaaa"
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
export default {
  name: 'app',
  data () {
    return {
      // HelloWorld
      msg: 'Welcome to vio UI!',
      // Select
      selectValue: '',
      // input
      input1: '',
      input2: '',
      inputDisabled: true,
      // switch
      lightSwitch: false,
      switchLight: true
    }
  },
  methods: {
    onClick(e) {
      console.log('click', e);
    },
    aaaa(){
      console.log('input1',this.input1);
    },
    handlePrint() {
      console.log('selectValue', this.selectValue);
      console.log('input1:', this.input1);
      console.log('input2:', this.input2);
    }
  },
  watch: {
    lightSwitch: newValue => console.log('开关：', newValue),
  }
}
</script>

<style lang="scss">
.vio-select, .vio-btn, .vio-switch, .vio-input {
  margin: 10px 6px;
}
.vio-item {
  display: flex;
  align-items: center;

  label {
    width: 100px;
    display: inline-block;
  }
}
</style>
