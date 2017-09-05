<template>
  <section>
    <div class="col-md-6 pic_show">
      <div class="register_div">
        <div class="upfilebox">
            <input class="form-control bussinessLicense" @change="readFile($event)" type="file" id="bussinessLicense" name="bussinessLicense">
            <label class="lable lable-pic"></label>
        </div>
        <div class="registerShow" v-html = "datas" @click="open">
        </div>
      </div>
    </div>
    <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
      <img :src="dataurl" width="100" height="100">
    </el-dialog>
  </section>
</template>
<script>
export default {
  data () {
    return {
      file: '',
      fileSize: '',
      fileName: '',
      fileExt: '',
      fileExp: '',
      reader: '',
      datas: '',
      dataurl: '',
      editFormVisible: false
    }
  },
  methods: {
    readFile (domclick) {
      this.file = domclick.target.files
      this.fileSize = (this.file[0].size / 1024 / 1024)
      this.fileName = this.file[0].name
      this.fileExt = this.fileName.substr(this.fileName.lastIndexOf('.')).toLowerCase()
      console.log(this.fileExt)
      this.fileExp = /\.(gif|jpg|jpeg|png)$/
      if (this.fileExp.test(this.fileExt) === false) {
        alert('上传正确文件')
        domclick.target.value = ''
        return
      }
      this.reader = new FileReader()
      this.reader.readAsDataURL(this.file[0])
      this.reader.onload = function (e) {
        let _this = this
        window.sessionStorage['result'] = _this.result
      }
      if (window.sessionStorage['result'] === undefined) {
        setTimeout(function () {
          let url = window.sessionStorage['result']
          console.log(this.datas)
          console.log(url)
        }, 3000)
      } else {
        alert(333)
      }
      let url = window.sessionStorage['result']
      this.datas = '<img class="img" data-name=' + this.fileName + ' src="' + url + '" alt="" width="102" height="102"/>'
    },
    open () {
      this.editFormVisible = true
      this.dataurl = window.sessionStorage['result']
    }
  }
}
</script>
<style>
.pic_show{
	padding-left:6px;
}
.register_div{
    margin-left:10px;
    width:102px;
    height:100px;
    border:1px solid #eaeaea;
}
.upfilebox input {
    width: 100px;
    height: 100px;
    position: absolute;
    z-index: 9;
    opacity: 0;
}
.upfilebox .lable {
    position: absolute;
    display: inline-block;
    color: #fff;
    width: 100px;
    height: 100px;
    line-height: 45px;
    text-align: center;
    border-radius: 5px;
}
.sign{
    position: absolute;
	top: -5px;
	right: 440px;
	z-index: 11;
	display: inline-block;
	width: 20px;
	height: 20px;
	background-color: #f30026;
	border-radius: 100%;
	color:#fff;
	cursor: pointer;
	text-align: center;
	line-height: 19px;
	z-index:30;
}
#myModalLabel{
	position:relative;
	top:7px;
}
.hide{
    display:none;
}
.lable-pic{
    background: url(./common-icon-img.png) no-repeat;
}
.lable {
    background-position: -110px -48px;
}
.img{
    position:absolute;
    z-index:20;
    cursor:pointer;
}
.modal-title{
	color:#666666;
}
</style>
