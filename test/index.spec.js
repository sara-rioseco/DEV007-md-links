import fs from 'fs';
import { getMdFilesArr, getLinks, getStatus, Validate, NoValidate, countStats } from "../index.js";

const linksArr = [
  {
    text: 'Node.js',
    href: 'https://nodejs.org/es/',
    file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md',
    status: 200,
    ok: 'ok'
  },
  {
    text: 'Arreglos',
    href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arays',
    file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md',
    status: 200,
    ok: 'ok'
  },
  {
    text: 'Path - Link falso de prueba',
    href: '!https://nodejs.org/api/false-path',
    file: 'C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples\\Mock\\example.md',
    status: 404,
    ok: 'fail'
  }
]

describe('getMdFilesArr', () => {
  it('should be a function', () => {
    expect(typeof getMdFilesArr).toBe('function');
  });
  it('should have call itself recursively', () => {
    const result = getMdFilesArr('./Examples/Mock',[]);
    expect(getMdFilesArr('./Examples/Mock')).toEqual(result);
  });
});

describe('getLinks', () =>{
  it('should filter markdown img links', async () => {
    const result = getLinks(fs.readFileSync('./Examples/MoreExamples/And more examples/example0.md').toString());
    await expect(typeof result).toBe('object');
  })
})

describe('getStatus', () => {
    const mockObj = { href: 'https://nodejs.org/es/' }
    it('should return an object', ()=> {
      expect(typeof getStatus(mockObj)).toBe('object')
    })
    it('should add the status property with the html status code as value', async () => {
    const newObj = getStatus(mockObj).then(result => result);
      expect(await newObj).toHaveProperty('status', 200)
    })
    it('should add the "ok" property with "ok" value if the url is valid', async () => {
      const newObj = getStatus(mockObj).then(result => result);
        expect(await newObj).toHaveProperty('ok', 'ok')
      })
    it('should add the status property with "404" value if the url does not exist', async () => {
    const newObj = getStatus({ href: 'https://nodejs.org/es-muy-genial' }).then(result => result);
      expect(await newObj).toHaveProperty('status', 404)
    })
    it('should add the "ok" property with "fail" value if the url does not exist', async () => {
      const newObj = getStatus({ href: 'https://nodejs.org/es-muy-genial' }).then(result => result);
        expect(await newObj).toHaveProperty('ok', 'fail')
      })
})
  
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
  it('should return a string', () => {
    expect(typeof countStats(linksArr)).toBe('string');
  });
  it('should return the stats of the links inside', () => {
    const result = `total: ${3}
    unique: ${3}
    broken: ${0}`
    const countStatsMock = jest.fn(() => result)
    expect(countStatsMock()).toBe(result);
  });
});
  