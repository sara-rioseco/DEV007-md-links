import { mdLinks } from "../cli";
import {
  getMdFilesArr,
  checkOptions,
  NoValidate,
  Validate,
  countStats
} from './index.js';

const mdLinksMock = jest.fn().mockImplementation(() => Promise.resolve('mock resolve'))

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('should ', () => {
    
  });
  it('should ', () => {
    
  });
});
