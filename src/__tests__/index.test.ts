import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const mod = await import('../../dist/index.js');

describe('bytes-ts', () => {
  it('should export parseBytes', () => {
    assert.ok(mod.parseBytes);
  });

  it('should export formatBytes', () => {
    assert.ok(mod.formatBytes);
  });

  it('should export isLargerThan', () => {
    assert.ok(mod.isLargerThan);
  });

  it('should export isSmallerThan', () => {
    assert.ok(mod.isSmallerThan);
  });

  it('should export KB', () => {
    assert.ok(mod.KB);
  });

  it('should export MB', () => {
    assert.ok(mod.MB);
  });

  it('should export GB', () => {
    assert.ok(mod.GB);
  });

  it('should export TB', () => {
    assert.ok(mod.TB);
  });

  it('should export PB', () => {
    assert.ok(mod.PB);
  });

  it('should export KiB', () => {
    assert.ok(mod.KiB);
  });

  it('should export MiB', () => {
    assert.ok(mod.MiB);
  });

  it('should export GiB', () => {
    assert.ok(mod.GiB);
  });

  it('should export TiB', () => {
    assert.ok(mod.TiB);
  });

  it('should export PiB', () => {
    assert.ok(mod.PiB);
  });

  it('should export isWithin', () => {
    assert.ok(mod.isWithin);
  });

  it('should export addBytes', () => {
    assert.ok(mod.addBytes);
  });

  it('should export subtractBytes', () => {
    assert.ok(mod.subtractBytes);
  });

  it('should export formatUsage', () => {
    assert.ok(mod.formatUsage);
  });
});
