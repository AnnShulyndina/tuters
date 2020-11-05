

const style_oopt =
    {
        color: 'rgb(50,200,50)',
        lineCap: 'square',
        lineJoin: 'bevel',
        fillColor: 'rgb(50,200,50)',
        fill: true,
        strokeWidth: 4,
        weight: 3.0,
    }

function style_village_zone() {
    return {
        color: 'rgb(50,50,250)',
        lineCap: 'square',
        lineJoin: 'bevel',
        fillColor: 'rgb(50,200,250)',
        fill: true,
        strokeWidth: 4,
        weight: 3.0,
    }
}

function style_cleared_area() {
    return {
        color: 'rgb(50,50,50)',
        lineCap: 'square',
        lineJoin: 'bevel',
        fillColor: 'rgb(150,100,250)',
        fill: true,
        strokeWidth: 4,
        weight: 3.0,
    }
}

function style_ortoAdd() {
    return {
        color: 'rgb(233,158,158)',
        lineCap: 'square',
        lineJoin: 'bevel',
        fillColor: 'rgb(233,200,200)',
        fill: true,
        strokeWidth: 4,
        weight: 3.0,
    }
}

function style_survey(feature) {
    var fillColor = 'rgba(255,255,255,1.0)';
    if (feature.properties['ZLEVEL'] >= -1000.000000 && feature.properties['ZLEVEL'] <= -950.000000 ) {
        fillColor = 'rgba(255,255,255,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= -950.000000 && feature.properties['ZLEVEL'] <= -800.000000 ) {
        fillColor = 'rgba(33,130,185,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= -800.000000 && feature.properties['ZLEVEL'] <= -650.000000 ) {
        fillColor = 'rgba(61,147,195,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= -650.000000 && feature.properties['ZLEVEL'] <= -500.000000 ) {
        fillColor = 'rgba(89,164,204,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= -500.000000 && feature.properties['ZLEVEL'] <= -350.000000 ) {
         fillColor = 'rgba(118,180,213,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= -350.000000 && feature.properties['ZLEVEL'] <= -250.000000 ) {
        fillColor = 'rgba(146,197,222,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= -250.000000 && feature.properties['ZLEVEL'] <= -150.000000 ) {
        fillColor = 'rgba(166,207,227,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= -150.000000 && feature.properties['ZLEVEL'] <= -50.000000 ) {
        fillColor = 'rgba(187,217,232,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= -50.000000 && feature.properties['ZLEVEL'] <= 0.000000 ) {
        fillColor = 'rgba(207,227,237,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= 0.000000 && feature.properties['ZLEVEL'] <= 50.000000 ) {
        fillColor = 'rgba(227,237,242,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= 50.000000 && feature.properties['ZLEVEL'] <= 100.000000 ) {
        fillColor = 'rgba(247,247,247,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= 100.000000 && feature.properties['ZLEVEL'] <= 150.000000 ) {
        fillColor = 'rgba(247,231,224,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= 150.000000 && feature.properties['ZLEVEL'] <= 200.000000 ) {
        fillColor = 'rgba(246,215,200,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= 200.000000 && feature.properties['ZLEVEL'] <= 300.000000 ) {
        fillColor = 'rgba(246,198,177,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= 300.000000 && feature.properties['ZLEVEL'] <= 400.000000 ) {
        fillColor = 'rgba(245,182,154,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= 400.000000 && feature.properties['ZLEVEL'] <= 500.000000 ) {
        fillColor = 'rgba(244,165,130,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= 500.000000 && feature.properties['ZLEVEL'] <= 600.000000 ) {
        fillColor = 'rgba(236,132,110,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= 600.000000 && feature.properties['ZLEVEL'] <= 700.000000 ) {
        fillColor = 'rgba(228,99,91,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= 700.000000 && feature.properties['ZLEVEL'] <= 800.000000 ) {
        fillColor = 'rgba(219,66,71,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= 800.000000 && feature.properties['ZLEVEL'] <= 900.000000 ) {
        fillColor = 'rgba(211,33,51,1.0)';
    }
    else if (feature.properties['ZLEVEL'] >= 900.000000 && feature.properties['ZLEVEL'] <= 1000.000000 ) {
        fillColor = 'rgba(202,0,32,1.0)';
    }
    return {
        stroke: false, 
        fill: true,
        fillOpacity: 1,
        fillColor: fillColor
    }
}

function style_mag_border() {
    return {
        opacity: 1,
        color: 'rgba(255,255,255,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1, 
        fill: false,
        strokeWidth: 5,
        weight: 3.0,
    }
}

function style_isoanomalies() {
    return {
        pane: 'pane_Isoanomalies_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1, 
        fillOpacity: 0,
    }
}

function style_roads() {
    return {
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '10,5',
        lineCap: 'square',
        lineJoin: 'round',
        weight: 1.0,
        fillOpacity: 0,
    }
}