// importing modules
import fs from 'fs';
import path from 'path';
import axios from 'axios';

// getting an array with all MD files in a specific directory including sub-folders
export const getMdFilesArr = (route, mdFilesArr = []) => {
  if (fs.existsSync(route)) {
    route=path.resolve(route)
    if ((fs.statSync(route).isFile()) && (path.extname(route) == '.md')){
      mdFilesArr.push(route)
    } else { 
      const folderContent = fs.readdirSync(route, 'utf-8')
      folderContent.forEach(element => { 
        const newRoute = path.join(route, element)
        getMdFilesArr(newRoute, mdFilesArr);
      })
    };
  } else {
    throw new Error('Path does not exist')
  }
  return mdFilesArr;
};
 
// getting the contents of an MD file as a string
export const readMdFile = file => {
  const buffer = fs.readFileSync(file);
  const fileContent = buffer.toString();
  return fileContent;
};

// getting all links inside the MD content string (text and href together), filtering imgs and inner references
export const getLinks = (str) => {
  const fullRegex = /!?\[([^\]]*)\]\(([^\)]+)\)/gm
  const linksArr = str.match(fullRegex);
  const filteringArr = () => {
    for (let i=0; i<linksArr.length; i++) {
      if ((linksArr[i][0] == '!') || (linksArr[i].includes('](#'))) {
        linksArr.splice(i, 1);
        filteringArr();
      }
    }
  }
  filteringArr();
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

// getting http status and ok/fail from linkObj
export const getStatus = (linkObj) => {
  return axios.get(linkObj.href)
    .then(response => {
      linkObj.status = response.status;
      linkObj.ok = response.status >= 200 && response.status < 300 ? 'ok' : 'fail';
      return linkObj;
    })
    .catch(error => {
      linkObj.status = error.response ? error.response.status : 'Unknown';
      linkObj.ok = 'fail';
      return linkObj;
    });
}

// fx for options = {validate: false}
export const NoValidate = (arr) => arr.map(file => (findLinksInMdFile(file))).flat(1);

// fx for options = {validate: true}
export const Validate = (arr) => {
  const objArr = arr.map(file => (findLinksInMdFile(file))).flat(1);
  const newArr = objArr.map(obj => getStatus(obj));
  return newArr;
};

// count and return stats
export const countStats = (arr) => {
  const totalLinks = arr.length;
  const uniqueSet = new Set(arr);
  let brokenLinks = 0;
  for (let i = 0; i<arr.length; i++){
    if(!arr[i].ok) {
      return `total: ${totalLinks}
      unique: ${uniqueSet.size}`
    }; 
    if (arr[i].ok === 'fail'){
      brokenLinks ++;
    }
  } 
  return `total: ${totalLinks}
  unique: ${uniqueSet.size}
  broken: ${brokenLinks}`
}