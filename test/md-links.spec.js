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

// const mdLinksMock = jest.fn().mockResolvedValue();
// mdLinks.mockImplementationOnce(mdLinksMock)

describe('mdLinks', () => {
  it('should throw "Path does not exist" error', () => {
    expect(mdLinks('./myMockFolder')).toThrow(Error('Path does not exist'));
  });
  it('should call getMdFilesArr', () => {

  });
  it('should ', () => {
    
  });
  it('should ', () => {
    
  });
});
