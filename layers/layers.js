ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:28992").setExtent([134274.410245, 369966.945706, 142035.069893, 382585.294536]);
var wms_layers = [];


        var lyr_Ondergrond_0 = new ol.layer.Tile({
            'title': 'Ondergrond',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Perceelmetgedoogplicht_1 = new ol.format.GeoJSON();
var features_Perceelmetgedoogplicht_1 = format_Perceelmetgedoogplicht_1.readFeatures(json_Perceelmetgedoogplicht_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Perceelmetgedoogplicht_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perceelmetgedoogplicht_1.addFeatures(features_Perceelmetgedoogplicht_1);
var lyr_Perceelmetgedoogplicht_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perceelmetgedoogplicht_1, 
                style: style_Perceelmetgedoogplicht_1,
                popuplayertitle: 'Perceel met gedoogplicht',
                interactive: true,
                title: '<img src="styles/legend/Perceelmetgedoogplicht_1.png" /> Perceel met gedoogplicht'
            });

lyr_Ondergrond_0.setVisible(true);lyr_Perceelmetgedoogplicht_1.setVisible(true);
var layersList = [lyr_Ondergrond_0,lyr_Perceelmetgedoogplicht_1];
lyr_Perceelmetgedoogplicht_1.set('fieldAliases', {'KADASTRAAL': 'KADASTRAAL', 'RECHTHEBBE': 'RECHTHEBBE', 'OPMERKING': 'OPMERKING', 'ZAKELIJKRE': 'ZAKELIJKRE', 'AANDEEL': 'AANDEEL', 'STRAATNAAM': 'STRAATNAAM', 'HUISNUMMER': 'HUISNUMMER', 'HUISLETTER': 'HUISLETTER', 'TOEVOEGING': 'TOEVOEGING', 'POSTCODE': 'POSTCODE', 'WOONPLAATS': 'WOONPLAATS', 'GEMEENTE': 'GEMEENTE', 'INSCHRIJVI': 'INSCHRIJVI', 'OVERLIJDEN': 'OVERLIJDEN', 'STATUTAIRE': 'STATUTAIRE', 'VESTIGINGS': 'VESTIGINGS', 'AANSCHRIJV': 'AANSCHRIJV', });
lyr_Perceelmetgedoogplicht_1.set('fieldImages', {'KADASTRAAL': 'TextEdit', 'RECHTHEBBE': 'TextEdit', 'OPMERKING': 'TextEdit', 'ZAKELIJKRE': 'TextEdit', 'AANDEEL': 'TextEdit', 'STRAATNAAM': 'TextEdit', 'HUISNUMMER': 'TextEdit', 'HUISLETTER': 'TextEdit', 'TOEVOEGING': 'TextEdit', 'POSTCODE': 'TextEdit', 'WOONPLAATS': 'TextEdit', 'GEMEENTE': 'TextEdit', 'INSCHRIJVI': 'TextEdit', 'OVERLIJDEN': 'TextEdit', 'STATUTAIRE': 'TextEdit', 'VESTIGINGS': 'TextEdit', 'AANSCHRIJV': 'CheckBox', });
lyr_Perceelmetgedoogplicht_1.set('fieldLabels', {'KADASTRAAL': 'header label - visible with data', 'RECHTHEBBE': 'hidden field', 'OPMERKING': 'hidden field', 'ZAKELIJKRE': 'hidden field', 'AANDEEL': 'hidden field', 'STRAATNAAM': 'hidden field', 'HUISNUMMER': 'hidden field', 'HUISLETTER': 'hidden field', 'TOEVOEGING': 'hidden field', 'POSTCODE': 'hidden field', 'WOONPLAATS': 'hidden field', 'GEMEENTE': 'hidden field', 'INSCHRIJVI': 'hidden field', 'OVERLIJDEN': 'hidden field', 'STATUTAIRE': 'hidden field', 'VESTIGINGS': 'hidden field', 'AANSCHRIJV': 'hidden field', });
lyr_Perceelmetgedoogplicht_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});