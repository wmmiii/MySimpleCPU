import state from './state';

export enum ArgumentType {
  Immediate = 'val',
  Memory = 'mem',
  Register = 'reg',
}

export interface Instruction {
  symbol: string;
  description: string;
  arguments: ArgumentType[];
  execute(args: number[]): void;
}

export const instructions: Instruction[] = [
  {
    symbol: 'NOP',
    description: 'Does not perform any operation.',
    arguments: [],
    execute(): void {}
  },
  {
    symbol: 'SET',
    description: 'Sets an immediate value into a register.',
    arguments: [ArgumentType.Immediate, ArgumentType.Register],
    execute(args: number[]): void {
      const value = args[0];
      const register = args[1];
      state.commit('setRegister', {index: register, value: value});
    }
  },
  {
    symbol: 'LD',
    description: 'Loads a value from a memory address into a register.',
    arguments: [ArgumentType.Memory, ArgumentType.Register],
    execute(args: number[]): void {
      const memory = args[0];
      const register = args[1];
      const value = state.state.memory[memory];
      state.commit('setRegister', {index: register, value: value});
    }
  },
  {
    symbol: 'STR',
    description: 'Stores a value from a register to a memory address.',
    arguments: [ArgumentType.Register, ArgumentType.Memory],
    execute(args: number[]): void {
      const register = args[0];
      const memory = args[1];
      const value = state.state.registers[register];
      state.commit('setMemory', {index: memory, value: value});
    }
  },
  {
    symbol: 'ADD',
    description: 'Adds the values of two registers and stores them into the third.',
    arguments: [ArgumentType.Register, ArgumentType.Register, ArgumentType.Register],
    execute(args: number[]): void {
      const a = state.state.registers[args[0]];
      const b = state.state.registers[args[1]];
      state.commit('setRegister', {index: args[2], value: a + b});
    }
  }
];
