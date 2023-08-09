export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    countUp() {
      this.counter++
      return this.counter
    }
  }
}
