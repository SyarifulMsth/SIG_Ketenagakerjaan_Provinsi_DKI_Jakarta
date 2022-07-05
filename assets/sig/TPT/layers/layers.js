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
var format_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0 = new ol.format.GeoJSON();
var features_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0 = format_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0.readFeatures(json_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0.addFeatures(features_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0);var lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0, 
                style: style_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0,
    title: 'Tingkat Pengangguran Terbuka Provinsi DKI Jakarta 2020<br />\
    <img src="styles/legend/TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0_0.png" /> Pengangguran wajar<br />\
    <img src="styles/legend/TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0_1.png" /> Pengangguran tinggi<br />\
    <img src="styles/legend/TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0_2.png" /> Pengangguran sangat tinggi<br />'
        });var format_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1 = new ol.format.GeoJSON();
var features_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1 = format_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1.readFeatures(json_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1.addFeatures(features_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1);var lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1, 
                style: style_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1,
    title: 'Tingkat Pengangguran Terbuka Provinsi DKI Jakarta 2019<br />\
    <img src="styles/legend/TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1_0.png" /> Pengangguran wajar<br />\
    <img src="styles/legend/TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1_1.png" /> Pengangguran tinggi<br />\
    <img src="styles/legend/TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1_2.png" /> Pengangguran sangat tinggi<br />'
        });var format_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2 = new ol.format.GeoJSON();
var features_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2 = format_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2.readFeatures(json_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2.addFeatures(features_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2);var lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2, 
                style: style_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2,
    title: 'Tingkat Pengangguran Terbuka Provinsi DKI Jakarta 2018<br />\
    <img src="styles/legend/TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2_0.png" /> Pengangguran wajar<br />\
    <img src="styles/legend/TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2_1.png" /> Pengangguran tinggi<br />\
    <img src="styles/legend/TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2_2.png" /> Pengangguran sangat tinggi<br />'
        });

lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0.setVisible(true);lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1.setVisible(true);lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2.setVisible(true);
var layersList = [baseLayer,lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0,lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1,lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2];
lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'TPT 2020': 'TPT 2020', });
lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'TPT 2019': 'TPT 2019', });
lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'TPT 2018': 'TPT 2018', });
lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0.set('fieldImages', {'Kabupaten': 'TextEdit', 'TPT 2020': 'TextEdit', });
lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1.set('fieldImages', {'Kabupaten': 'TextEdit', 'TPT 2019': 'TextEdit', });
lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2.set('fieldImages', {'Kabupaten': 'TextEdit', 'TPT 2018': 'TextEdit', });
lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2020_0.set('fieldLabels', {'Kabupaten': 'header label', 'TPT 2020': 'inline label', });
lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2019_1.set('fieldLabels', {'Kabupaten': 'header label', 'TPT 2019': 'inline label', });
lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2.set('fieldLabels', {'Kabupaten': 'header label', 'TPT 2018': 'inline label', });
lyr_TingkatPengangguranTerbukaProvinsiDKIJakarta2018_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});