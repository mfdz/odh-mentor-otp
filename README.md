
# OpenTripPlanner Openmove Docker Services

This project contains a Docker images for stable
[OpenTripPlanner](http://opentripplanner.org) releases.
*docker-compose* is required.

## Services

defined in docker-compose.yml

```build``` build a new OTP graph by /data directory, automatically stopped on finish, ```docker logs``` notice if the building was successful.

```otp``` run a new instance of OTP by /data, distribute API rest and default UI on port 8080, need restart: "always"

## Volumes

```/opt/odh-mentor-otp/:/data/``` the path used in reading and writing in which the Osm, Altimetric data are downloaded.
It must contains the GTFS zip file before building the graph.
Here where the graph generated will be written by OTP, in path ```/data/openmove/Graph.obj```

## Scripts

```docker-entrypoint.sh``` download and build data graph

```otp.jar``` compiled version of Opentriplanner

```otp.sh``` a shortcut for command `java -jar otp.jar`

```gtfs2bbox``` nodejs script to calculate bounding boxes of Openstreetmap intersects GTFS data for downloading, create a list of overpass downloadable urls


### Environment

```JAVA_MX``` the amount of heap space available to OpenTripPlanner. (The `otp.sh` script adds `-Xmx$JAVA_MX` to the `java` command.) Default: 2G

```BUILD_GRAPH``` if *True* force the re/construction of the roads graph starting from the data: osm, gtfs, srtm.
	Generate a new *Graph.obj* file in the path ```/data/openmove/Graph.obj```
	
```BACKUP_GRAPH``` if *True* create also a backup copy for each new graph in path ```/data/Graph.obj.%y-%m-%d.tgz```

## Usage

calculate bounding box with buffer for GTFS directory

1) download and unzip gtfs in data directory:
```bash
cd ./data
wget http://example.source.gtfs.com/200804_ExportGTFS.zip
unzip -o ./data/200804_ExportGTFS.zip -d ./data/gtfs
```

2) calculate api overpass urls to download .osm files
```bash
cd gtfs2bbox/
npm install
node bboxes.js ../data/gtfs --overpass > ../data/osm.url
```

contents of file ```../data/osm.url```
```javascript
https://overpass-api.de/api/map?bbox=9.880233649086051,46.30580331792924,10.397045932724035,46.66553146341906
https://overpass-api.de/api/map?bbox=9.880233649086051,46.66553146341906,10.397045932724035,47.025259608908875
...
```
a list of urls of small pieces of osm data needed to fill the area occupied by the gtfs data.
These can be downloaded separately or by build service and they will then be merged during the OTP building graph.

3) check environment vars of servive ```build``` contains:
```yml
environment:
      - GTFS_FILE=200804_ExportGTFS.zip
      - DOWNLOAD_DATA=True
      - BUILD_GRAPH=True
```
the service build automatically download Openstreetmap data and terrain model.

## First build Graph and Cache

```bash
docker-compose up build
```

## Execute OTP instance

```bash
docker-compose up otp
```

After the graph has been built, the planner is available at port *8080*.


### Experimental scripts

async parallel download osm data directly by nodejs, see gtfs2bbox directory to learn more
```bash
cd gtfs2bbox/
node bboxes.js ../data/200804_ExportGTFS  | node fetch-osm-wget.js
```
