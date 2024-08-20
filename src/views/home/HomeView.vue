<script setup>
import HomeHeader from '@/components/home/HomeHeader.vue'
import HomeMain from '@/components/home/HomeMain.vue'
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HomeHeader />
      </el-header>
      <el-container class="main-container">
        <!-- <el-aside width="200px">Aside</el-aside> -->
        <el-main>
          <HomeMain></HomeMain>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<style>
body {
  padding: 0;
  margin: 0;
  margin-top: 0%;
  height: 100%;
}

header {
  height: 80px;
  background-color: #222222;
}

main {
  text-align: center;
  background-color: #DDDDDD;
  height: 100%;
}

section {
  height: 100%;
}

div {
  height: 100%;
}

html {
  height: 100%;
}

template {
  height: 100%;
}

.el-container {
  /* height: 100%; */
  width: 100%;
  text-align: center;
  /* display: flex;
  flex: auto; */
}

.el-main {
  text-align: center;
  padding: 8px;
  height: 100%;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.common-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;

}

/* el-main {
  padding: 0;
  margin: 0;
  bottom: 0;
} */
</style>
