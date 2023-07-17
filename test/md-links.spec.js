import mdLinks from "../cli.js";
import {
  getMdFilesArr,
  checkOptions,
  NoValidate,
  Validate,
  countStats
} from '../index.js';

beforeEach(() => {
  jest.clearAllMocks();
});

/* const mdLinksMock = jest.fn();
mdLinksMock.mock.results;
mdLinks.mockImplementation(mdLinksMock); */

describe('mdLinks', () => {
  it.skip('should be a function', () => {
    expect(typeof mdLinks).toBe('object');
  });
  it.skip('should throw "Path does not exist" error', () => {
    expect(() => {mdLinksMock('./myMockFolder')}).toThrow('Path does not exist');
  });
  it.skip('should call getMdFilesArr()', async () => {
    await mdLinks('./Examples/example.md', []);
    expect(getMdFilesArr).toHaveBeenCalled();
  });
  it('should ', () => {
    
  });
  it('should ', () => {
    
  });
});

describe('getMdFilesArr', () => {
  it('should be a function', () => {
    expect(typeof getMdFilesArr).toBe('function');
  });
});

describe('checkOptions', () => {
  it('should be a function', () => {
    expect(typeof checkOptions).toBe('function');
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
