<template>
  <section>
    <el-table :data="users" highlight-current-row v-loading="listLoading" style="width: 100%;">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120" sortable>
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="100" sortable>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="100" sortable>
      </el-table-column>
      <el-table-column prop="brith" label="生日" width="120" sortable>
      </el-table-column>
      <el-table-column prop="address" label="地址" min-width="180" sortable>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
    <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group v-model="editForm.sex">
						<el-radio class="radio" :label="1">男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
				</el-form-item>
				<el-form-item label="生日">
					<el-date-picker type="date" placeholder="选择日期" v-model="editForm.brith"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址">
					<el-input type="textarea" v-model="editForm.address"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit">提交</el-button>
			</div>
		</el-dialog>
  </section>  
</template>

<script>
export default {
  data () {
    return {
      users: [],
      listLoading: false,
      total: 0,
      currentPage1: 1,
      editFormVisible: false,
      editForm: {
        id: 0,
        name: '',
        sex: -1,
        age: 0,
        brith: '',
        address: ''
      },
      editFormRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    formatter (row, column) {
      return row.address
    },
    filterTag (value, row) {
      return row.tag === value
    },
    handleEdit (index, row) {
      this.editFormVisible = true
      console.log(index, row)
      this.editForm.name = row.name
      if (row.sex === '男') {
        this.editForm.sex = 1
      } else if (row.sex === '女') {
        this.editForm.sex = 0
      }
      console.log(this.editForm.sex)
      this.editForm.age = row.age
      this.editForm.brith = row.brith
      this.editForm.address = row.address
    },
    handleDelete (index, row) {
      console.log(index, row)
      this.tableData.splice(index, 1)
      this.$message({
        message: '恭喜你，删除成功',
        type: 'success'
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
    },
    editSubmit: function () {
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then((index) => {
            console.log(this.editForm)
            console.log(index)
            this.editFormVisible = false
          })
        }
      })
    }
  },
  created () {
    this.$http.get('./api/user').then((response) => {
      this.users = response.data.result
      this.total = response.data.total
      console.log(response.data.result.length)
      this.users.forEach((item) => {
        if (item.sex === 1) {
          item.sex = '男'
        } else {
          item.sex = '女'
        }
      })
    })
  }
}
</script>
<style>
</style>
