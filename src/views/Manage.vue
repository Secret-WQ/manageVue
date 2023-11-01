<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-aside
        :width="sidewidth + 'px'"
        style="background-color: rgb(238, 241, 246); height: 100%"
      >
        <Aside  :logonText="logonText"></Aside>
      </el-aside>

      <el-container>
        <el-header>
          <Header
            :collapseBtnClass="collapseBtnClass"
            :collapse="collapse"
          ></Header>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-header {
  background-color:white;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";
export default {
  data() {
    return {
      collapseBtnClass: "el-icon-s-fold",
      isCollapse: false,
      sidewidth: 200,
      logonText: true,
    }
  },
  components: {
    Aside,
    Header,
  },
  methods: {
    collapse() {
      //点击收缩按钮触发
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        this.sidewidth = 55   ;
        this.collapseBtnClass = "el-icon-s-unfold";
        this.logonText = false;
      } else {
        this.sidewidth = 200;
        this.collapseBtnClass = "el-icon-s-fold";
        this.logonText = true;
      }
    },
  },
};
</script>