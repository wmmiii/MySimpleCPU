import { Instruction, instructions } from "./instructions";

const instructionMap: {[symbol: string]: Instruction} = {};

for (let instruction of instructions) {
  instructionMap[instruction.symbol] = instruction;
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
    const instruction = instructionMap[args[0]];
    if (instruction == null) {
      throw `Unrecognized instruction at line ${lineNumber}: ${args[0]}`;
    }
    let encoded = instruction.encodeArguments(args.slice(1));
    encoded += (instruction.opcode << (0x8 * 0x3));
    binary.push(encoded);
  }
  return binary;
}
