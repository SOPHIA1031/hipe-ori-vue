<template>
  <div id="container">
    <el-card id="myCard">
      <el-form label-width="150px">
        <el-form-item label="Building Name">
          <el-select v-model="buildName" placeholder="请选择类型">
            <el-option
              v-for="item in buildNames"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Floor">
          <el-select v-model="floor" placeholder="请选择类型">
            <el-option
              v-for="item in floors"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Type">
          <el-select v-model="typeValue" placeholder="请选择类型">
            <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Encryption">
          <el-radio v-model="encrypt" label="1">是</el-radio>
          <el-radio v-model="encrypt" label="0">否</el-radio>
        </el-form-item>
        <el-form-item label="File">
          <el-upload
            ref="upload"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :auto-upload="false"
            :file-list="fileList"
            :on-change="handleChange"
          >
            <el-button size="small" type="primary">选取文件</el-button>
          </el-upload>
        </el-form-item>
        <el-button type="primary" id="btn" @click="submit()">提交</el-button>
      </el-form>
    </el-card>

    <el-table :data="tableData" border id="myTable">
      <el-table-column
        prop="buildName"
        label="Building Name"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="floor" label="Floor" width="180" align="center">
      </el-table-column>
      <el-table-column prop="type" label="Type" width="180" align="center">
      </el-table-column>
      <el-table-column
        prop="encryption"
        label="Encryption"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="fileName" label="File" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import axios from '../request'
export default {
  data () {
    return {
      tableData: [],
      buildNames: [{
        value: '1',
        label: 'shilintong'
      }],
      buildName: '',
      floors: [
        {
          value: '1',
          label: 'floor_1'
        }
      ],
      floor: '',
      types: [
        {
          value: '1',
          label: 'wifi'
        },
        {
          value: '2',
          label: 'ble'
        },
        {
          value: '3',
          label: '地磁'
        },
        {
          value: '4',
          label: '图像'
        }
      ],
      typeValue: '',
      fileName: null,
      fileList: null,
      encrypt: '1'
    }
  },
  methods: {
    // get building list data
    async getData () {
      // const { data: res } = await this.$http.get('indoor/building/add')

    },
    async submit () {
      // 表格添加行
      var obj = { buildName: '', floor: '', type: this.typeValue, encryption: '', fileName: this.fileName }
      var i
      for (i = 0; i < this.buildNames.length; i++) {
        if (this.buildName === this.buildNames[i].value) {
          obj.buildName = this.buildNames[i].label
        }
      }
      for (i = 0; i < this.floors.length; i++) {
        if (this.floor === this.floors[i].value) {
          obj.floor = this.floors[i].label
        }
      }
      for (i = 0; i < this.types.length; i++) {
        if (this.typeValue === this.types[i].value) {
          obj.type = this.types[i].label
        }
      }
      if (this.encrypt === '1') {
        obj.encryption = '是'
      } else {
        obj.encryption = '否'
      }
      this.tableData.push(obj)

      // 上传文件
      var data = {}
      var url = ''
      if (this.typeValue === '1') {
        // this.$refs.upload.submit()
        url = 'localhost:80/wifi/' + obj.buildName + '/1'
        console.log('url', url)
        data = await this.$http.post(url)
      } else if (this.typeValue === '2') {
        data = await this.$http.post('127.0.0.1:80/ble/' + obj.buildName)
      } else if (this.typeValue === '3') {
        data = await this.$http.post('127.0.0.1:80/mag/' + obj.buildName + obj.floor)
      } else if (this.typeValue === '4') {
        data = await this.$http.post('127.0.0.1:80/pic/' + obj.buildName)
      }
      console.log('data', data)
      // if (data.meta.status === 200) {
      //   this.$message.success('上传成功')
      // } else {
      //   this.$message.err('上传失败')
      // }
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleChange (file, fileList) {
      this.fileName = file.name
      this.fileList = fileList
    }
  },
  created () {
    // this.getData()
  }
}
</script>

<style scoped>
#container {
  width: 60%;
  margin: auto;
}
#myCard {
  padding: 25px 320px;
}
#btn {
  margin-bottom: 10px;
  float: right;
}

#myTable {
  margin-top: 60px;
}
</style>
