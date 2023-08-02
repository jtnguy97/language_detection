
import {franc} from "franc";
import langs from "langs";
import colors from "colors";

const input = process.argv[2];
const langCode = franc(input);

if(langCode === "und"){
    console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! Try with more sample text."));
}
else{
    const language = langs.where("3", langCode);
   if(language){
    console.log(colors.green(`Our best guess is: ${language.name}`));
   }
   else{
    console.log(colors.red(`SORRY, couldn't find a language for code: ${langCode}`));
   }
}