# @philiprehberger/bytes-ts

[![CI](https://github.com/philiprehberger/bytes-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/bytes-ts/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/bytes-ts.svg)](https://www.npmjs.com/package/@philiprehberger/bytes-ts)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/bytes-ts)](https://github.com/philiprehberger/bytes-ts/commits/main)

Parse and format byte sizes for humans

## Installation

```bash
npm install @philiprehberger/bytes-ts
```

## Usage

```ts
import { parseBytes, formatBytes, MB } from '@philiprehberger/bytes-ts';

parseBytes('1.5 GB');                     // 1500000000
formatBytes(1500000000);                  // "1.5 GB"
formatBytes(1500000000, { binary: true }); // "1.4 GiB"
formatBytes(1234, { precision: 3 });      // "1.234 KB"
50 * MB;                                  // 50000000
```

### Binary vs Decimal

```ts
import { formatBytes, GiB } from '@philiprehberger/bytes-ts';

formatBytes(1 * GiB);                    // "1.07 GB"
formatBytes(1 * GiB, { binary: true });  // "1 GiB"
```

### Comparison

```ts
import { isLargerThan, isSmallerThan } from '@philiprehberger/bytes-ts';

isLargerThan('1 GB', '500 MB');  // true
isSmallerThan('100 KB', '1 MB'); // true
```

### Range Validation

```ts
import { isWithin } from '@philiprehberger/bytes-ts';

isWithin('500 MB', '100 MB', '1 GB'); // true
isWithin('2 GB', '100 MB', '1 GB');   // false
isWithin(5000, 0, '10 KB');           // true
```

### Arithmetic

```ts
import { addBytes, subtractBytes } from '@philiprehberger/bytes-ts';

addBytes('1 GB', '500 MB');      // 1500000000
subtractBytes('1 GB', '500 MB'); // 500000000
addBytes(1024, '1 KB');          // 2024
```

### Usage Formatting

```ts
import { formatUsage } from '@philiprehberger/bytes-ts';

formatUsage('750 MB', '1 GB');   // "75% of 1 GB"
formatUsage('3 GB', '10 GB');    // "30% of 10 GB"
formatUsage(500000, '1 MB');     // "50% of 1 MB"
```

## API

| Function | Description |
|----------|-------------|
| `parseBytes(input)` | Parse a byte string or number to bytes |
| `formatBytes(bytes, options?)` | Format bytes to a human-readable string |
| `isLargerThan(a, b)` | Compare two byte values |
| `isSmallerThan(a, b)` | Compare two byte values |
| `isWithin(value, min, max)` | Check if a byte value falls within a range |
| `addBytes(a, b)` | Add two byte values together |
| `subtractBytes(a, b)` | Subtract byte value b from a |
| `formatUsage(used, total)` | Format usage as percentage string |
| `KB`, `MB`, `GB`, `TB`, `PB` | Decimal unit constants |
| `KiB`, `MiB`, `GiB`, `TiB`, `PiB` | Binary unit constants |

## Development

```bash
npm install
npm run build
npm test
```

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/bytes-ts)

🐛 [Report issues](https://github.com/philiprehberger/bytes-ts/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/bytes-ts/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)
