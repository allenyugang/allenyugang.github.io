<template>
  <div class="col-md-6 pic_show">
    <div class="register_div">
      <div class="upfilebox">
          <input class="form-control bussinessLicense" @change="readFile($event)" type="file" id="bussinessLicense" name="bussinessLicense">
          <label class="lable lable-pic"></label>
      </div>
      <div ref="registerShow" v-html = "datas">
      </div>
    </div>
  </div>
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
      datas: ''
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
      let result = ''
      this.reader.onload = function (e) {
        let _this = this
        result = _this.result
      }
      this.datas = "<img class='img' data-name=" + this.fileName + " :src=" + result + " width='102' height='102'/>"
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
