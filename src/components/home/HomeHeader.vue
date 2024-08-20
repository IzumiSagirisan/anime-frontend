<script setup>
// import { ref, onMounted } from 'vue';
// import axiosInterceptor, { token } from '../axiosInterceptor';

// const username = ref('');

</script>

<template>
    <div class="aType">
        <span class="placeholder"></span>
        <a href="/" rel="start">
            <h1>AC的新番资讯站</h1>
        </a>
        <span class="placeholder"></span>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

h1 {
    margin: 0;
    color: #FFFFFF;
    text-align: center;
    /* font-size: 35px; */
    line-height: 1;
    height: 30px;
    font-size: 30px;
    /* font-weight: normal; */
    /* justify-content: center;
    align-items: center; */
    font-family: "Microsoft YaHei", sans-serif;
    font-weight: normal;
}

.aType {
    position: relative;
    padding: 0;
    margin: 0;
    bottom: 0;
    /* display: inline-block; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);

    /* height: 36px; */
}

a {
    text-decoration: none;
}

.placeholder {
    display: inline-block;
    text-align: center;
    height: 22px;
}
</style>