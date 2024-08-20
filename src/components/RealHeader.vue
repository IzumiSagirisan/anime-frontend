<script setup>
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
import { token } from '@/axiosInterceptor';
var login;
login = () => {
    console.log('login')
    console.log(token)
    if (token != null) {
        window.location.href = '/user'
    } else {
        window.location.href = '/login'
    }

}
</script>

<template>
    <el-menu :default-active="-1" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect"
        background-color="#222">
        <el-menu-item index="0">
            <a href="/" rel="start">
                <h1>AC's Anime</h1>
            </a>
        </el-menu-item>

        <el-menu-item index="1">
            <img src="/src/assets/阿卡林.webp" alt="none" @click="login" />
        </el-menu-item>
    </el-menu>
</template>

<style scoped>
.el-menu--horizontal>.el-menu-item:nth-child(1) {
    /* margin-left: 200px; */
    margin-right: auto;
}

h1 {
    margin: 0;
    color: #FFFFFF;
    text-align: center;
    /* font-size: 35px; */
    line-height: 1;
    height: 25px;
    font-size: 25px;
    /* font-weight: normal; */
    /* justify-content: center;
    align-items: center; */

    /* font-family: 'SimHei', 'Arial', sans-serif; */
    font-weight: normal;
}

a {
    text-decoration: none;
}

img {
    color: #FFF;
    background-color: #FFF;
    padding: 0;
    border-color: #222;
    /* border: 2px; */
    height: 110%;
    /* width: 80%; */
}
</style>