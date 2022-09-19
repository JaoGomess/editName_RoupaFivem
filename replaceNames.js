const { readdirSync, rename } = require("fs");

const diretorio = process.argv[2];
const keyname = process.argv[3];
const replacekey = process.argv[4];

const debug = false

const getFilesInDirectory = (source) => {
    readdirSync(source).forEach((file) => {
        let newName = file.substring(file.indexOf(keyname), file.indexOf("^")).replace(keyname, `${replacekey}${file.substring(file.indexOf("^"))}`);
        if (debug) console.log(file.substring(file.indexOf(keyname), file.indexOf("^")).replace(keyname, `${replacekey}${file.substring(file.indexOf("^"))}`));
        
        rename(`${diretorio}//${keyname}${file.substring(file.indexOf("^"))}`, newName, (err) => {
            if (err) console.log(err)
        })
    });
};

getFilesInDirectory(diretorio);