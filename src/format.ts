import type { FormatOptions, ByteUnit } from './types';
import { DECIMAL_UNITS, BINARY_UNITS, DECIMAL_SIZES, BINARY_SIZES } from './constants';

export function formatBytes(bytes: number, options: FormatOptions = {}): string {
  const { binary = false, precision = 2, locale, unit } = options;

  if (!Number.isFinite(bytes) || bytes < 0) {
    throw new Error(`Invalid byte value: ${bytes}`);
  }

  const units = binary ? BINARY_UNITS : DECIMAL_UNITS;
  const sizes = binary ? BINARY_SIZES : DECIMAL_SIZES;

  if (unit) {
    const index = (units as readonly string[]).indexOf(unit);
    if (index === -1) {
      throw new Error(`Invalid unit "${unit}" for ${binary ? 'binary' : 'decimal'} mode`);
    }
    const value = bytes / sizes[index];
    return `${formatNumber(value, precision, locale)} ${unit}`;
  }

  if (bytes === 0) {
    return '0 B';
  }

  let index = sizes.length - 1;
  while (index > 0 && bytes < sizes[index]) {
    index--;
  }

  const value = bytes / sizes[index];
  return `${formatNumber(value, precision, locale)} ${units[index]}`;
}

function formatNumber(value: number, precision: number, locale?: string): string {
  if (locale) {
    return value.toLocaleString(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: precision,
    });
  }

  const rounded = parseFloat(value.toFixed(precision));
  return String(rounded);
}
