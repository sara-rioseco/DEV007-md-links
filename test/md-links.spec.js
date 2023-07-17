import mdLinks from "../md-links.js";
// import { checkOptions } from "../cli.js";
import {
  checkOptions,
  NoValidate,
  Validate,
  countStats,
  getMdFilesArr
} from '../index.js';

/*jest.mock('../cli.js'), () => ({
  checkOptions: jest.fn(),
})*/
jest.mock('../index.js', () => ({
  checkOptions: jest.fn(),
  getMdFilesArr: jest.fn(),
  NoValidate: jest.fn(),
  Validate: jest.fn(),
  countStats: jest.fn()
}));


beforeEach(() => {
  jest.clearAllMocks();
});


describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('should throw "Path does not exist" error', () => {
    const options = { validate: false, stats: false}
    expect(() => {mdLinks('./myMockFolder', options)}).toThrow('Path does not exist');
  });
  it('should call getMdFilesArr()', () => {
    const route = '../Examples/example.md'
    const getMdFilesArrMock = jest.fn()
    getMdFilesArr.mockImplementationOnce(getMdFilesArrMock);
    mdLinks(route, );
    expect(checkOptions).toHaveBeenCalled();
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
