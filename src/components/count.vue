<template>
  <div>
    {{ dataNum }}
    {{ getCount }}
    {{doneTodos}}
    <button @click="add()">add</button>
  </div>
</template>
<script>

export default {
  name: 'countComponent',
  props: ['num'],
  data() {
    return {
      dataNum : this.num,
      doneTodos: []
    }
  },
  created() {
    this.doneTodos = this.$store.getters.doneTodos
    console.log(this)
  },
  methods: {
    add() {
      console.log(this)
      this.dataNum++
      this.$store.commit('increment')
    }
  },
  computed: {
    getCount() {
      return this.$store.state.count
    }
  }
}
</script>
