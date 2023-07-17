import mdLinks from "../md-links.js";
import {
  NoValidate,
  Validate,
  countStats,
  getMdFilesArr
} from '../index.js';
import { checkOptions } from "../cli.js"

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('should throw "Path does not exist" error', () => {
    expect(() => {mdLinks('./myMockFolder', { validate: false, stats: false})}).toThrow('Path does not exist');
  });
});

describe('getMdFilesArr', () => {
  it('should be a function', () => {
    expect(typeof getMdFilesArr).toBe('function');
  });
});

describe('NoValidate', () => {
  it('should be a function', () => {
    expect(typeof NoValidate).toBe('function');
  });
});

describe('Validate', () => {
  it('should be a function', () => {
    expect(typeof Validate).toBe('function');
  });
});

describe('countStats', () => {
  it('should be a function', () => {
    expect(typeof countStats).toBe('function');
  });
});
