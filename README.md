# @philiprehberger/bytes-ts

[![CI](https://github.com/philiprehberger/ts-bytes/actions/workflows/publish.yml/badge.svg)](https://github.com/philiprehberger/ts-bytes/actions/workflows/publish.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/bytes-ts.svg)](https://www.npmjs.com/package/@philiprehberger/bytes-ts)
[![License](https://img.shields.io/github/license/philiprehberger/ts-bytes)](LICENSE)

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

## API

| Function | Description |
|----------|-------------|
| `parseBytes(input)` | Parse a byte string or number to bytes |
| `formatBytes(bytes, options?)` | Format bytes to a human-readable string |
| `isLargerThan(a, b)` | Compare two byte values |
| `isSmallerThan(a, b)` | Compare two byte values |
| `KB`, `MB`, `GB`, `TB`, `PB` | Decimal unit constants |
| `KiB`, `MiB`, `GiB`, `TiB`, `PiB` | Binary unit constants |


## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
