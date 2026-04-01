import { parseBytes } from './parse';

export function addBytes(a: string | number, b: string | number): number {
  return parseBytes(a) + parseBytes(b);
}

export function subtractBytes(a: string | number, b: string | number): number {
  const result = parseBytes(a) - parseBytes(b);
  if (result < 0) {
    throw new Error('Result cannot be negative');
  }
  return result;
}
