import { parseBytes } from './parse';

export function isWithin(value: string | number, min: string | number, max: string | number): boolean {
  const v = parseBytes(value);
  const lo = parseBytes(min);
  const hi = parseBytes(max);
  return v >= lo && v <= hi;
}
