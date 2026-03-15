import { parseBytes } from './parse';

export function isLargerThan(a: string | number, b: string | number): boolean {
  return parseBytes(a) > parseBytes(b);
}

export function isSmallerThan(a: string | number, b: string | number): boolean {
  return parseBytes(a) < parseBytes(b);
}
