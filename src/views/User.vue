<template>
  <div>
    <div class="pd-10">
      <el-input style="width: 200px" prefix-icon="el-icon-search" class="mr-5" v-model="username"></el-input>
      <el-button type="primary" class="mf-10" @click="getListPage()">搜索</el-button>
      <el-button type="warning" class="mf-10" @click="resert()">重置</el-button>
    </div>
    <div class="pd-10">
      <el-button type="primary" @click="toAdd()" class="el-icon-circle-plus-outline">
        添加</el-button>
      <el-popconfirm class="mf-5" confirm-button-text="删除" cancel-button-text="不用了" icon="el-icon-info" icon-color="red"
        title="确定删除这些数据吗？" @confirm="delList">
        <el-button type="danger" class="el-icon-remove-outline" slot="reference">
          批量删除
        </el-button>
      </el-popconfirm>

      <el-upload action="http://localhost:9090/user/import" :show-file-list="false" 
        :on-success="handleExcelImportSuccess" class="mr-5" style="display:inline-block">
        <el-button type="primary" class="el-icon-upload2" style="margin-left: 5px">
          导入</el-button>
      </el-upload>

      <el-button @click="exp()" type="primary" class="el-icon-download">
        导出
      </el-button>
    </div>

    <el-table border stripe :data="tableData" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="编号" width="80"> </el-table-column>
      <el-table-column prop="username" label="用户名" width="140">
      </el-table-column>
      <el-table-column prop="nickname" label="昵称" width="120">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"> </el-table-column>
      <el-table-column prop="phone" label="电话" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="" label="操作">
        <template slot-scope="scope">
          <el-button type="success" @click="toUpdate(scope.row)" class="el-icon-edit">
            编辑</el-button>

          <el-popconfirm class="mf-5" confirm-button-text="删除" cancel-button-text="不用了" icon="el-icon-info"
            icon-color="red" title="确定删除这条数据吗？" @confirm="del(scope.row.id)">
            <el-button type="danger" slot="reference" class="el-icon-document-delete">删除
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div style="padding: 10px">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
        :page-sizes="[2, 4, 8, 16]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>

    <el-dialog title="用户信息" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="form" label-width="100px" size="small">
        <el-form-item label="用户名">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        total: 0,
        pageNum: 1,
        pageSize: 2,
        username: "",
        form: {},
        multipleSelection: [],
        dialogFormVisible: false,
        collapseBtnClass: "el-icon-s-fold",
        isCollapse: false,
        sidewidth: 200,
        logonText: true,
      };
    },
    created() {
      this.getListPage();
    },

    methods: {
      //获取数据
      getListPage() {
        this.request
          .get(this.API.FIND_USER_PAGE, {
            params: {
              pageNum: this.pageNum,
              pageSize: this.pageSize,
              username: this.username,
            },
          })
          .then((res) => {
            console.log(res);
            this.tableData = res.data.records;
            this.total = res.data.total;
          });
      },
      save() {
        this.request.post(this.API.ADD_User, this.form).then((res) => {
          if (res.code == "CODE_200") {
            this.$message.success("保存成功");
            this.dialogFormVisible = false;
            this.getListPage();
          } else {
            this.$message.error("保存失败");
          }
        });
      },
      exp() {
        window.open(this.API.EXPORT_USER);
      },
      del(id) {
        this.request.delete(this.API.DELETE_USER + id).then((res) => {
          if (res.code == "CODE_200") {
            this.$message.success("删除成功");
            this.getListPage();
          } else {
            this.$message.error("删除失败");
          }
        });
      },
      //重置搜索框
      resert() {
        this.username = "";
        this.getListPage();
      },

      toUpdate(user) {
        this.form = user;
        this.dialogFormVisible = true;
      },
      toAdd() {
        this.dialogFormVisible = true;
        this.form = {};
      },

      delList() {
        let ids = this.multipleSelection.map((v) => v.id);
        console.log(ids);
        this.request
          .delete(this.API.DELETE_USERLIST, {
            data: ids
          })
          .then((res) => {
            if (res.code == "CODE_200") {
              this.$message.success("删除成功");
              this.getListPage();
            } else {
              this.$message.error("删除失败");
            }
          });
      },
      handleSelectionChange(val) {
        console.log(val);
        this.multipleSelection = val;
      },

      //翻页
      handleSizeChange(pageSize) {
        console.log(pageSize);
        this.pageSize = pageSize;
        this.getListPage();
      },
      handleCurrentChange(pageNum) {
        console.log(pageNum);
        this.pageNum = pageNum;
        this.getListPage();
      },
      //导入数据后刷新
      handleExcelImportSuccess() {
        this.$message.success("导入成功")
        this.load()
      }
    },
  };
</script>

<style>
</style>