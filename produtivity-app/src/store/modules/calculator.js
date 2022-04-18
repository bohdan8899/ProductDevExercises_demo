// initial state
const state = () => ({
  value: "",
  operator: null,
  previousValue: "",
})

// getters
const getters = {
}

// actions
const actions = {
  calc ({ commit }, n) {
    /* Append value */
    if (!isNaN(n) || n === ".") {
      commit('input', n)
    }
    /* Clear value */
    if (n === "C") {
      commit('reset')
    }
    /* Percentage */
    if (n === "%") {
      commit('percent')
    }
    /* Operators */
    if (["/", "*", "-", "+"].includes(n)) {
      commit('operate', n)
    }
    /* Calculate result using the eval function */
    if (n === "=") {
      commit('result')
    }
  }
}

// mutations
const mutations = {
  input (state, n) {
    state.value += n + "";
  },
  reset(state) {
    state.value = "";
  },
  percent(state) {
    state.value = state.value / 100 + "";
  },
  operate(state, op) {
    state.operator = op;
    state.previousValue = state.value;
    state.value = "";
  },
  result(state) {
    state.value = eval(
      state.previousValue + state.operator + state.value
    );
    state.previousValue = "";
    state.operator = null;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
