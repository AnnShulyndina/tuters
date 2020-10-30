import LogoLightHouse from "../icons/icons/lighthouse.png";
import art_poi from "./art_poi";
import LogoIsobath from "../icons/srd/srd_izobata.png";
import srd_izobata_10 from "../data/srd_izobata_10"
import oopt_zone from "./oopt_zone";
import LogoBottomObject from "../icons/srd/srd_points.png";
import srd_points from "./srd_points";
import LogoSRD from "../icons/srd/srd_grid.png";
import srd_grid from "./map_image/srd_grid.png";
import LogoTerrOOPT from "../icons/terr/green.svg";
import LogoTerrFinVil from "../icons/terr/blue.svg";
import village_zone from "./village_zone";
import LogoTerrClean from "../icons/terr/purple.svg";
import cleared_area from "./cleared_area";
import LogoTerrAeroPhoton from "../icons/terr/pink.svg";
import air_add from "./air_add";
import LogoTools from "../icons/icons/level.png";
import LogoSpecialObg from "../icons/icons/headstone.png";
import LogoTechImpact from "../icons/icons/metall.png";
import LogoAnimalPlaces from "../icons/icons/crow.png";
import art_tools from "../data/art_tools"
import artificial from "../data/artificial"

import birds from "../data/birds"
import LogoPhoto from "../icons/land/photo.png";
import LogoRoad from "../icons/land/Line.png";
import roads from "../data/roads"

let groupLayers = [

    /*territory legend*/
    {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "terr-oopt-item",
        layers: [
            {
                layerKey: 101,
                label: "Территория ООПТ",
                icon: LogoTerrOOPT,
                feature: oopt_zone,
                featureType: "GeoJSON",
            },
        ],
    }, {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "terr-fin-item",
        layers: [
            {
                layerKey: 102,
                label: "Территория финской деревни",
                icon: LogoTerrFinVil,
                feature: village_zone,
                featureType: "GeoJSON"
            },
        ],
    }, {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "terr-cleaned-item",
        layers: [
            {
                layerKey: 103,
                label: "Очищенная территория",
                icon: LogoTerrClean,
                feature: cleared_area,
                featureType: "GeoJSON"
            }
        ],
    }, {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "terr-air-item",
        layers: [
            {
                layerKey: 104,
                label: "Территория детальной аэрофотосъемки",
                icon: LogoTerrAeroPhoton,
                feature: air_add,
                featureType: "GeoJSON"
            }
        ],
    },
    //SRD
    {
        groupLabel: "Съемка рельефа дна",
        isOnMap: true,
        controlClassName: "srd-item",
        layers: [
            {
                layerKey: 105,
                label: "Изобата (10 м)",
                icon: LogoIsobath,
                feature: srd_izobata_10,
                featureType: "GeoJSON"
            }, {
                layerKey: 106,
                label: "Объекты на дне",
                icon: LogoBottomObject,
                feature: srd_points,
                featureType: "GeoJSON"
            }, {
                layerKey: 107,
                label: "СРД",
                icon: LogoSRD,
                feature: srd_grid,
                featureType: "raster",
                bounds: [
                    [59.829035277018569, 27.2013], [59.929035277018569, 27.3013]
                ],
            }
        ],
    },
    //icons
    {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "icons-lighthouse-item",
        layers: [
            {
                layerKey: 108,
                label: "Маяк",
                icon: LogoLightHouse,
                feature: art_poi,
                featureType: "GeoJSON"
            }
        ],
    },
     {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "icons-tools-item",
        layers: [
            {
                layerKey: 109,
                label: "Инструменты исследования окружающей среды",
                icon: LogoTools,
                feature: art_tools,
                featureType: "GeoJSON"
            }
        ],
    },
     {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "icons-specialObg-item",
        layers: [
            {
                layerKey: 110,
                label: "Особые объекты",
                icon: LogoSpecialObg,
                feature: artificial,
                featureType: "GeoJSON"
            }
        ],
    },
     {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "icons-techObj-item",
        layers: [
            {
                layerKey: 111,
                label: "Техногенные объекты",
                icon: LogoTechImpact,
                feature: '',
                featureType: "GeoJSON"
            }
        ],
    },
     {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "icons-birds-item",
        layers: [
            {
                layerKey: 112,
                label: "Места обитания птиц, животных и растений",
                icon: LogoAnimalPlaces,
                feature: birds,
                featureType: "GeoJSON"
            }
        ],
    },
    //landscape
    {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "land-photo-item",
        layers: [
            {
                layerKey: 113,
                label: "Фотографии",
                icon: LogoPhoto,
                feature: '',
                featureType: "GeoJSON"
            }
        ],
    },
    {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "land-road-item",
        layers: [
            {
                layerKey: 114,
                label: "Тропы и дорожки",
                icon: LogoRoad,
                feature: roads,
                featureType: "GeoJSON"
            }
        ],
    },
    {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "land-landscape-item",
        layers: [
            {
                layerKey: 115,
                label: "Ландшафты",
                icon: "",
                feature: '',
                featureType: "GeoJSON"
            }
        ],
    },












]
export default groupLayers