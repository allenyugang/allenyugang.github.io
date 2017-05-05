<template>
  <div class="col-md-6 pic_show">
    <div class="register_div">
      <div class="upfilebox">
          <input class="form-control bussinessLicense" @change="readFile($event)" type="file" id="bussinessLicense" name="bussinessLicense">
          <label class="lable lable-pic"></label>
      </div>
      <div ref="registerShow" v-html = "datas" @click="show_img_modal">
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
      this.reader.onload = function (e) {
        let _this = this
        window.sessionStorage['result'] = _this.result
      }
      let url = window.sessionStorage['result']
      this.datas = '<img class="img" data-name=' + this.fileName + ' src="' + url + '" alt="" width="102" height="102"/>'
    },
    show_img_modal () {
      var html = ''
      let cur = window.sessionStorage['result']
      html += '<div class="modal fade" id="repay-pic" ref="repay_pic" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'
      html += '<div class="modal-dialog">'
      html += '<div class="modal-content">'
      html += '<div class="modal-header">'
      html += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'
      html += '<h4 class="modal-title" id="myModalLabel">图片预览</h4>'
      html += '</div>'
      html += '<div class="modal-body center">'
      html += '<img src="' + cur + '" width="300px" height="auto">'
      html += '<p class="center">点击下载图片：<a href="' + cur + '" download="' + this.fileName + '">' + this.fileName + '</a></p>'
      html += '</div>'
      html += '<div class="modal-footer">'
      html += '<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>'
      html += '</div>'
      html += '</div>'
      html += '</div>'
      html += '</div>'
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
