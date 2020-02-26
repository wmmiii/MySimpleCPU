import state, { MEM_SIZE } from "./state";
import { instructions } from "./instructions";

export function loadProgram(binary: number[]) {
  const startAddress = MEM_SIZE - binary.length;
  for (let i = 0; i < binary.length; i++) {
    state.commit('setMemory', {index: startAddress + i, value: binary[i]});
  }
  state.commit('setProgramCounter', startAddress);
}

export function step() {
  const command = state.state.memory[state.state.programCounter];
  const args = getArgs(command);
  const opcode = args.splice(3, 1)[0];
  const instruction = instructions[opcode];
  instruction.execute(args);

  state.commit('setProgramCounter', state.state.programCounter + 1);
}

function getArgs(command: number) {
  const args: number[] = [];
  for (let i = 0; i < 0x4; i++) {
    args[i] = command >> (0x8 * i) & 0xFF;
  }
  return args;
}