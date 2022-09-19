const { readdirSync, rename } = require("fs");

const fullMainPath = process.argv[2]; // "C://Users//João//Desktop//a//teste"
const txtname = process.argv[3];
const replaceName = process.argv[4];
console.log(fullMainPath)
console.log(txtname)

const getFilesInDirectory = (source) => {
    readdirSync(source).forEach((file) => {
        if (file.substring(("^").includes(file))) {
            let newName = file.substring(file.indexOf(process.argv[3]), file.indexOf("^")).replace(process.argv[3], `${replaceName}${file.substring(file.indexOf("^"))}`);
            console.log(file.substring(file.indexOf(process.argv[3]), file.indexOf("^")).replace(process.argv[3], `${replaceName}${file.substring(file.indexOf("^"))}`));

            rename(`${fullMainPath}//${process.argv[3]}${file.substring(file.indexOf("^"))}`, newName, (err) => {
                if (err) console.log(err)
            })
        }
    });
  };

getFilesInDirectory(process.argv[2]);