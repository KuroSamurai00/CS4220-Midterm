const inquirer = require('inquirer');
const subclasses = require('DND-API')
let data = [];

const _print = (print) =>{
    console.log('_________________________________________');
    console.log(`Subclass Name: ${print.name} \n`);
    console.log(`Subclass Flavor: ${print.subclass_flavor}`);
    console.log(`Subclass Levels: ${print.subclass_levels}`);
    console.log(`Subclass URL: ${print.url} \n`);
    console.log(`Description:\n ${print.desc}`);
    console.log('_________________________________________');
  
}

const search = async (args) => {


    const searchResult = await subclasses.searchAPI(args.name);
   
    for(let i = 0; i < searchResult.count; i++){
        data.push(searchResult.results[i]);
    }

    //console.log('________________________');

    const choice = await question();

    //console.log('________________________');

    const detailResult = await subclasses.detailAPI(`${choice.userSelected.toLowerCase()}`);
    console.log(_print(detailResult));
    console.log('________________________');
   

}




const question  = async () => {
    
    return inquirer.prompt({
        type: 'list',
        name: 'userSelected',
        message: 'Select the Subclass for more Infomation',
        choices: data,
    });

}

module.exports = {
    search,
};