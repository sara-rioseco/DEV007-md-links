// importing modules
import fs from 'fs';
import path, { isAbsolute } from 'path';
import argv from 'process';
import env from 'process';
import process from 'process';
// import { Renderer, marked } from 'marked';
// import DOMPurify from 'isomorphic-dompurify';

// checkin if route exists
export const pathExists = path => fs.existsSync(path);

// checking if path is absolute, returning boolean
export const isAbsolutePath = dir => path.isAbsolute(dir);

// checking if path is dir, returning boolean
export const isDir = element => fs.statSync(element).isDirectory();

// checking if path is file, returning boolean
export const isFile = element => fs.statSync(element).isFile();

// reading a directory, returning a buffer
export const readingDir = dir => fs.readdirSync(dir);

// transforming relative path to absolute
export const toAbsolute = dir => path.resolve(dir);

// checking if file extension is .md
export const isMd = file => path.extname(file) == '.md' // revisar

// merging route with new file
export const mergePath = (route, file) => path.join(route, file)

// getting an array with all MD files in a specific directory including sub-folders
export const getMdFilesArr = route => {
  const mdFilesArr = []
  if (pathExists(route)) {
    const files = readingDir(route)
    files.forEach(element => {
      if (isAbsolutePath(element)) {
        if (!isDir(element)) {
          if (isMd(element)) {
            mdFilesArr.push(element)
         } else { 
          const newRoute = mergePath(route, element)
          getMdFilesArr(newRoute);
          };
        }
      } else if (!isAbsolutePath(element)) {
        const absoluteElement = toAbsolute(element)
        if (!isDir(absoluteElement)) {
          if (isMd(absoluteElement)) {
            mdFilesArr.push(absoluteElement)
          };
        } else {
          getMdFilesArr(absoluteElement);
        }
      }
  });  return mdFilesArr;
  } else {
    console.log("path doesn't exist");
  }
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
export const separateLink = (str) => {
  const textRegex = /!?\[([^\]]*)\]\(/gm
  const hrefRegex = /\(([^\)]+)\)/gm
  const text = str.match(textRegex);
  const href = str.match(hrefRegex);
  const linkObj = new Object;
  linkObj.text = text.toString().slice(1, -2);
  linkObj.href = href.toString().slice(1, -1);
  return linkObj;
};

// separating all links in one array, returning an Arr of Obj
export const separateAllLinks = (linksArr) => {
  const LinkObjArr = [];
  linksArr.forEach(link => {
    const separatedLink = separateLink(link);
    LinkObjArr.push(separatedLink);
  })
  return LinkObjArr;
};

// getting links in a specific MD file
export const findLinksInMdFile = path => {

};

// getting links in All MD Files in a specific directory
export const findLinksInAllMdFilesInDir = dir => {

};

// ================ EXAMPLES & TESTS ==================

const mdFilesHere = getMdFilesArr('./'); // MD files in this path
const mdFileContent = readMdFile(mdFilesHere[0]); // Content of the specific MD file
const linksInThisMdFile = getLinks(mdFileContent); // Links in this MD File text and href together
const linksArr = Object.values(linksInThisMdFile); // Array of links as objects with both text and href properties
const linkObjSeparated = separateAllLinks(linksArr);

console.log(linksArr);
console.log(linkObjSeparated[2]);

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
