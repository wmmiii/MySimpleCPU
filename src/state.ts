import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const NUM_REGISTERS = 8;
const MEM_SIZE = 1024;

const state = {
  registers: <number[]>[],
  memory: <number[]>[],
};

for (let i = 0; i < NUM_REGISTERS; i++) {
  state.registers[i] = 0;
}

for (let i = 0; i < MEM_SIZE; i++) {
  state.memory[i] = 0;
}

interface SetValuePayload {
  index: number;
  value: number;
}

export default new Vuex.Store({
  state: state,
  mutations: {
    setRegister(state, payload: SetValuePayload) {
      Vue.set(state.registers, payload.index, payload.value);
    }
  }
});
