import state, { MEM_SIZE } from "./state";

export function loadProgram(binary: number[]) {
  const startAddress = MEM_SIZE - binary.length;
  for (let i = 0; i < binary.length; i++) {
    state.commit('setMemory', {index: startAddress + i, value: binary[i]});
  }
  state.commit('setProgramCounter', startAddress);
}