<template>
  <b-tr>
    <b-td>{{ qnano }}</b-td>
    <b-th class="text-left">
      <router-link
        :to="{ name: 'QnaView', params: { arrindex: index } }">{{ title }}</router-link
      >
    </b-th>
    <b-td>{{ hit }}</b-td>
    <b-td>{{ writer}}</b-td>
    <b-td>{{ regtime }}</b-td>
  </b-tr>
</template>

<script>
export default {
  name: "qnaListRow",
  props:{
    qnano: Number,
    title: String,
    writer: String,
    hit: Number,
    regtime: String,
    index: Number,
  },
}
</script>

<style>

</style>