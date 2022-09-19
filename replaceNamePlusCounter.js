const { readdirSync, rename } = require("fs");
const diretorio = process.argv[2]; // "C://Users//João//Desktop//a//teste"
const keyname = process.argv[3];
const replacekey = process.argv[4];


// console.log("Diretorio:", diretorio)
// console.log("Palavra chave:", keyname)
// console.log("Criado por Tikuida#1367")
let counter = 0;


counter++;


const getFilesInDirectory = (source) => {
    readdirSync(source).forEach((file) => {
        // if (diretorio && keyname && replacekey) {
            console.log(file.substring(file.indexOf("^"), file.indexOf("_0")))
            let newName = file.substring(file.indexOf(keyname), file.indexOf("^")).replace(keyname, `${replacekey}${file.substring(file.indexOf("^"))}`);
            console.log(file.substring(file.indexOf(keyname), file.indexOf("^")).replace(keyname, `${replacekey}${file.substring(file.indexOf("^"))}`));

            // rename(`${diretorio}//${keyname}${file.substring(file.indexOf("^"))}`, newName, (err) => {
            //     if (err) console.log(err)
            // })
        // }
    });
  };

getFilesInDirectory(diretorio);