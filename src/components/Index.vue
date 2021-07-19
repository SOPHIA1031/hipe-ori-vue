<template>
  <div>
    <el-container style="width: 70%; margin: auto">
      <el-aside>
        <el-menu
          default-active="/upload"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
          style="height: 700px"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>指纹库</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/upload">
                <i class="el-icon-upload2"></i>
                <span slot="title">上传</span>
              </el-menu-item>
              <el-menu-item index="/query">
                <i class="el-icon-search"></i>
                <span slot="title">查询</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">地标信息库</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
</style>
