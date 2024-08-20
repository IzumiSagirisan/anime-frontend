<script setup>
import { ref, onMounted } from 'vue';
import axiosInterceptor, { token } from '../axiosInterceptor';
import { useRouter } from 'vue-router';


const username = ref('');
const password = ref('');
const captcha = ref('');
const captchaImgSrc = ref('');
const router = useRouter();

const login = async () => {
    try {
        const response = await axiosInterceptor.post('/api/login', {
            username: username.value,
            password: password.value,
            captcha: captcha.value
        });

        if (response.status === 200) {
            token.value = response.data.token;
            console.log(response)
            switch (response.data.role) {
                case '[ROLE_USER]':
                    router.push('/user');
                    break;
                case '[ROLE_SUPERUSER]':
                    router.push('/user');
                    break
                case '[ROLE_MANAGER]':
                    router.push('/manager');
                    break;
                case '[ROLE_ADMIN]':
                    router.push('/superAdmin');
                    break;
                default:
                    router.push('/login');
            }
        }
    } catch (error) {
        alert('登录失败, 出现了其他错误');
        console.error("error", error);
    }
};

const getCaptchaUrl = async () => {
    try {
        const response = await axiosInterceptor.get('/api/captcha.jpg', { responseType: 'blob' });
        if (response.status === 200) {
            const url = URL.createObjectURL(response.data)
            captchaImgSrc.value = url;
        }
    } catch (error) {
        console.log("error", error);
        console.error("获取验证码出错啦，请联系服务器管理员或重试！");
    }
};

onMounted(async () => {
    await getCaptchaUrl();
});
</script>

<template>

    <head>
        <!-- <link rel="preload" href="/api/captcha.jpg" as="image"> -->
    </head>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required />
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
            <label for="captcha">Captcha:</label>
            <input type="text" id="captcha" v-model="captcha" required />
            <img :src="captchaImgSrc" alt="captcha" @click="getCaptchaUrl" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>



<style scoped>
.login {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

h1 {
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 10px;
}

input {
    padding: 10px;
    margin-bottom: 20px;
}

button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
