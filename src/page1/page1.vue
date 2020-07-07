<template>
  <div>
    这是page1
    <count :num="1"/>
  </div>
</template>
<script>

import count from '../components/count.vue'
export default {
  components: {
    count
  }
}
</script>