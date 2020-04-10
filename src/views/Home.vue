<template>
  <div class="home">
   <Three_head :msg="msg"></Three_head>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Three_head from '@/components/base/three_head.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Three_head
  },
  data(){
    return {
      msg:'这是一条不可编辑的信息。'
    }
  }
}
</script>
