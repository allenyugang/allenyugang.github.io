<template>
  <section> 
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="(item, index) in options"
        :label="item.label"
        :value="item.value"
        :key="index">
      </el-option>
    </el-select>
    <el-col :span="24">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        :disabled="isshow"
        @change="onchange"
        v-model="textarea">
      </el-input>
    </el-col>
    <el-col :span="8">
      <el-button type="primary" :disabled="ischange" @click="editsubmit">提交</el-button>
    </el-col>  
  </section>
</template>
<script>
export default {
  props: {
    options: {
      type: Array
    }
  },
  data () {
    return {
      value: '',
      textarea: '',
      ischange: true,
      isshow: false,
      message: []
    }
  },
  watch: {
    value: function (val) {
      if (val === '2') {
        this.textarea = ''
        this.ischange = true
        this.isshow = false
      } else if (val === '3') {
        this.textarea = ''
        this.isshow = false
        this.ischange = true
      } else if (val === '1') {
        this.textarea = ''
        this.isshow = false
        this.ischange = false
      }
    }
  },
  methods: {
    onchange (val) {
      if (this.value === '2' && val !== '') {
        this.ischange = false
      } else if (val === '') {
        this.ischange = true
      }
    },
    editsubmit () {
      this.message = []
      this.message.push(this.value)
      this.message.push(this.textarea)
      this.$emit('listenChild', this.message)
    }
  }
}
</script>
<style>
.el-col{
  padding-top:50px;
}
</style>
