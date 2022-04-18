<template>
  <div class="app-container">
    <h1>Simple Counter</h1>
    <div class="container">
      <div class="value">{{value}}</div>
      <div class="buttons">
        <button @click="increment()">+</button>
        <button @click="decrement()">-</button>
      </div>
    </div>
  </div>
</template>

<script>

// import { mapState } from 'vuex';
export default {
  name: 'AppCounter',
  props: {
    counter: {
      type: Number,
      default: 0
    }
  },
  components: {
  },
  // computed: {
  //   ...mapState('counter', {
  //     value: state => state.count,
  //   }),
  // },
  methods: {
    increment() {
      // this.$store.commit('counter/increment');
      this.$emit('increment');
    },
    decrement() {
      // this.$store.commit('counter/decrement');
      this.$emit('decrement');
    },
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  max-width: 400px;
  text-align: center;
  border: 1px solid gray;
  padding: 10px;
  margin: auto;
  margin-top: 100px;
  > h1 {
    margin-top: 0;
  }
  .container {
    .value {
      font-size: 25px;
      font-weight: 700;
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      > button {
        font-size: 20px;
        padding: 10px 20px;
      }
    }
  }
}
</style>
