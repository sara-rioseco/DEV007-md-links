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
export const pathIsAbsolute = dir => path.isAbsolute(dir);

// transforming relative path to absolute
export const toAbsolute = dir => path.resolve(dir);

// checking if path is dir, returning boolean
export const isDir = element => fs.statSync(element).isDirectory();

// reading a directory, returning an array with each element
export const readingDir = dir => fs.readdirSync(dir, 'utf-8');

// checking if path is file, returning boolean
export const isFile = element => fs.statSync(element).isFile();

// checking if file extension is .md
export const isMd = file => path.extname(file) == '.md'

// merging route with new file
export const mergePath = (route, file) => path.join(route, file)

// getting an array with all MD files in a specific directory including sub-folders
export const getMdFilesArr = (route, mdFilesArr = []) => {
  if (pathExists(route)) {
    route=toAbsolute(route)
    if ((isFile(route)) && (isMd(route))){
      mdFilesArr.push(route)
    } else { 
      const folderContent = readingDir(route)
      folderContent.forEach(element => { 
        const newRoute = mergePath(route, element)
        getMdFilesArr(newRoute, mdFilesArr);
      })
    };
  }
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
export const separateLink = (str, route) => {
  const textRegex = /!?\[([^\]]*)\]\(/gm
  const hrefRegex = /\(([^\)]+)\)/gm
  const text = str.match(textRegex);
  const href = str.match(hrefRegex);
  const linkObj = new Object;
  linkObj.text = text.toString().slice(1, -2);
  linkObj.href = href.toString().slice(1, -1);
  linkObj.file = route;
  return linkObj;
};

// separating all links in one array, returning an Arr of Obj
export const separateAllLinks = (linksArr, route) => {
  const LinkObjArr = [];
  linksArr.forEach(link => {
    const separatedLink = separateLink(link, route);
    LinkObjArr.push(separatedLink);
  })
  return LinkObjArr;
};

// getting links in a specific MD file from absolute route
export const findLinksInMdFile = route => {
  const fileContent = readMdFile(route);
  const linksInFile = getLinks(fileContent);
  const linksObjArr = separateAllLinks(linksInFile, route);
  return linksObjArr;
};

// getting links in All MD Files in a specific directory
export const findLinksInAllMdFilesInDir = dir => {

};

// ================ EXAMPLES & TESTS ==================


const mdFilesHere = getMdFilesArr('./README.md'); // MD files in this path
const mdFileContent = readMdFile(mdFilesHere[0]); // Content of the specific MD file
const linksInThisMdFile = getLinks(mdFileContent); // Links in this MD File text and href together
const linksArr = Object.values(linksInThisMdFile); // Array of links as objects with both text and href properties
const linkObjSeparated = separateAllLinks(linksArr);

console.log(linksArr);
console.log(linkObjSeparated[2]);

console.log(getMdFilesArr('C:\\Users\\sarar\\Documents\\Laboratoria\\GitHub\\DEV007-md-links\\Examples'));
console.log(findLinksInMdFile(toAbsolute('./README.md'))[10]);
