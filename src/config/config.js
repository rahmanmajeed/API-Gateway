const fs = require('fs');
const configJson = JSON.parse(fs.readFileSync(__dirname  + '/config.json'), 'utf8');

const config = (() => {
    return{
        server:{
            id: configJson.server.id,
            port: configJson.server.port,
            isCluster:configJson.server.isCluster,
            https:configJson.server.https,
            headers:configJson.server.headers,
            httpsKeyContent:configJson.server.https.key ? fs.readFileSync(__dirname  + "/" + configJson.server.https.key) :null,
            httpsCaContent:configJson.server.https.ca ? fs.readFileSync(__dirname  + "/" + configJson.server.https.ca) :null,
        },
        api:{
            route:configJson.api.route,
            modules:configJson.api.modules
        },
        services:configJson.services,
        serviceRegistry:configJson.serviceRegistry
    }
})()


module.exports = config