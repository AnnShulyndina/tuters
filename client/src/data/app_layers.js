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
import LogoBottomObject from "../icons/srd/srd_points.png"
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
            }],
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
                icon: LogoIzobata,
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
        isOnMap: true,
        controlClassName: "icons-lighthouse-item",
        layers: [
            {
                layerKey: 108,
                label: "Маяк",
                icon: LogoLightHousePhoto,
                icons: [{
                    type: 'Маяк (модель)',
                    icon: LogoLightHouse
                }, {
                    type: 'Вид с маяка',
                    icon: LogoLightHousePhoto
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
        isOnMap: true,
        controlClassName: "icons-tools-item",
        layers: [
            {
                layerKey: 109,
                label: "Инструменты исследования окружающей среды",
                icon: LogoTools,
                icons: [{
                    type: 'Радарный датчик',
                    icon: LogoTools
                }, {
                    type: "Автоматическая метеостанция (АМС)",
                    icon: LogoMeteo
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
        isOnMap: true,
        controlClassName: "icons-specialObg-item",
        layers: [
            {
                layerKey: 110,
                label: "Особые объекты",
                icon: LogoSpecialObg,
                icons: [{
                    type: 'Бункер',
                    icon: LogoBunker
                }, {
                    type: 'Указатель',
                    icon: LogoSignpost
                }, {
                    type: 'Фотографии',
                    icon: LogoPhoto
                }, {
                    type: 'Пристань',
                    icon: LogoHarbor
                }, {
                    type: 'Лодка',
                    icon: LogoBoat
                }, {
                    type: 'Вертолётная площадка',
                    icon: LogoHelipad
                }, {
                    type: 'Немецкое кладбище',
                    icon: LogoCatholicGrave
                }, {
                    type: 'Финское кладбие',
                    icon: LogoFinGrave
                }, {
                    type: 'Артиллерийское орудие (разрушенное)',
                    icon: LogoArtillery
                }, {
                    type: 'Артиллерийское орудие',
                    icon: LogoArtillery
                }, {
                    type: 'Крест',
                    icon: LogoHeadstone
                }],
                feature: art_poi,
                featureType: "GeoJSON"
            }
        ],
    },
    //Tech Objects
    {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "icons-techObj-item",
        layers: [
            {
                layerKey: 111,
                label: "Техногенные объекты",
                icon: LogoTechImpact,
                icons: [{
                    type: 'Мусор',
                    icon: LogoTrash
                }, {
                    type: 'Металлолом',
                    icon: LogoMetall
                }, {
                    type: 'Фотографии',
                    icon: LogoPhoto
                }, {
                    type: 'Пристань',
                    icon: LogoHarbor
                }, {
                    type: 'Лодка',
                    icon: LogoBoat
                }, {
                    type: 'Опасность',
                    icon: LogoDanger
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
        isOnMap: true,
        controlClassName: "icons-birds-item",
        layers: [
            {
                layerKey: 112,
                label: "Места обитания птиц, животных и растений",
                icon: LogoCrow,
                icons: [{
                    type: 'Зарянка - Erithacus rubecula ',
                    icon: LogoCrow
                }, {
                    type: 'Зяблик - Fringilla coelebs',
                    icon: LogoCrow
                }, {
                    type: 'Пеночка-теньковка - Phylloscopus collybita',
                    icon: LogoCrow
                }, {
                    type: 'Белая трясогузка - Motacilla alba',
                    icon: LogoCrow
                }, {
                    type: "Речная крачка - Larus argentatus",
                    icon: LogoCrow
                }, {
                    type: 'Серебристая чайка - Larus argentatus',
                    icon: LogoCrow
                }, {
                    type: 'Длинноносый крохаль - Mergus serrator',
                    icon: LogoCrow
                }, {
                    type: 'Сизая чайка - Larus canus',
                    icon: LogoCrow
                }, {
                    type: 'Белая трясогузка - Motacilla alba',
                    icon: LogoCrow
                }, {
                    type: 'Белощекая казарка - Branta leucopsis',
                    icon: LogoCrow
                }, {
                    type: 'Чернозобик - Calidris alpina',
                    icon: LogoCrow
                }, {
                    type: 'Озерная чайка - Chroicocephalus ridibundus',
                    icon: LogoCrow
                }, {
                    type: 'Морская чайка - Larus marinus',
                    icon: LogoCrow
                }, {
                    type: 'Кряква - Anas platyrhynchos',
                    icon: LogoCrow
                }, {
                    type: 'Белощекая казарка - Branta leucopsis',
                    icon: LogoCrow
                }, {
                    type: 'Длинноносый крохаль - Mergus serrator',
                    icon: LogoCrow
                }, {
                    type: 'Кукушка обыкновенная - Cuculus canorus',
                    icon: LogoCrow
                }, {
                    type: 'Зарянка - Erithacus rubecula',
                    icon: LogoCrow
                }, {
                    type: 'Чечетка - Carduelis flammea',
                    icon: LogoCrow
                }, {
                    type: 'Баклан большой - Phalacrocorax carbo',
                    icon: LogoCrow
                }, {
                    type: 'Гоголь - Bucephala clangula',
                    icon: LogoCrow
                }, {
                    type: 'Снегирь - Pyrrhula pyrrhula',
                    icon: LogoCrow
                }, {
                    type: 'Серая утка - Anas streptera',
                    icon: LogoCrow
                }, {
                    type: 'Пеночка-трещотка - Phylloscopus sibilatrix',
                    icon: LogoCrow
                }, {
                    type: 'Черный дрозд - Turdus merula',
                    icon: LogoCrow
                }, {
                    type: 'Длинноносый крохаль - Mergus serrator',
                    icon: LogoCrow
                }, {
                    type: 'Речная крачка - Larus argentatus',
                    icon: LogoCrow
                }, {
                    type: 'Соловей обыкновенный - Luscinia luscinia',
                    icon: LogoCrow
                }, {
                    type: 'Коростель - Crex crex - Luscinia luscinia',
                    icon: LogoCrow
                }, {
                    type: 'Кряква - Anas platyrhynchos',
                    icon: LogoCrow
                }, {
                    type: 'Соловей обыкновенный - Luscinia luscinia',
                    icon: LogoCrow
                }, {
                    type: 'Кулик-сорока - Haematopus ostralegus',
                    icon: LogoCrow
                }, {
                    type: 'Лебедь шипун - Cygnus olor',
                    icon: LogoCrow
                }, {
                    type: 'Галстучник - Charadrius hiaticula',
                    icon: LogoCrow
                }, {
                    type: 'Черныш - Tringa ochropus',
                    icon: LogoCrow
                }, {
                    type: 'Озерная чайка - Chroicocephalus ridibundus',
                    icon: LogoCrow
                }, {
                    type: 'Серебристая чайка - Larus argentatus',
                    icon: LogoCrow
                }, {
                    type: 'Белощекая казарка - Branta leucopsis',
                    icon: LogoCrow
                }, {
                    type: 'Енотовидная собака - Nyctereutes procyonoides(следы)',
                    icon: LogoDachs
                }, {
                    type: 'Кулик-сорока - Haematopus ostralegus',
                    icon: LogoCrow
                }, {
                    type: 'Сизая чайка - Larus canus',
                    icon: LogoCrow
                }, {
                    type: 'Серебристая чайка - Larus argentatus',
                    icon: LogoCrow
                }, {
                    type: 'Кряква - Anas platyrhynchos',
                    icon: LogoCrow
                }, {
                    type: 'Серый гусь - Anser anser',
                    icon: LogoDachs
                }, {
                    type: 'Серый журавль - Grus grus',
                    icon: LogoCrow
                }, {
                    type: 'Брусника – Vaccinium vitis-idaea',
                    icon: LogoFlower
                }, {
                    type: 'Ива козья – Salix caprea',
                    icon: LogoFlower
                }, {
                    type: 'Вереск обыкновенный – Calluna vulgaris',
                    icon: LogoFlower
                }, {
                    type: 'Можжевельник обыкновенный – Juniperus communis',
                    icon: LogoFlower
                }, {
                    type: 'Осина обыкновенная– Populus tremula',
                    icon: LogoFlower
                }, {
                    type: 'Рябина обыкновенная – Sorbus aucuparia',
                    icon: LogoFlower
                }, {
                    type: 'Смородина альпийская – Ribes alpinum',
                    icon: LogoFlower
                }, {
                    type: 'Черника – Vaccinium myrtillis',
                    icon: LogoFlower
                }],
                feature: birds,
                featureType: "GeoJSON"
            }
        ],
    },

    // //landscape
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
                icon: null,
                feature: "",
                featureType: "GeoJSON"
            }
        ],
    },
    //MagField
     {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "depths-item",
        layers: [
            {
                layerKey: 116,
                label: "Исследования магнитного поля",
                icon: LogoDepth,
                feature: mag_margins,
                featureType: "GeoJSON"

            }
        ],
    }


]
export default groupLayers