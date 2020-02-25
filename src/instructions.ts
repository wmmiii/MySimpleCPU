import state from './state';

export interface Instruction {
  symbol: string;
  usage: string;
  opcode: number;
  encodeArguments(args: string[]): number;
  execute(args: number): void;
}

export const instructions: Instruction[] = [
  {
    symbol: 'NOP',
    usage: 'NOP',
    opcode: 0x00,
    encodeArguments(args: string[]): number {
      if (args.length > 2) {
        throw 'Incorrect number of arguments!';
      }
      return 0x00;
    },
    execute(_: number): void {}
  },
  {
    symbol: 'LD',
    usage: 'LD memory register',
    opcode: 0x01,
    encodeArguments(args: string[]): number {
      const intArgs = args.map((arg) => parseInt(arg));
      if (intArgs.length != 2) {
        throw 'Incorrect number of arguments!';
      }
      return asPosition(0, intArgs[0]) + asPosition(1, intArgs[1]);
    },
    execute(args: number): void {
      const memory = fromPosition(0, args);
      const register = fromPosition(1, args);
      const value = state.state.memory[memory];
      state.commit('setRegister', {index: register, value: value});
    }
  }
];

function asPosition(index: number, arg: number) {
  return (arg & 0xFF) << (0x8 * index);
}

function fromPosition(index: number, args: number) {
  return args >> (0x8 * index) & 0xFF;
}