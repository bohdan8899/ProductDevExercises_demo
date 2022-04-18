import { createStore } from 'vuex';
import todo from './modules/todo';
import calculator from './modules/calculator';
import counter from './modules/counter';

export default createStore({
  modules: {
    todo,
    calculator,
    counter,
  },
});
