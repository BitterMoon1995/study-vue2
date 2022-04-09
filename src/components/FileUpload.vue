<template>
  <div>
    <el-upload
        class="upload-demo"
        action="http://221.10.90.206:8840/ms/file/upload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :before-upload="beforeUpload"
        :data=extraData
        multiple
        :limit="9"
        :on-exceed="handleExceed"
        :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  data() {
    return {
      fileList: [],
      file: null,
      //	上传时附带的额外参数（:data），必须为对象。对应后端代码：
      //  @RequestParam(value = "fileName", required = false) String fileName,
      //  @RequestParam("file") MultipartFile file
      extraData: {
        fileName: ''
      }
    };
  },
  methods: {
    handleChange(file, fileList) {

    },
    handleRemove(file, fileList) {
    },
    handlePreview(file) {
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
    //在这里设置额外参数fileName
    beforeUpload(file) {
      console.log(file)
      this.extraData.fileName = file.name
      return true
    }
  }
}
</script>

<style scoped>

</style>
