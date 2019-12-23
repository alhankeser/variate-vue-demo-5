<template>
  <div id="home">
    <HelloWorld :msg="headline"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapVariables } from '@variate/vue';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
        ...mapVariables({
            headline: 'Default Headline',
        }),
    },
}
</script>

<style>

</style>
