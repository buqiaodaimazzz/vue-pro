<template>
   <div>
        <form @submit.prevent="login">
            <van-field v-model="username" label="用户:" />
            <van-field v-model="password" type="password" label="密码：" />
            <van-button type="primary">登录</van-button>
        </form>
    </div>
</template>

<script>
import Vue from 'vue'
import { Button, Field, Dialog } from 'vant'

import { instance2 } from "@/utils/http"
Vue.use(Button)
Vue.use(Field)

export default {
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    login () {
      if (!this.username.trim() || !this.password.trim()) {
        Dialog({
          message: "用户名或者密码必须要传！",
          closeOnClickOverlay:true
        })


        return
      }
      instance2.post("/api/login", {
        username:this.username,
        password:this.password
      }).then(res => {
        // 将token保存到本地存储里面去
        localStorage.setItem("token", res.token)
        // 跳转到个人中心
        this.$router.replace("/center")
      }).catch(err => {
        Dialog({ message: err, closeOnClickOverlay:true })
      })
    }
  }
}
</script>

<style lang="scss" scoped>

    .login{
        padding: 10px;
        margin-top:1.46rem;
        button{
            width:100%;
            margin-top:10px;
        }
    }

    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
</style>