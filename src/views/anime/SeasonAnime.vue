<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import RealHeader from '@/components/RealHeader.vue';

const route = useRoute();
const year = route.query.year;
const season = route.query.season;

console.log(`Year: ${year}, Season: ${season}`);
</script>

<template>
    <RealHeader></RealHeader>
    <div style="background-color: #aaa;">
        <article>
            <h1>{{ `${year}年${season}月新番表` }}</h1>



        </article>
    </div>

</template>

<style scoped>
h1 {
    text-align: center;
}

article {
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #FFF;
    border-radius: 15px;
    background-color: #fff;
}
</style>