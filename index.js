/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

//importing dependencies
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


//actual work
inquirer
    .prompt([
        {
            name: "url",
            message: "Please enter your url:"
        }
    ])

    .then((answer) => {
        const userURL = answer.url;

        const qrSVG = qr.image(userURL);
        qrSVG.pipe(fs.createWriteStream("./qr-code.svg"));
        
        fs.appendFile("./URL.txt", userURL + ", ", (err) => {
            if(err) throw err;
            console.log("The file has been appended succesfully");
        });
    });
    
    
    