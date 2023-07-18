import mdLinks from '../md-links.js';

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('should throw "Path does not exist" error', () => {
    expect(() => {mdLinks('./myMockFolder', { validate: false, stats: false })}).toThrow(Error);
  });
  it('should throw "No markdown files were found" error', () => {
    expect(() => {mdLinks('./Examples/Mock/Mock-inside-mock', { validate: false, stats: false })}).toThrow(Error);
  });
  it('should return the data requested without validation nor stats', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    mdLinks('./Examples/Mock', { validate:true, stats:true });
    expect(logSpy).toHaveBeenCalled();
  });
  it('should return the data requested with validation', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    mdLinks('./Examples/Mock', { validate: true, stats: false });
    expect(logSpy).toHaveBeenCalled();
  });
  it('should return the data requested with stats', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    mdLinks('./Examples/Mock', { validate: false, stats: true });
    expect(logSpy).toHaveBeenCalled();
  });
  it('should return the data requested with validation and stats', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    mdLinks('./Examples/Mock', { validate: false, stats: false });
    expect(logSpy).toHaveBeenCalled();
  });
});
