var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_KetenagakerjaanProvDKIJakarta2020_0 = new ol.format.GeoJSON();
var features_KetenagakerjaanProvDKIJakarta2020_0 = format_KetenagakerjaanProvDKIJakarta2020_0.readFeatures(json_KetenagakerjaanProvDKIJakarta2020_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KetenagakerjaanProvDKIJakarta2020_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KetenagakerjaanProvDKIJakarta2020_0.addFeatures(features_KetenagakerjaanProvDKIJakarta2020_0);var lyr_KetenagakerjaanProvDKIJakarta2020_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KetenagakerjaanProvDKIJakarta2020_0, 
                style: style_KetenagakerjaanProvDKIJakarta2020_0,
    title: 'Ketenagakerjaan Prov DKI Jakarta 2020<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2020_0_0.png" /> JAKARTA BARAT<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2020_0_1.png" /> JAKARTA PUSAT<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2020_0_2.png" /> JAKARTA SELATAN<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2020_0_3.png" /> JAKARTA TIMUR<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2020_0_4.png" /> JAKARTA UTARA<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2020_0_5.png" /> KEPULAUAN SERIBU<br />'
        });var format_KetenagakerjaanProvDKIJakarta2019_1 = new ol.format.GeoJSON();
var features_KetenagakerjaanProvDKIJakarta2019_1 = format_KetenagakerjaanProvDKIJakarta2019_1.readFeatures(json_KetenagakerjaanProvDKIJakarta2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KetenagakerjaanProvDKIJakarta2019_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KetenagakerjaanProvDKIJakarta2019_1.addFeatures(features_KetenagakerjaanProvDKIJakarta2019_1);var lyr_KetenagakerjaanProvDKIJakarta2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KetenagakerjaanProvDKIJakarta2019_1, 
                style: style_KetenagakerjaanProvDKIJakarta2019_1,
    title: 'Ketenagakerjaan Prov DKI Jakarta 2019<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2019_1_0.png" /> JAKARTA BARAT<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2019_1_1.png" /> JAKARTA PUSAT<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2019_1_2.png" /> JAKARTA SELATAN<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2019_1_3.png" /> JAKARTA TIMUR<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2019_1_4.png" /> JAKARTA UTARA<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2019_1_5.png" /> KEPULAUAN SERIBU<br />'
        });var format_KetenagakerjaanProvDKIJakarta2018_2 = new ol.format.GeoJSON();
var features_KetenagakerjaanProvDKIJakarta2018_2 = format_KetenagakerjaanProvDKIJakarta2018_2.readFeatures(json_KetenagakerjaanProvDKIJakarta2018_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KetenagakerjaanProvDKIJakarta2018_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KetenagakerjaanProvDKIJakarta2018_2.addFeatures(features_KetenagakerjaanProvDKIJakarta2018_2);var lyr_KetenagakerjaanProvDKIJakarta2018_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KetenagakerjaanProvDKIJakarta2018_2, 
                style: style_KetenagakerjaanProvDKIJakarta2018_2,
    title: 'Ketenagakerjaan Prov DKI Jakarta 2018<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2018_2_0.png" /> JAKARTA BARAT<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2018_2_1.png" /> JAKARTA PUSAT<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2018_2_2.png" /> JAKARTA SELATAN<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2018_2_3.png" /> JAKARTA TIMUR<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2018_2_4.png" /> JAKARTA UTARA<br />\
    <img src="styles/legend/KetenagakerjaanProvDKIJakarta2018_2_5.png" /> KEPULAUAN SERIBU<br />'
        });

lyr_KetenagakerjaanProvDKIJakarta2020_0.setVisible(true);lyr_KetenagakerjaanProvDKIJakarta2019_1.setVisible(true);lyr_KetenagakerjaanProvDKIJakarta2018_2.setVisible(true);
var layersList = [baseLayer,lyr_KetenagakerjaanProvDKIJakarta2020_0,lyr_KetenagakerjaanProvDKIJakarta2019_1,lyr_KetenagakerjaanProvDKIJakarta2018_2];
lyr_KetenagakerjaanProvDKIJakarta2020_0.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'cr_kerja_L': 'cr_kerja_L', 'cr_kerja_P': 'cr_kerja_P', 'loker_L': 'loker_L', 'loker_P': 'loker_P', 'Pnmptan_L': 'Pnmptan_L', 'Pnmptan_P': 'Pnmptan_P', });
lyr_KetenagakerjaanProvDKIJakarta2019_1.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'Laki-laki ': 'Laki-laki ', 'cr_kerja_P': 'cr_kerja_P', 'loker_L': 'loker_L', 'loker_P': 'loker_P', 'Pnmptan_P': 'Pnmptan_P', 'Pnmptan_L': 'Pnmptan_L', });
lyr_KetenagakerjaanProvDKIJakarta2018_2.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'cr_kerja_L': 'cr_kerja_L', 'cr_kerja_P': 'cr_kerja_P', 'Loker_L': 'Loker_L', 'Loker_P': 'Loker_P', 'Pnmptan_L': 'Pnmptan_L', 'Pnmptan_P': 'Pnmptan_P', });
lyr_KetenagakerjaanProvDKIJakarta2020_0.set('fieldImages', {'Kabupaten': 'TextEdit', 'cr_kerja_L': 'TextEdit', 'cr_kerja_P': 'TextEdit', 'loker_L': 'TextEdit', 'loker_P': 'TextEdit', 'Pnmptan_L': 'TextEdit', 'Pnmptan_P': 'TextEdit', });
lyr_KetenagakerjaanProvDKIJakarta2019_1.set('fieldImages', {'Kabupaten': 'TextEdit', 'Laki-laki ': 'TextEdit', 'cr_kerja_P': 'TextEdit', 'loker_L': 'TextEdit', 'loker_P': 'TextEdit', 'Pnmptan_P': 'TextEdit', 'Pnmptan_L': 'TextEdit', });
lyr_KetenagakerjaanProvDKIJakarta2018_2.set('fieldImages', {'Kabupaten': 'TextEdit', 'cr_kerja_L': 'TextEdit', 'cr_kerja_P': 'TextEdit', 'Loker_L': 'TextEdit', 'Loker_P': 'TextEdit', 'Pnmptan_L': 'TextEdit', 'Pnmptan_P': 'TextEdit', });
lyr_KetenagakerjaanProvDKIJakarta2020_0.set('fieldLabels', {'Kabupaten': 'header label', 'cr_kerja_L': 'inline label', 'cr_kerja_P': 'inline label', 'loker_L': 'inline label', 'loker_P': 'inline label', 'Pnmptan_L': 'inline label', 'Pnmptan_P': 'inline label', });
lyr_KetenagakerjaanProvDKIJakarta2019_1.set('fieldLabels', {'Kabupaten': 'header label', 'Laki-laki ': 'inline label', 'cr_kerja_P': 'inline label', 'loker_L': 'inline label', 'loker_P': 'inline label', 'Pnmptan_P': 'inline label', 'Pnmptan_L': 'inline label', });
lyr_KetenagakerjaanProvDKIJakarta2018_2.set('fieldLabels', {'Kabupaten': 'header label', 'cr_kerja_L': 'inline label', 'cr_kerja_P': 'inline label', 'Loker_L': 'inline label', 'Loker_P': 'inline label', 'Pnmptan_L': 'inline label', 'Pnmptan_P': 'inline label', });
lyr_KetenagakerjaanProvDKIJakarta2018_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});