// importing modules
import fs from 'fs';
import path, { isAbsolute } from 'path';

// import { Renderer, marked } from 'marked';
// import DOMPurify from 'isomorphic-dompurify';

// checkin if route exists
export const pathExists = path => fs.existsSync(path);

// reading a directory, returning an array with each element
export const readingDir = dir => fs.readdirSync(dir, 'utf-8');

// checking if path is file, returning boolean
export const isFile = element => fs.statSync(element).isFile();

// checking if file extension is .md
export const isMd = file => path.extname(file) == '.md'

// getting an array with all MD files in a specific directory including sub-folders
export const getMdFilesArr = (route, mdFilesArr = []) => {
  if (pathExists(route)) {
    route=path.resolve(route)
    if ((isFile(route)) && (isMd(route))){
      mdFilesArr.push(route)
    } else { 
      const folderContent = readingDir(route)
      folderContent.forEach(element => { 
        const newRoute = path.join(route, element)
        getMdFilesArr(newRoute, mdFilesArr);
      })
    };
  } else {
    console.log('path does not exist');
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

//checking if options validate and stats are true or not
export const checkOptions = () => {
  const options = new Object
  options.validate = '';
  options.stats = '';
  if(process.argv.includes('--validate')) {
    if (process.argv.includes('--stats')) {
      options.validate = true;
      options.stats = true;
    } else {
      options.validate = true;
      options.stats = false;
    }
  } if (!process.argv.includes('--validate')) {
    if (process.argv.includes('--stats')) {
      options.validate = false;
      options.stats = true;
    } else {
      options.validate = false;
      options.stats = false;
    }
  }
return options
};

// ================ EXAMPLES & TESTS ==================


const mdFilesHere = getMdFilesArr('./README.md'); // MD files in this path
const mdFileContent = readMdFile(mdFilesHere[0]); // Content of the specific MD file
const linksInThisMdFile = getLinks(mdFileContent); // Links in this MD File text and href together
const linksArr = Object.values(linksInThisMdFile); // Array of links as objects with both text and href properties
const linkObjSeparated = separateAllLinks(linksArr);

console.log(linkObjSeparated[11]);
console.log(findLinksInMdFile(path.resolve('./README.md'))[10]);
