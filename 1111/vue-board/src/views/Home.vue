<template>
  <div class="home">
      <Main :msg="msg"></Main>
  </div>
</template>

<script>
import Main from "@/components/Main"
export default {
    name: "Home",
    data(){
        return{
            msg: "안녕하세요 싸피 6기 입니다."
        }
    },
    components:{
        Main,
    }
}
</script>

<style>

</style>