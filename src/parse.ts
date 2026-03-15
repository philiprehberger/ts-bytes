import { KB, MB, GB, TB, PB, KiB, MiB, GiB, TiB, PiB } from './constants';

const UNIT_MAP: Record<string, number> = {
  b: 1,
  kb: KB,
  mb: MB,
  gb: GB,
  tb: TB,
  pb: PB,
  kib: KiB,
  mib: MiB,
  gib: GiB,
  tib: TiB,
  pib: PiB,
};

const PARSE_REGEX = /^\s*([\d.]+)\s*(b|kb|mb|gb|tb|pb|kib|mib|gib|tib|pib)?\s*$/i;

export function parseBytes(input: string | number): number {
  if (typeof input === 'number') {
    if (!Number.isFinite(input) || input < 0) {
      throw new Error(`Invalid byte value: ${input}`);
    }
    return Math.floor(input);
  }

  const match = input.match(PARSE_REGEX);
  if (!match) {
    throw new Error(`Invalid byte string: "${input}"`);
  }

  const value = parseFloat(match[1]);
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(`Invalid byte string: "${input}"`);
  }

  const unit = match[2] ? match[2].toLowerCase() : 'b';
  const multiplier = UNIT_MAP[unit];
  if (multiplier === undefined) {
    throw new Error(`Unknown unit: "${match[2]}"`);
  }

  return Math.floor(value * multiplier);
}
