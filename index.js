import fs from 'fs';
import path from 'path';

export const getMdFilesArr = (dir) => {
  const files = fs.readdirSync(dir, )
  const mdFilesArr = []
  files.forEach(file => {
    if (path.extname(file) == '.md') {
      mdFilesArr.push(file)
    }
  });
return mdFilesArr;
};

export const readMdFile = (file) => {
  const buffer = fs.readFileSync(file);
  const fileContent = buffer.toString();
  return fileContent;
};

const mdFilesHere = getMdFilesArr('./');
const mdFilesContent = readMdFile(mdFilesHere[1]);
console.log(mdFilesContent);

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

export const findLinksInMdFile = path => {

};