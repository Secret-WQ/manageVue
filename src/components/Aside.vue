<template>
  <el-menu :default-openeds="['1', '3']" style="height: 100%" background-color="rgb(48,65,86)" text-color="#fff"
    active-text-color="#FFFF00" :collapse-transition="false" router @select="find()">
    <div style="height: 60px; line-height: 60px; text-align: center">
      <img src="../assets/logo.png" style="height: 15px" />
      <b style="color: white; margin-left: 5px" v-show="logonText">后台管理系统</b>
    </div>

    <!-- <el-submenu index="1">
      <template slot="title"><i class="el-icon-house"></i>
        <span>主页</span>
      </template> 

    </el-submenu>-->

    <el-menu-item index="/manage/home">
      <i class="el-icon-house"></i>
      <span slot="title">主页</span>
    </el-menu-item>

    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>
        <span>系统管理</span>
      </template>

      <el-menu-item-group>

        <el-menu-item index="/manage/user"><i class="el-icon-s-custom"></i>
          <span>用户管理</span>
        </el-menu-item>

        <el-menu-item index="/manage/role"><i class="el-icon-user-solid"></i>
          <span>角色管理</span>
        </el-menu-item>

        <el-menu-item index="/manage/menu"><i class="el-icon-s-grid"></i>
          <span>菜单管理</span>
        </el-menu-item>

        <el-menu-item index="/manage/file"><i class="el-icon-document"></i>
          <span>文件管理</span>
        </el-menu-item>


      </el-menu-item-group>
    </el-submenu>


  </el-menu>
</template>

<script>
  export default {
    name: "Aside",
    props: {
      //iscollapse: Boolean,
      logonText: Boolean,
    },
    methods: {
      find() {


      },
    },
  };
</script>

<style>
</style>