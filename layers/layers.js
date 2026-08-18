ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:28992").setExtent([133005.400000, 369030.190000, 142279.040000, 382592.784000]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Perceelzondergedoogplicht_1 = new ol.format.GeoJSON();
var features_Perceelzondergedoogplicht_1 = format_Perceelzondergedoogplicht_1.readFeatures(json_Perceelzondergedoogplicht_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Perceelzondergedoogplicht_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perceelzondergedoogplicht_1.addFeatures(features_Perceelzondergedoogplicht_1);
var lyr_Perceelzondergedoogplicht_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perceelzondergedoogplicht_1, 
                style: style_Perceelzondergedoogplicht_1,
                popuplayertitle: 'Perceel zonder gedoogplicht',
                interactive: true,
                title: '<img src="styles/legend/Perceelzondergedoogplicht_1.png" /> Perceel zonder gedoogplicht'
            });
var format_Perceelmetgedoogplicht_2 = new ol.format.GeoJSON();
var features_Perceelmetgedoogplicht_2 = format_Perceelmetgedoogplicht_2.readFeatures(json_Perceelmetgedoogplicht_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Perceelmetgedoogplicht_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perceelmetgedoogplicht_2.addFeatures(features_Perceelmetgedoogplicht_2);
var lyr_Perceelmetgedoogplicht_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perceelmetgedoogplicht_2, 
                style: style_Perceelmetgedoogplicht_2,
                popuplayertitle: 'Perceel met gedoogplicht',
                interactive: true,
                title: '<img src="styles/legend/Perceelmetgedoogplicht_2.png" /> Perceel met gedoogplicht'
            });
var group_Duikers = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Duikers'});
var group_Overig = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Overig'});
var group_BraakscheAkkers = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Braaksche Akkers'});
var group_BGT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'BGT'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Perceelzondergedoogplicht_1.setVisible(true);lyr_Perceelmetgedoogplicht_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Perceelzondergedoogplicht_1,lyr_Perceelmetgedoogplicht_2];
lyr_Perceelzondergedoogplicht_1.set('fieldAliases', {'id': 'id', 'AANSCHRIJV': 'AANSCHRIJV', });
lyr_Perceelmetgedoogplicht_2.set('fieldAliases', {'id': 'id', 'AANSCHRIJV': 'AANSCHRIJV', });
lyr_Perceelzondergedoogplicht_1.set('fieldImages', {'id': 'TextEdit', 'AANSCHRIJV': 'CheckBox', });
lyr_Perceelmetgedoogplicht_2.set('fieldImages', {'id': 'TextEdit', 'AANSCHRIJV': 'CheckBox', });
lyr_Perceelzondergedoogplicht_1.set('fieldLabels', {'id': 'header label - always visible', 'AANSCHRIJV': 'hidden field', });
lyr_Perceelmetgedoogplicht_2.set('fieldLabels', {'id': 'header label - always visible', 'AANSCHRIJV': 'hidden field', });
lyr_Perceelmetgedoogplicht_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});