<script setup>
import axiosInterceptor from '@/axiosInterceptor';
import { ref } from 'vue';
import { onMounted } from 'vue';
let test = ref('');
const testFunction = async () => {
    const response = await axiosInterceptor.post('/test', {
    });
    if (response.status === 200) {
        test.value = response.data;
        console.log("成功登录")
    }
}

onMounted(async () => {
    await testFunction();
});

</script>

<template>
    <div>
        <h1>Test</h1>
        <button :value="test" @click="testFunction">Test</button>
    </div>
</template>

<style scoped></style>