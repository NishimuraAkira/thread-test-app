export default {
  beforeCreate() {
    console.log('lifecycle: beforeCreate')
  },
  created() {
    console.log('lifecycle: created')
  },
  beforeMount() {
    console.log('lifecycle: beforeMounte')
  },
  mounted() {
    console.log('lifecycle: mounted')
  },
  beforeUpdate() {
    console.log('lifecycle: beforeUpdate')
  },
  updated() {
    console.log('lifecycle: updated')
  },
  activated() {
    console.log('lifecycle: activated')
  },
  deactivated() {
    console.log('lifecycle: deactivated')
  },
  beforeUnmount() {
    console.log('lifecycle: beforeUnmount')
  },
  unmounted() {
    console.log('lifecycle: unmounted')
  }
}
