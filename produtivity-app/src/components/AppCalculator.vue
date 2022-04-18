<template>
  <div class="app-container">
    <div class="output">
      <div class="outputCalc">{{ value || 0 }}</div>
    </div>
    <div class="buttons">
      <div
        class="button"
        v-for="n in btnArr"
        :key="n"
        :class="{ operator: ['C', '*', '/', '-', '+', '%', '='].includes(n) }"
      >
        <div class="btn" @click="calc(n)">
          {{ n }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  data() {
    return {
      btnArr: ["C", "*", "/", "-", "7", "8", "9", "+", "4", "5", "6", "%", "1", "2", "3", "=", "0", "."],
    };
  },
  computed: {
    ...mapState('calculator', {
      value: state => state.value,
    }),
  },
  methods: {
    ...mapActions('calculator', [
      'calc'
    ]),
  },
};
</script>

<style scoped>
.app-container {
  margin-top: 100px;
  text-align: center;
}
.output {
  text-align: right;
  width: min(300px, 80%);
  margin: 10px auto;
  border: 0.5px solid rgb(255, 198, 124);
}
.outputCalc {
  background-color: rgb(255, 209, 148);
  padding: 15px;
  border-radius: 3px;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  width: min(300px, 80%);
  border: 0.2px solid rgb(255, 198, 124);
  border-radius: 4px;
  align-items: center;
  background-color: antiquewhite;
  justify-content: center;
  margin: 10px auto;
  gap: 5px;
}
.button {
  background-color: rgb(255, 209, 148);
  padding: 6px;
  border-radius: 3px;
  margin: 4px;
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.button:hover {
  background-color: rgb(238, 167, 75);
  color: #000;
}
.operator {
  background-color: rgb(238, 167, 75);
  color: #000;
}
.operator:hover {
  background-color: rgb(255, 209, 148);
}
.MyId:hover {
  cursor: pointer;
  filter: brightness(130%);
}
</style>