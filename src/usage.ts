import { parseBytes } from './parse';
import { formatBytes } from './format';

export function formatUsage(used: string | number, total: string | number): string {
  const usedBytes = parseBytes(used);
  const totalBytes = parseBytes(total);

  if (totalBytes === 0) {
    throw new Error('Total cannot be zero');
  }

  const percentage = Math.round((usedBytes / totalBytes) * 100);
  const formattedTotal = formatBytes(totalBytes);

  return `${percentage}% of ${formattedTotal}`;
}
