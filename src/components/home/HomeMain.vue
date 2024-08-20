<script setup>
import SeasonList1 from './SeasonList/SeasonList1.vue';
import SeasonList2 from './SeasonList/SeasonList2.vue';
import SeasonList3 from './SeasonList/SeasonList3.vue';
import SeasonList4 from './SeasonList/SeasonList4.vue';


</script>

<template>
    <article>
        <h1>AC's Anime List </h1>
        <el-row :gutter="20">
            <el-col :span="11" :offset="1">
                <div class="innerDiv">
                    <h2>2024 年</h2>
                    <SeasonList1></SeasonList1>
                </div>
            </el-col>
            <el-col :span="11">
                <div class="innerDiv">
                    <h2>2023 年</h2>
                    <SeasonList2></SeasonList2>
                </div>
            </el-col>
        </el-row>

        <!-- 新番第二行 -->
        <el-row :gutter="20">
            <el-col :span="11" :offset="1">
                <div class="innerDiv">
                    <h2>2022 年</h2>
                    <SeasonList3></SeasonList3>
                </div>
            </el-col>
            <el-col :span="11">
                <div class="innerDiv">
                    <h2>2021 年</h2>
                    <SeasonList4></SeasonList4>
                </div>
            </el-col>
        </el-row>

    </article>


</template>

<style scoped>
h1 {
    text-align: center;
    font-size: 40px;
    color: #aaa;
    margin-top: 25px;
}

h2 {
    text-align: center;
    font-size: 25px;
    color: #222;
    padding: 0;
    margin: 15px;
    font-family: "Arial", sans-serif;
}

img {
    margin: 0 auto;
    display: block;
    margin-left: 5%;
    text-align: center;
    width: 95%;
}

.innerImageDiv {
    text-align: center;
    margin: auto;
    padding: 0;
    /* height: 90px; */
    width: 100%;

    background-color: #FFF;
}

article {
    margin: 0 auto;
    /* flex-shrink: 0; */
    /* margin: 10px; */
    /* padding: 20px 20px;
    height: 100%;
    width: 100%;

    background-color: #FFF; */
    /* display: flex; */
    display: flex;
    /* justify-content: center; */
    max-width: 1100px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100%; */
    /* margin: 10px; */
    padding: 20px 20px;
    background-color: #FFF;
}

.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
    /* height: 600px; */
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

template {
    height: 100%;
}

.innerDiv {
    border: 3px solid #aaa;
    height: 100%;
    width: 100%;
    /* background-color: #000; */
    border-radius: 15px;
    max-width: 500px;
}
</style>