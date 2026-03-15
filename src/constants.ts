export const KB = 1_000;
export const MB = 1_000_000;
export const GB = 1_000_000_000;
export const TB = 1_000_000_000_000;
export const PB = 1_000_000_000_000_000;

export const KiB = 1_024;
export const MiB = 1_048_576;
export const GiB = 1_073_741_824;
export const TiB = 1_099_511_627_776;
export const PiB = 1_125_899_906_842_624;

export const DECIMAL_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'] as const;
export const BINARY_UNITS = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'] as const;

export const DECIMAL_SIZES = [1, KB, MB, GB, TB, PB];
export const BINARY_SIZES = [1, KiB, MiB, GiB, TiB, PiB];
