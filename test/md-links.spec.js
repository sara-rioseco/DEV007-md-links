import { mdLinks } from "../md-links";

const mdLinksMock = jest.fn().mockImplementation(() => Promise.resolve('mock resolve'))

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('should return an object', () => {
    expect(mdLinks()).toBe(typeof Object);
  });
  it('should ', () => {
    
  });
  it('should ', () => {
    
  });
  it('should ', () => {
    
  });

});
