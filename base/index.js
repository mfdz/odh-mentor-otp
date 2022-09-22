
const basepath = process.cwd();

const _ = require('lodash')
    , express = require('express')
    , cors = require('cors')
    , dotenv = require('dotenv').config()
    , configyml = require('@stefcud/configyml')
    , {name, version} = require(`${basepath}/package.json`)
    , serviceName = `service ${name} v${version}`;

const configDefault = configyml({basepath: __dirname});

const config = configyml({basepath});

config.endpoints = _.mapValues(config.endpoints, conf => {
    return _.defaults(conf, config.endpoints.default, configDefault.endpoints.default);
});
delete config.endpoints.default;

config.cors = _.defaults(config.cors, configDefault.cors);

var last_updated = Math.trunc((new Date()).getTime() / 1000 );

function polling(getData) {

    function poll() {
        last_updated = Math.trunc((new Date()).getTime() / 1000 );
        getData(last_updated);
    }
    poll(last_updated);
    let intervalObj = setInterval(poll, config.polling_interval * 1000);

    return last_updated;
}

const app = express();

app.use(cors(config.cors));

if (config.envId == 'dev') {
   app.set('json spaces', 2);
}

/*TODO in all modules
app.get(['/','/carsharing'], async (req, res) => {
  res.send({
    status: 'OK',
    version
  });
});*/

console.log(`Starting ${serviceName}... ${version}\nConfig:\n`, config);

module.exports = {
    app,
    config,
    configDefault,
    serviceName,
    version,
    polling,
    listenLog: function () {
        console.log('module paths', app._router.stack.filter(r => r.route).map(r => `${Object.keys(r.route.methods)[0]} ${r.route.path}`) );
        console.log(`${serviceName} listening at http://localhost:${this.address().port}`);
    }

/*    onInit: app => {
        console.log(`Starting ${serviceName}...`);
        console.log("Config:\n", config);
    },*/
/*    goListen: app => {
        app.listen(config.listen_port, onListen(app) );
        const {name, version} = require('./package.json');
        const serviceName = `service ${name} v${version}`;
        return function () {
            console.log( app._router.stack.filter(r => r.route).map(r => `${Object.keys(r.route.methods)[0]} ${r.route.path}`) );
            console.log(`${serviceName} listening at http://localhost:${this.address().port}`);
        }
    }*/
};