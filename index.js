// importing modules
import fs from 'fs';
import path from 'path';
import { resolve } from 'path';
import argv from 'process';
import env from 'process';
import process from 'process';
import { Renderer, marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import { resourceLimits } from 'worker_threads';

// getting an array with all MD files in a specific directory
export const getMdFilesArr = dir => {
  const files = fs.readdirSync(dir, )
  const mdFilesArr = []
  files.forEach(file => {
    if (path.extname(file) == '.md') {
      mdFilesArr.push(file)
    }
  });
return mdFilesArr;
};

// getting the contents of an MD file as a string
export const readMdFile = file => {
  const buffer = fs.readFileSync(file);
  const fileContent = buffer.toString();
  return fileContent;
};

// getting all links inside the MD content string (text and href together)
export const getLinks = (str) => {
  const fullRegex = /!?\[([^\]]*)\]\(([^\)]+)\)/gm
  const linksArr = str.match(fullRegex);
  return linksArr;
};

// separating the text from the href, returning an Obj with both as properties
export const separateLinks = (str) => {
  const textRegex = /!?\[([^\]]*)\]\(/gm
  const hrefRegex = /\(([^\)]+)\)/gm
  const text = str.match(textRegex);
  const href = str.match(hrefRegex);
  const linkObj = new Object;
  linkObj.text = text.toString().slice(1, -2);
  linkObj.href = href.toString().slice(1, -1);
  return linkObj;
};

// getting links in a specific MD file
export const findLinksInMdFile = path => {

};

// getting links in All MD Files in a specific directory
export const findLinksInAllMdFilesInDir = dir => {

};

// getting the links from a specific path with specific options
export const mdLinks = (path, options) => {
  const linksArr = [];
  const links = findLinksInMdFile(path);
  const promiseWithValidate = () => new Promise((resolve, reject)
    .then(links.forEach(link => { 
      const linkObj = new Object;
      linkObj.href = '';
      linkObj.text = '';
      linkObj.file = `${path}`;
      linkObj.status = '';
      linkObj.ok = '';
      linksArr.push(linkObj);
      return linksArr;
    }))
    .catch(err => err));
  const promiseWithoutValidate = () => new Promise((resolve, reject)
    .then(links.forEach(link => { 
      const linkObj = new Object;
      linkObj.href = '';
      linkObj.text = '';
      linkObj.file = '';
      linksArr.push(linkObj);
      return linksArr;
    }))
    .catch(err => err));
  options = {validate : true} ? promiseWithValidate() : promiseWithoutValidate();
};

// ================ EXAMPLES AND TESTS ==================

const mdFilesHere = getMdFilesArr('./'); // MD files in this path
const mdFileContent = readMdFile(mdFilesHere[0]); // Content of the specific MD file
const linksInThisMdFile = getLinks(mdFileContent); // Links in this MD File text and href together
const linksArr = Object.values(linksInThisMdFile); // Array of links as objects with both text and href properties
const linkObjSeparated = separateLinks(linksArr[0]);

console.log(linksArr[0]);
console.log(linksArr[1]);
console.log(linksArr[2]);
console.log(linksArr[3]);
console.log(linksArr[4]);
console.log(linksArr[5]);
console.log(linkObjSeparated);


/* ======================= MARKED =======================
// sanitizing html
const sanitizedHTML = DOMPurify.sanitize(getLinks(mdFileContent));

// parsing MD contents to HTML
export const parseMdFile = mdContent => { marked.parse(mdContent)};

// creating a new renderer
const renderer = new marked.Renderer(sanitizedHTML);

// setting options for marked
marked.setOptions({
  renderer,
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  mangle : false,
  headerIds: false,
  breaks: false,
  pedantic: false,
 });

const newTokenizer = new marked.Tokenizer(mdFilesContent);
const newRenderer = new marked.Renderer();
newRenderer.link = (href, title, text) => {
  const target = '';
  if (href) {
    target = "_blank";
  }
  else {
    href = 'javascript:void(0);'
  }
  return `<a href="${href}">${text}</a>`; 
}; */
