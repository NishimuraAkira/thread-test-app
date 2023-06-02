<template>
  <div class="about">
    <div>
      <h1>This is an about page</h1>
    </div>
    <br />
    <div>Counter: {{ myCounter }} ({{ beforeCounter }})</div>
  </div>
</template>

<script>
export default {
  name: 'aboutPage',
  data() {
    return {
      myCounter: 0,
      beforeCounter: 0
    }
  },
  beforeRouteEnter() {
    console.log('beforeRouteEnter')
  },
  beforeRouteUpdate() {
    console.log('beforeRouteUpdate')
  },
  mounted() {
    this.runTask()
  },
  methods: {
    runTask() {
      const ms = parseInt(Math.random() * 400 + 100)
      setTimeout(
        function () {
          this.myCounter = this.countUp()
          if (this.myCounter - this.beforeCounter === 1) {
            this.beforeCounter = this.myCounter
            this.runTask()
          } else {
            this.myCounter = `[!!!] Stop: ${this.myCounter} != ${this.beforeCounter}`
            console.log(this.myCounter)
          }
        }.bind(this),
        ms
      )
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
