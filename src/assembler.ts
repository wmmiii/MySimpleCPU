import { Instruction, instructions, ArgumentType } from "./instructions";

const instructionMap: {[symbol: string]: [number, Instruction]} = {};

for (let i = 0; i < instructions.length; i++) {
  const instruction = instructions[i];
  instructionMap[instruction.symbol] = [i, instruction];
}

export function assemble(program: string): number[] {
  const binary: number[] = [];
  const lines = program.split('\n');
  for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
    const line = lines[lineNumber].trim();
    if (line.length == 0) {
      continue;
    }
    const args = line.split(' ');
    const [opcode, instruction] = instructionMap[args[0]];
    if (instruction == null) {
      throw `Unrecognized instruction: ${args[0]}`;
    }
    args.splice(0, 1);
    let encoded = encodeArguments(args, instruction.arguments);

    encoded += (opcode << (0x8 * 0x3));
    binary.push(encoded);
  }
  return binary;
}

function encodeArguments(args: string[], types: ArgumentType[]): number {
  if (args.length != types.length) {
    throw `Incorrect number of arguments: got ${args.length}, expected ${types.length}`;
  }

  let encoded = 0;

  for (let i = 0; i < types.length; i++) {
    const arg = parseInt(args[i], 16);
    if (arg > 0xFF || arg < 0) {
      throw `Argument must be in the range 0x00 to 0xFF: ${arg}`;
    }
    encoded += (arg << (0x8 * i));
  }

  return encoded;
}
