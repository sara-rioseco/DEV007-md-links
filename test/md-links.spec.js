import mdLinks from '../md-links.js';


const mockResultsNoValidateNoStats = [
  {
    text: 'Node.js',
    href: 'https://nodejs.org/es/',
    file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md'
  },
  {
    text: 'Arreglos',
    href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
    file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md'
  },
  {
    text: 'Path - Documentación oficial',
    href: 'https://nodejs.org/api/path.html',
    file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md'
  }
];

const mockResultsValidateNoStats = [
  {
    text: 'Node.js',
    href: 'https://nodejs.org/es/',
    file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md',
    status: 200,
    ok: 'ok'
  },
  {
    text: 'Arreglos',
    href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
    file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md',
    status: 200,
    ok: 'ok'
  },
  {
    text: 'Path - Documentación oficial',
    href: 'https://nodejs.org/api/path.html',
    file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md',
    status: 200,
    ok: 'ok'
  }
]

const mockResultsNoValidateStats = [
    {
      text: 'Node.js',
      href: 'https://nodejs.org/es/',
      file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md'
    },
    {
      text: 'Arreglos',
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
      file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md'
    },
    {
      text: 'Path - Documentación oficial',
      href: 'https://nodejs.org/api/path.html',
      file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md'
    }
];
`total: 3
unique: 3`
;

const mockResultsValidateStats = [
  {
    text: 'Node.js',
    href: 'https://nodejs.org/es/',
    file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md',
    status: 200,
    ok: 'ok'
  },
  {
    text: 'Arreglos',
    href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
    file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md',
    status: 200,
    ok: 'ok'
  },
  {
    text: 'Path - Documentación oficial',
    href: 'https://nodejs.org/api/path.html',
    file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md',
    status: 200,
    ok: 'ok'
  }
]; 
`total: 3
unique: 3
broken: 0`
;



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
    const mdLinksMock = jest.fn(() => mockResultsNoValidateNoStats);
    expect(mdLinks('./Examples/Mock', { validate: false, stats: false }))
    .toEqual(mockResultsNoValidateNoStats);
  });
  it('should return the data requested with validation', () => {
    const mdLinksMock = jest.fn(() => mockResultsValidateNoStats);
    expect(mdLinks('./Examples/Mock', { validate: true, stats: false }))
    .toEqual(mockResultsValidateNoStats);
  });
  it('should return the data requested with stats', () => {
    const mdLinksMock = jest.fn(() => mockResultsNoValidateStats);
    expect(mdLinks('./Examples/Mock', { validate: false, stats: true }))
    .toEqual(mockResultsNoValidateStats)
  });
  it('should return the data requested with validation and stats', () => {
    const mdLinksMock = jest.fn(() => mockResultsValidateStats);
    expect(mdLinks('./Examples/Mock', { validate: true, stats: true }))
    .toEqual(mockResultsValidateStats)
  });
});
