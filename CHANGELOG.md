# Changelog

## 0.2.0

- Add byte range validation with isWithin()
- Add comparison helpers: isLargerThan(), isSmallerThan()
- Add byte arithmetic: addBytes(), subtractBytes()
- Add usage percentage formatting with formatUsage()

## 0.1.5

- Standardize README to 3-badge format with emoji Support section
- Update CI actions to v5 for Node.js 24 compatibility
- Add GitHub issue templates, dependabot config, and PR template

## 0.1.4

- Fix README to use correct npm package name `@philiprehberger/bytes-ts`
- Fix CI badge to reference ci.yml

## 0.1.3

- Add Development section to README
- Fix CI badge to reference publish.yml
- Add test script to package.json

## 0.1.0 (2026-03-15)

- Initial release
- Parse human-readable byte strings to numbers
- Format byte numbers to human-readable strings
- Support for decimal (KB, MB, GB) and binary (KiB, MiB, GiB) units
- Byte comparison utilities
- Numeric constants for common units
