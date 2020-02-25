import Vue from 'vue';
import Vuex from 'vuex';

export const NUM_REGISTERS = 8;
export const MEM_SIZE = 1024;

Vue.use(Vuex);

const state = {
  registers: <number[]>[],
  memory: <number[]>[],
  programCounter: 0,
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
    },
    setMemory(state, payload: SetValuePayload) {
      Vue.set(state.memory, payload.index, payload.value);
    },
    setProgramCounter(state, address: number) {
      state.programCounter = address;
    },
    incrementProgramCounter(state) {
      state.programCounter++;
    }
  }
});
