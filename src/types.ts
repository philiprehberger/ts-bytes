export type ByteUnit = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'KiB' | 'MiB' | 'GiB' | 'TiB' | 'PiB';

export interface FormatOptions {
  unit?: ByteUnit;
  binary?: boolean;
  precision?: number;
  locale?: string;
}
