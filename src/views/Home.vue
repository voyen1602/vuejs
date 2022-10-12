<template>
  <div class="container text-center">
    <h3>Hello World</h3>
    <Counter 
      :year="2022"
      :month="9"
      :date="22"
      :hour="10"
      :minute="30"
      :second="0"
      :millisecond="0"
    />
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";
export default {
  components:{
    Counter
  }
}
</script>

<style lang="scss" scoped>

</style>