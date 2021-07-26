const express = require('express');
const https = require('https');
const _ = require('lodash');
const cors = require('cors');
const config = require('./config');
const circleToPolygon = require('./circle-polygon');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var app = express();

var lastUpdate = Math.trunc((new Date()).getTime() / 1000 ),
    stationsReceived,
    sensorsReceived;

console.log("Start Parking OpenData Hub...")

console.log("Config:\n", config);

if(!config.endpoints || _.isEmpty(config.endpoints)) {
    console.error('Config endpoints not defined!');
    return;
}

function getData(){
    lastUpdate = Math.trunc((new Date()).getTime() / 1000 );
    getStations();
    getSensors();
}
getData();
setInterval(getData, config.server.polling_interval * 60 * 1000);

function getStations(){
    const req = https.request(config.endpoints.stations, res => {
            //console.log(`STATIONS: statusCode: ${res.statusCode}`)
            var str = "";
            res.on('data', function (chunk) {
                str += chunk;
            });

            res.on('end', function () {
                let tmp = JSON.parse(str);
                var stations = tmp.data;
                stationsReceived = stations;
            });
        })

    req.on('error', error => {
        console.error(error)
    })

    req.end()
}

function getSensors(){
    const req = https.request(config.endpoints.sensors, res => {
            //console.log(`BIKES: statusCode: ${res.statusCode}`)
            var str = "";
            res.on('data', function (chunk) {
                str += chunk;
            });

            res.on('end', function () {
                let tmp = JSON.parse(str);
                var sensors = _.uniqBy(tmp.data,'scode');
                //PATCH remove duplicates
                sensorsReceived = sensors
            });
        })

    req.on('error', error => {
        console.error(error)
    })

    req.end()
}

app.get('/parking/stations.json', cors(corsOptions),  function (req, res) {
    var parkingStations = [];
    if(stationsReceived){
        for(var i = 0; i < stationsReceived.length; i++){
            var station = stationsReceived[i];
            if(station.sactive && station.scoordinate && station.smetadata){
                parkingStations.push({
                    station_id: station.scode,
                    name: station.sname,
                    lat: station.scoordinate.y,
                    lon: station.scoordinate.x,
                    address: station.smetadata.mainaddress,
                    city: station.smetadata.municipality,
                    capacity: station.smetadata.capacity || 0,
                    free: station.mvalue || 0
                })
            }
        }
    }
    res.json({
        last_updated: lastUpdate,
        ttl: 0,
        version: "1.0",
        data: {
            stations: parkingStations
       }
    });
});

app.get('/parking/park-ride.json', cors(corsOptions),  function (req, res) {
    var parkingStations = [];
    if(stationsReceived){
        for(var i = 0; i < stationsReceived.length; i++){
            var station = stationsReceived[i];
            if(station.sactive && station.scoordinate && station.smetadata) {

                parkingStations.push({
                    id: station.scode,
                    name: station.sname,
                    status: "ACTIVE",
                    capacity: station.smetadata.capacity || 0,
                    free: station.mvalue || 0,
                    geometry: circleToPolygon(
                        [station.scoordinate.x, station.scoordinate.y],
                        Number(config.server.geometryCircleRadius),
                        {}
                    )
                })
            }
        }
    }
    res.json({
        results: parkingStations
    });
});

app.get('/parking/sensors.json', cors(corsOptions), function (req, res) {
    var parkingSensors = [];
    if(sensorsReceived){
        for(var i = 0; i < sensorsReceived.length; i++){
            var sensor = sensorsReceived[i];
            if(sensor.sactive && sensor.scoordinate && sensor.smetadata){
                parkingSensors.push({
                    sensor_id: sensor.scode,
                    name: sensor.sname,
                    lat: sensor.scoordinate.y,
                    lon: sensor.scoordinate.x,
                    address: sensor.smetadata.group,
                    city: sensor.smetadata.municipality,
                    free: sensor.mvalue === 1 ? false : true
                })
            }
        }
    }
    res.json({
        last_updated: lastUpdate,
        ttl: 0,
        version: "1.0",
        data: {
            sensors: parkingSensors
       }
    });
});

app.get('/parking/all.json', cors(corsOptions), function (req, res) {
    var parkingStationsAll = [];
    if(stationsReceived){
        for(var i = 0; i < stationsReceived.length; i++){
            var station = stationsReceived[i];
            if(station.sactive && station.scoordinate && station.smetadata){
                parkingStationsAll.push({
                    type: 'station',
                    station_id: station.scode,
                    name: station.sname,
                    lat: station.scoordinate.y,
                    lon: station.scoordinate.x,
                    address: station.smetadata.mainaddress,
                    city: station.smetadata.municipality,
                    capacity: station.smetadata.capacity || 0,
                    free: station.mvalue || 0
                })
            }
        }
    }
    var parkingSensorsAll = [];
    if(sensorsReceived){
        for(var i = 0; i < sensorsReceived.length; i++){
            var sensor = sensorsReceived[i];
            if(sensor.sactive && sensor.scoordinate && sensor.smetadata){
                parkingSensorsAll.push({
                    type: 'sensor',
                    station_id: sensor.scode+Math.random(),                    
                    group: sensor.smetadata.group,
                    group_id: sensor.smetadata.id2,
                    name: sensor.sname,
                    lat: sensor.scoordinate.y,
                    lon: sensor.scoordinate.x,
                    address: sensor.smetadata.group,
                    city: sensor.smetadata.municipality,
                    free: sensor.mvalue === 1 ? false : true
                });
            }
        }
    }
    const MIN_GROUP_SENSORS = Number(config.server.min_group_sensors) || 4;
    const parkingSensors = [];
    const parkingSensorsGroups = _.chain(parkingSensorsAll)
        .groupBy('group')
        .map((sensors, groupName)=> {
            if(sensors.length < MIN_GROUP_SENSORS) {
                return {
                    type: 'sensorGroup',
                    station_id: groupName,
                    name: groupName,
                    //TODO midpoint of all sensors
                    lat: sensors[0].lat,
                    lon: sensors[0].lon,
                    capacity: sensors.length,
                    sensors
                }
            }
            else {
                sensors.map( sensor => {
                    parkingSensors.push(sensor);
                });
                return null;
            }
        })
        .compact()
        .value()

    res.json({
        last_updated: lastUpdate,
        ttl: 0,
        version: "1.0",
        data: {
            stations: _.concat(
                parkingSensors,
                parkingSensorsGroups,
                parkingStationsAll
                )
       }
    });
});


var server = app.listen(config.server.port, function () {
   console.log("Listening on port ", config.server.port);
})
