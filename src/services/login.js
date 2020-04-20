import config from '../config/config.json'

export const credentials = async target =>
    new Promise(async (resolve, reject) => {
        if(config[target.username] && config[target.username] === target.password){
            resolve();
        }else {
            reject();
        }
    });
