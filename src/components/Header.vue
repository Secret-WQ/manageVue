<template>
  <div style="font-size: 12px; line-height: 60px; display: flex" class="headColor">
    <div style="flex 1   ; font-size: 18px;">
      <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>

      <!-- <el-breadcrumb separator="/" style="display:inline-block" class="mf-10">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        </el-breadcrumb> -->
    </div>

    <el-dropdown style="width: 100%; cursor: pointer; text-align: right">
      <div style="display: inline-block">
        <!--  src="../assets/weini.webp" -->
        <!-- :src=" '../assets/'+ user.avatar_url" -->
        <!-- :src="require('@/assets/img/' + imgName)" -->

        <img :src="form.avatar_url" alt="" style="
          width: 30px
          border-radius: 50%
          position:relative
          top:10px
          right:5px
        " />


        <span>
          {{ form.nickname }}
          <i class="el-icon-caret-bottom" style="margin-left: 5px"> </i>
        </span>
      </div>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <span style="text-decoration:none ;" @click="toPerson">个人信息</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <span style="text-decoration:none ;" @click="logout">退出登录</span>
          <!--   <router-link to="/login"> 退出登录</router-link> -->
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import APIUtils from '@/Utils/APIUtils';
  export default {
    name: "Header",
    props: {
      collapseBtnClass: String,
      collapse: Function,
    },

    created() {
      //console.log(this.user.username)
      this.request.get(APIUtils.FIND_USER_NAME + this.user.username).then(res => {
        this.form = res.data  
        // console.log(res.data)
         
          //this.imgName = this.form.avatar_url
        })

        
    },
    methods: {
      fun() {
        //console.log(this.user.avatar_url)
        console.log(this.user.avatar_url)
        this.imgName = this.form.avatar_url
      },
      logout() {
        this.$router.push("/")
        localStorage.removeItem("user")
        this.$message.success("退出成功")

      },
      toPerson() {
        this.$router.push("/manage/person")

      }

    },
    data() {
      return {
        form: "",
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
      };
    },
  };
</script>

<style></style>