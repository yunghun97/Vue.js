<template>
    <div>
        <h2>{{msg}}</h2>
        <ul>
            <li><router-link :to="{name: 'BoardWrite'}">글 등록</router-link></li>
            <li><router-link :to="{name: 'BoardList'}">글 목록</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Main",
    props: {
        msg: {type :String, required: true} // 타입, required(반드시 넘어와야 한다.)
    }

}
</script>

<style>

</style>