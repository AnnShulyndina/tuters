import LogoLightHouse from "../icons/icons/lighthouse.png";
import LogoLightHousePhoto from "../icons/icons/lighthouse_photo.png";
import LogoHarbor from "../icons/icons/harbor.png";
import LogoPhoto from "../icons/icons/photo.png";
import LogoBoat from "../icons/icons/boat.png";
import LogoBunker from "../icons/icons/bunker.png";
import LogoSignpost from "../icons/icons/signpost.png";
import LogoHelipad from "../icons/icons/helipad.png";
import LogoCatholicGrave from "../icons/icons/catholicgrave.png";
import LogoFinGrave from "../icons/icons/cemetary.png";
import LogoArtillery from "../icons/icons/artillery.png";
import LogoHeadstone from "../icons/icons/headstone.png";
import art_poi from "./art_poi";
import art_lighthouse from "./art_lighthouse";
import LogoSpecialObg from "../icons/icons/headstone.png";
// import LogoDepth from "../../public/icons/depths.svg"

let groupLayers = [

    /*territory legend*/
    // {
    //     groupLabel: null,
    //     isOnMap: true,
    //     controlClassName: "terr-oopt-item",
    //     layers: [
    //         {
    //             layerKey: 101,
    //             label: "Территория ООПТ",
    //             icon: LogoTerrOOPT,
    //             feature: oopt_zone,
    //             type: 'qweqwe',
    //             featureType: "GeoJSON",
    //         },
    //     ],
    // }, {
    //     groupLabel: null,
    //     isOnMap: true,
    //     controlClassName: "terr-fin-item",
    //     layers: [
    //         {
    //             layerKey: 102,
    //             label: "Территория финской деревни",
    //             icon: LogoTerrFinVil,
    //             feature: village_zone,
    //             featureType: "GeoJSON"
    //         },
    //     ],
    // }, {
    //     groupLabel: null,
    //     isOnMap: true,
    //     controlClassName: "terr-cleaned-item",
    //     layers: [
    //         {
    //             layerKey: 103,
    //             label: "Очищенная территория",
    //             icon: LogoTerrClean,
    //             feature: cleared_area,
    //             featureType: "GeoJSON"
    //         }
    //     ],
    // }, {
    //     groupLabel: null,
    //     isOnMap: true,
    //     controlClassName: "terr-air-item",
    //     layers: [
    //         {
    //             layerKey: 104,
    //             label: "Территория детальной аэрофотосъемки",
    //             icon: LogoTerrAeroPhoton,
    //             feature: air_add,
    //             featureType: "GeoJSON"
    //         }
    //     ],
    // },

    //SRD
    // {
    //     groupLabel: "Съемка рельефа дна",
    //     isOnMap: true,
    //     controlClassName: "srd-item",
    //     layers: [
    //         {
    //             layerKey: 105,
    //             label: "Изобата (10 м)",
    //             icon: LogoIsobath,
    //             feature: srd_izobata_10,
    //             featureType: "GeoJSON"
    //         }, {
    //             layerKey: 106,
    //             label: "Объекты на дне",
    //             icon: LogoBottomObject,
    //             feature: srd_points,
    //             featureType: "GeoJSON"
    //         }, {
    //             layerKey: 107,
    //             label: "СРД",
    //             icon: LogoSRD,
    //             feature: srd_grid,
    //             featureType: "raster",
    //             bounds: [
    //                 [59.829035277018569, 27.2013], [59.929035277018569, 27.3013]
    //             ],
    //         }
    //     ],
    // },


    //icons
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

    //  {
    //     groupLabel: null,
    //     isOnMap: true,
    //     controlClassName: "icons-tools-item",
    //     layers: [
    //         {
    //             layerKey: 109,
    //             label: "Инструменты исследования окружающей среды",
    //             icon: LogoTools,
    //             feature: art_tools,
    //             featureType: "GeoJSON"
    //         }
    //     ],
    // },

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

    //  {
    //     groupLabel: null,
    //     isOnMap: true,
    //     controlClassName: "icons-techObj-item",
    //     layers: [
    //         {
    //             layerKey: 111,
    //             label: "Техногенные объекты",
    //             icon: LogoTechImpact,
    // icons: [{
//     type:'Мусор',
//     icon: LogoTrash
// },{
//     type:'Металлолом',
//     icon: LogoMetall
// },{
//     type:'Фотографии',
//     icon: LogoPhoto
// },{
//     type:'Пристань',
//     icon: LogoHarbor
// },{
//     type:'Лодка',
//     icon: LogoBoat
// },
//     {
//         type:'Лодка',
//         icon: LogoBoat
//     },
//
//
//
// ],
    //             feature: '',
    //             featureType: "GeoJSON"
    //         }
    //     ],
    // },
    //  {
    //     groupLabel: null,
    //     isOnMap: true,
    //     controlClassName: "icons-birds-item",
    //     layers: [
    //         {
    //             layerKey: 112,
    //             label: "Места обитания птиц, животных и растений",
    //             icon: LogoAnimalPlaces,
    //             feature: birds,
    //             featureType: "GeoJSON"
    //         }
    //     ],
    // },
    // //landscape
    // {
    //     groupLabel: null,
    //     isOnMap: true,
    //     controlClassName: "land-photo-item",
    //     layers: [
    //         {
    //             layerKey: 113,
    //             label: "Фотографии",
    //             icon: LogoPhoto,
    //             feature: '',
    //             featureType: "GeoJSON"
    //         }
    //     ],
    // },
    // {
    //     groupLabel: null,
    //     isOnMap: true,
    //     controlClassName: "land-road-item",
    //     layers: [
    //         {
    //             layerKey: 114,
    //             label: "Тропы и дорожки",
    //             icon: LogoRoad,
    //             feature: roads,
    //             featureType: "GeoJSON"
    //         }
    //     ],
    // },
    // {
    //     groupLabel: null,
    //     isOnMap: true,
    //     controlClassName: "land-landscape-item",
    //     layers: [
    //         {
    //             layerKey: 115,
    //             label: "Ландшафты",
    //             icon: null,
    //             feature: '',
    //             featureType: "GeoJSON"
    //         }
    //     ],
    // },
    /* {
        groupLabel: null,
        isOnMap: true,
        controlClassName: "depths-item",
        layers: [
            {
                layerKey: 116,
                label: "Исследования магнитного поля",
                icon: LogoDepth,
                feature: '',
                featureType: ''

            }
        ],
    },*/


]
export default groupLayers