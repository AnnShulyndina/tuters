import LogoLightHouse from "../icons/icons/lighthouse.png";
import LogoLightHousePhoto from "../icons/icons/lighthouse_photo.png";

import LogoBunker from "../icons/icons/bunker.png";
import LogoSignpost from "../icons/icons/signpost.png";
import LogoHelipad from "../icons/icons/helipad.png";
import LogoCatholicGrave from "../icons/icons/catholicgrave.png";
import LogoFinGrave from "../icons/icons/cemetary.png";
import LogoArtillery from "../icons/icons/artillery.png";
import LogoHeadstone from "../icons/icons/headstone.png";
import LogoSpecialObg from "../icons/icons/headstone.png";

import LogoTechImpact from "../icons/icons/metall.png";
import LogoMetall from "../icons/icons/metall.png";
import LogoTrash from "../icons/icons/trash.png";
import LogoPhoto from "../icons/icons/photo.png";
import LogoHarbor from "../icons/icons/harbor.png";
import LogoBoat from "../icons/icons/boat.png";
import LogoDanger from "../icons/icons/danger.png";

import LogoTools from "../icons/icons/level.png";
import LogoMeteo from "../icons/icons/meteo.png";

import LogoCrow from "../icons/icons/crow.png";
import LogoDachs from "../icons/icons/dachs.png";
import LogoFlower from "../icons/icons/flower.png";

import LogoRoad from "../icons/land/Line.png";

import LogoDepth from "../icons/depth/depths.svg"

import LogoIzobata from "../icons/srd/srd_izobata.png"
import LogoSrd_points from "../icons/srd/srd_points.png"
import LogoSRD from "../icons/srd/srd_grid.png"

import LogoTerrOOPT from "../icons/terr/green.svg"
import LogoTerrFinVil from "../icons/terr/blue.svg"
import LogoTerrClean from "../icons/terr/purple.svg"
import LogoTerrAeroPhoton from "../icons/terr/pink.svg"


import art_poi from "./art_poi";
import art_lighthouse from "./art_lighthouse";
import art_pollution from "./art_pollution";
import art_tools from "./art_tools";
import birds from "./birds";
import roads from "./roads";
import mag_margins from "./mag_margins";
import srd_izobata_10 from "./srd_izobata_10";
import srd_points from "./srd_points";
import oopt_zone from "./oopt_zone";
import village_zone from "./village_zone";
import cleared_area from "./cleared_area";
import air_add from "./air_add";
import zone from "./zone";

function style_zone(feature) {
    var zone_fillColor='';
    switch(String(feature.properties['name'])) {
        case 'Болото': {
            zone_fillColor  ='rgb(33,183,191)';
            break;
        }
        case 'Валуны': {
            zone_fillColor  ='rgb(134, 121, 134)';
            break;
        }
        case 'Ветровал': {
            zone_fillColor  ='rgb(36, 131, 103)';
            break;
        }
        case 'Зарослевая литораль': {
            zone_fillColor  ='rgb(36, 219, 103)';
            break;
        }
        case 'Лесной массив': {
            zone_fillColor  ='rgb(178,223,138)';
            break;
        }
        case 'Морена': {
            zone_fillColor  ='rgb(36, 219, 255)';
            break;
        }
        case 'Пески': {
            zone_fillColor  ='rgb(253,191,111)';
            break;
        }
        case 'Прочее': {
            zone_fillColor  ='rgb(178, 90, 29)';
            break;
        }
        case 'Скалы': {
            zone_fillColor  ='rgb(103, 59, 64)';
            break;
        }
        case 'Скальный сосняк': {
            zone_fillColor  ='rgb(103, 118, 64)';
            break;
        }
        case 'Сосняк лишайниковый': {
            zone_fillColor  ='rgb(103, 152, 64)';
            break;
        }
    }
    return {
        fill: true,
        fillColor: zone_fillColor,
        fillOpacity: 0.8,
        weight: 0,
    }
}

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
                iconUrl: LogoTerrOOPT,
                feature: oopt_zone,
                featureType: "GeoJSON",
                style: {
                    color: 'rgb(143,188,143)',
                    lineCap: 'square',
                    lineJoin: 'bevel',
                    fillColor: 'rgb(50,200,50)',
                    fill: true,
                    strokeWidth: 4,
                    weight: 3.0,
                }
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
                iconUrl: LogoTerrFinVil,
                feature: village_zone,
                featureType: "GeoJSON",
                style: {
                    color: 'rgb(0,0,205)',
                    lineCap: 'square',
                    lineJoin: 'bevel',
                    fillColor: 'rgb(00,191,255)',
                    fill: true,
                    strokeWidth: 4,
                    weight: 3.0,
                }
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
                iconUrl: LogoTerrClean,
                feature: cleared_area,
                featureType: "GeoJSON",
                style: {
                    color: 'rgb(160,32,240)',
                    lineCap: 'square',
                    lineJoin: 'bevel',
                    fillColor: 'rgb(148,0,211)',
                    fill: true,
                    strokeWidth: 4,
                    weight: 3.0,
                }
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
                iconUrl: LogoTerrAeroPhoton,
                feature: air_add,
                featureType: "GeoJSON",
                style: {
                    color: 'rgb(233,158,158)',
                    lineCap: 'square',
                    lineJoin: 'bevel',
                    fillColor: 'rgb(233,200,200)',
                    fill: true,
                    strokeWidth: 4,
                    weight: 3.0,
                }
            }],
    },

    //SRD
    {
        groupLabel: "Съемка рельефа дна",
        isOnMap: true,
        controlClassName: "srd-item",
        layers:

            [
           {
                layerKey: 105,
                label: "Изобата (10 м)",
               iconUrl: LogoIzobata,
                feature: srd_izobata_10,
                featureType: "GeoJSON"
            }, {
                layerKey: 106,
                label: "Объекты на дне",
                iconUrl: LogoSrd_points,
                feature: srd_points,
                featureType: "GeoJSON",
                iconSize: [5, 5],
                iconAnchor: [5, 5]
            }, {
                layerKey: 107,
                label: "СРД",
                iconUrl: LogoSRD,
                feature: '',
                featureType: "raster",
                bounds: [
                    [59.829035277018569, 27.2013], [59.929035277018569, 27.3013]
                ],
            }
        ],
    },


    //Lighthouse
    {
        groupLabel: null,
        isOnMap: false,
        controlClassName: "icons-lighthouse-item",
        layers: [
            {
                layerKey: 108,
                label: "Маяк",
                iconUrl: LogoLightHouse,
                icons: [{
                    type: 'Маяк (модель)',
                    iconUrl: LogoLightHouse
                }, {
                    type: 'Вид с маяка',
                    iconUrl: LogoLightHousePhoto,
                    style: {
                        width: '14px',
                        height: "14px",
                    }
                },
                ],
                feature: art_lighthouse,
                featureType: "GeoJSON"
            }
        ],
    },

    //Art tools
    {
        groupLabel: null,
        isOnMap: false,
        controlClassName: "icons-tools-item",
        layers: [
            {
                layerKey: 109,
                label: "Инструменты исследования окружающей среды",
                iconUrl: LogoTools,
                icons: [{
                    type: 'Радарный датчик',
                    iconUrl: LogoTools
                }, {
                    type: "Автоматическая метеостанция (АМС)",
                    iconUrl: LogoMeteo
                }
                ],


                feature: art_tools,
                featureType: "GeoJSON"
            }
        ],
    },
    //Special Objects
    {
        groupLabel: null,
        isOnMap: false,
        controlClassName: "icons-specialObg-item",
        layers: [
            {
                layerKey: 110,
                label: "Особые объекты",
                iconUrl: LogoSpecialObg,
                icons: [{
                    type: 'Бункер',
                    iconUrl: LogoBunker
                }, {
                    type: 'Указатель',
                    iconUrl: LogoSignpost
                }, {
                    type: 'Фотографии',
                    iconUrl: LogoPhoto
                }, {
                    type: 'Пристань',
                    iconUrl: LogoHarbor
                }, {
                    type: 'Лодка',
                    iconUrl: LogoBoat
                }, {
                    type: 'Вертолётная площадка',
                    iconUrl: LogoHelipad
                }, {
                    type: 'Немецкое кладбище',
                    iconUrl: LogoCatholicGrave
                }, {
                    type: 'Финское кладбие',
                    iconUrl: LogoFinGrave
                }, {
                    type: 'Артиллерийское орудие (разрушенное)',
                    iconUrl: LogoArtillery
                }, {
                    type: 'Артиллерийское орудие',
                    iconUrl: LogoArtillery
                }, {
                    type: 'Крест',
                    iconUrl: LogoHeadstone
                }],
                feature: art_poi,
                featureType: "GeoJSON"
            }
        ],
    },
    //Tech Objects
    {
        groupLabel: null,
        isOnMap: false,
        controlClassName: "icons-techObj-item",
        layers: [
            {
                layerKey: 111,
                label: "Техногенные объекты",
                iconUrl: LogoTechImpact,
                icons: [{
                    type: 'Мусор',
                    iconUrl: LogoTrash
                }, {
                    type: 'Металлолом',
                    iconUrl: LogoMetall
                }, {
                    type: 'Фотографии',
                    iconUrl: LogoPhoto
                }, {
                    type: 'Пристань',
                    iconUrl: LogoHarbor
                }, {
                    type: 'Лодка',
                    iconUrl: LogoBoat
                }, {
                    type: 'Опасность',
                    iconUrl: LogoDanger
                },
                ],
                feature: art_pollution,
                featureType: "GeoJSON"
            }
        ],
    },
    //Birds
    {
        groupLabel: null,
        isOnMap: false,
        controlClassName: "icons-birds-item",
        layers: [
            {
                layerKey: 112,
                label: "Места обитания птиц, животных и растений",
                iconUrl: LogoCrow,
                icons: [{
                    type: 'Зарянка - Erithacus rubecula ',
                    iconUrl: LogoCrow
                }, {
                    type: 'Зяблик - Fringilla coelebs',
                    iconUrl: LogoCrow
                }, {
                    type: 'Пеночка-теньковка - Phylloscopus collybita',
                    iconUrl: LogoCrow
                }, {
                    type: 'Белая трясогузка - Motacilla alba',
                    iconUrl: LogoCrow
                }, {
                    type: "Речная крачка - Larus argentatus",
                    iconUrl: LogoCrow
                }, {
                    type: 'Серебристая чайка - Larus argentatus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Длинноносый крохаль - Mergus serrator',
                    iconUrl: LogoCrow
                }, {
                    type: 'Сизая чайка - Larus canus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Белая трясогузка - Motacilla alba',
                    iconUrl: LogoCrow
                }, {
                    type: 'Белощекая казарка - Branta leucopsis',
                    iconUrl: LogoCrow
                }, {
                    type: 'Чернозобик - Calidris alpina',
                    iconUrl: LogoCrow
                }, {
                    type: 'Озерная чайка - Chroicocephalus ridibundus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Морская чайка - Larus marinus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Кряква - Anas platyrhynchos',
                    iconUrl: LogoCrow
                }, {
                    type: 'Белощекая казарка - Branta leucopsis',
                    iconUrl: LogoCrow
                }, {
                    type: 'Длинноносый крохаль - Mergus serrator',
                    iconUrl: LogoCrow
                }, {
                    type: 'Кукушка обыкновенная - Cuculus canorus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Зарянка - Erithacus rubecula',
                    iconUrl: LogoCrow
                }, {
                    type: 'Чечетка - Carduelis flammea',
                    iconUrl: LogoCrow
                }, {
                    type: 'Баклан большой - Phalacrocorax carbo',
                    iconUrl: LogoCrow
                }, {
                    type: 'Гоголь - Bucephala clangula',
                    iconUrl: LogoCrow
                }, {
                    type: 'Снегирь - Pyrrhula pyrrhula',
                    iconUrl: LogoCrow
                }, {
                    type: 'Серая утка - Anas streptera',
                    iconUrl: LogoCrow
                }, {
                    type: 'Пеночка-трещотка - Phylloscopus sibilatrix',
                    iconUrl: LogoCrow
                }, {
                    type: 'Черный дрозд - Turdus merula',
                    iconUrl: LogoCrow
                }, {
                    type: 'Длинноносый крохаль - Mergus serrator',
                    iconUrl: LogoCrow
                }, {
                    type: 'Речная крачка - Larus argentatus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Соловей обыкновенный - Luscinia luscinia',
                    iconUrl: LogoCrow
                }, {
                    type: 'Коростель - Crex crex - Luscinia luscinia',
                    iconUrl: LogoCrow
                }, {
                    type: 'Кряква - Anas platyrhynchos',
                    iconUrl: LogoCrow
                }, {
                    type: 'Соловей обыкновенный - Luscinia luscinia',
                    iconUrl: LogoCrow
                }, {
                    type: 'Кулик-сорока - Haematopus ostralegus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Лебедь шипун - Cygnus olor',
                    iconUrl: LogoCrow
                }, {
                    type: 'Галстучник - Charadrius hiaticula',
                    iconUrl: LogoCrow
                }, {
                    type: 'Черныш - Tringa ochropus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Озерная чайка - Chroicocephalus ridibundus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Серебристая чайка - Larus argentatus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Белощекая казарка - Branta leucopsis',
                    iconUrl: LogoCrow
                }, {
                    type: 'Енотовидная собака - Nyctereutes procyonoides(следы)',
                    iconUrl: LogoDachs
                }, {
                    type: 'Кулик-сорока - Haematopus ostralegus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Сизая чайка - Larus canus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Серебристая чайка - Larus argentatus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Кряква - Anas platyrhynchos',
                    iconUrl: LogoCrow
                }, {
                    type: 'Серый гусь - Anser anser',
                    iconUrl: LogoDachs
                }, {
                    type: 'Серый журавль - Grus grus',
                    iconUrl: LogoCrow
                }, {
                    type: 'Брусника – Vaccinium vitis-idaea',
                    iconUrl: LogoFlower
                }, {
                    type: 'Ива козья – Salix caprea',
                    iconUrl: LogoFlower
                }, {
                    type: 'Вереск обыкновенный – Calluna vulgaris',
                    iconUrl: LogoFlower
                }, {
                    type: 'Можжевельник обыкновенный – Juniperus communis',
                    iconUrl: LogoFlower
                }, {
                    type: 'Осина обыкновенная– Populus tremula',
                    iconUrl: LogoFlower
                }, {
                    type: 'Рябина обыкновенная – Sorbus aucuparia',
                    iconUrl: LogoFlower
                }, {
                    type: 'Смородина альпийская – Ribes alpinum',
                    iconUrl: LogoFlower
                }, {
                    type: 'Черника – Vaccinium myrtillis',
                    iconUrl: LogoFlower
                }],
                feature: birds,
                featureType: "GeoJSON"
            }
        ],
    },

    // //landscape
    {
        groupLabel: null,
        isOnMap: false,
        controlClassName: "land-photo-item",
        layers: [
            {
                layerKey: 113,
                label: "Фотографии",
                icon: {
                    iconUrl: LogoPhoto,
                    iconSize: [320, 320],
                    iconAnchor: [16, 27]
                },

                iconUrl: LogoPhoto,
                iconSize: [32, 32],                
                feature: '',
                featureType: "GeoJSON"
            }
        ],
    },
    {
        groupLabel: null,
        isOnMap: false,
        controlClassName: "land-road-item",
        layers: [
            {
                layerKey: 114,
                label: "Тропы и дорожки",
                iconUrl: LogoRoad,
                feature: roads,
                featureType: "GeoJSON",
                style: {
                    opacity: 1,
                    color: 'rgba(0,0,0,1.0)',
                    dashArray: '10,5',
                    lineCap: 'square',
                    lineJoin: 'round',
                    weight: 1.0,
                    fillOpacity: 0,
                }
            }
        ],
    },
    {
        groupLabel: null,
        isOnMap: false,
        controlClassName: "land-landscape-item",
        layers: [
            {
                layerKey: 115,
                label: "Ландшафты",
                iconUrl: null,
                feature: zone,
                featureType: "GeoJSON",
                style: style_zone            }
        ],
    },
    //MagField
     {
        groupLabel: "Исследования магнитного поля",
        isOnMap: false,
        controlClassName: "depths-item",
        layers: [
            {
                layerKey: 116,
                label: "",
                iconUrl: LogoDepth,
                feature: mag_margins,
                featureType: "GeoJSON"

            }
        ],
    }


]
export default groupLayers