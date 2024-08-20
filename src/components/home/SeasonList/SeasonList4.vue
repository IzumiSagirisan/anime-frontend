<script setup>
import axiosInterceptor from '@/axiosInterceptor';
import router from '@/router';

var searchAnime = async (year, season) => {
    try {
        const response = await axiosInterceptor.get(`/anime/${year}/${season}`);
        console.log(response.status);
        response.data;
        if (response.status === 200) {
            router.push({
                path: `/SeasonAnime`,
                query: { year: year, season: season }
            });
        }
    } catch (error) {
        console.log("error", error);
        console.error("获取2021年秋季新番出错啦，请联系服务器管理员或重试！");
    }
};

</script>
<template>
    <div style="height: 100%">

        <div class="innerImageDiv">
            <img src="@/assets/season/秋图.png" @click="searchAnime(2021, 10)">

        </div>

        <div class="innerImageDiv">
            <img src="@/assets/season/夏图.png" @click="searchAnime(2021, 7)">
        </div>
        <div class="innerImageDiv">
            <img src="@/assets/season/春图.png" @click="searchAnime(2021, 4)">
        </div>
        <div class="innerImageDiv">
            <img src="@/assets/season/冬图.png" @click="searchAnime(2021, 1)">
        </div>
    </div>
</template>
<style src="@/assets/css/season.css" scoped></style>