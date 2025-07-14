ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32628").setExtent([355234.360956, 1606815.697590, 366415.304152, 1611400.091739]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ParcellesSIAP_1 = new ol.format.GeoJSON();
var features_ParcellesSIAP_1 = format_ParcellesSIAP_1.readFeatures(json_ParcellesSIAP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_ParcellesSIAP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcellesSIAP_1.addFeatures(features_ParcellesSIAP_1);
var lyr_ParcellesSIAP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcellesSIAP_1, 
                style: style_ParcellesSIAP_1,
                popuplayertitle: 'Parcelles SIAP',
                interactive: true,
                title: '<img src="styles/legend/ParcellesSIAP_1.png" /> Parcelles SIAP'
            });
var format_Dispositifexperimental_2 = new ol.format.GeoJSON();
var features_Dispositifexperimental_2 = format_Dispositifexperimental_2.readFeatures(json_Dispositifexperimental_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_Dispositifexperimental_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dispositifexperimental_2.addFeatures(features_Dispositifexperimental_2);
var lyr_Dispositifexperimental_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dispositifexperimental_2, 
                style: style_Dispositifexperimental_2,
                popuplayertitle: 'Dispositif experimental',
                interactive: true,
                title: '<img src="styles/legend/Dispositifexperimental_2.png" /> Dispositif experimental'
            });
var format_Pointsdechantillons_3 = new ol.format.GeoJSON();
var features_Pointsdechantillons_3 = format_Pointsdechantillons_3.readFeatures(json_Pointsdechantillons_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_Pointsdechantillons_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointsdechantillons_3.addFeatures(features_Pointsdechantillons_3);
var lyr_Pointsdechantillons_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointsdechantillons_3, 
                style: style_Pointsdechantillons_3,
                popuplayertitle: 'Points d\'echantillons',
                interactive: true,
                title: '<img src="styles/legend/Pointsdechantillons_3.png" /> Points d\'echantillons'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ParcellesSIAP_1.setVisible(true);lyr_Dispositifexperimental_2.setVisible(true);lyr_Pointsdechantillons_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ParcellesSIAP_1,lyr_Dispositifexperimental_2,lyr_Pointsdechantillons_3];
lyr_ParcellesSIAP_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Dispositifexperimental_2.set('fieldAliases', {'wkt_geom': 'wkt_geom', 'ID': 'ID', 'X': 'X', 'Y': 'Y', 'CO %': 'CO %', 'MO %': 'MO %', 'pH': 'pH', 'N %': 'N %', 'P ppm': 'P ppm', 'K meq/100g': 'K meq/100g', 'Biomasse': 'Biomasse', 'Grains': 'Grains', 'Rdt Kg/ha': 'Rdt Kg/ha', 'Parcelle': 'Parcelle', 'Producteur': 'Producteur', 'Traitement': 'Traitement', 'Region': 'Region', 'Commune': 'Commune', });
lyr_Pointsdechantillons_3.set('fieldAliases', {'wkt_geom': 'wkt_geom', 'ID': 'ID', 'X': 'X', 'Y': 'Y', 'CO %': 'CO %', 'MO %': 'MO %', 'pH': 'pH', 'N %': 'N %', 'P ppm': 'P ppm', 'K meq/100g': 'K meq/100g', 'Biomasse': 'Biomasse', 'Grains': 'Grains', 'Rdt Kg/ha': 'Rdt Kg/ha', 'Parcelle': 'Parcelle', 'Producteur': 'Producteur', 'Traitement': 'Traitement', 'Region': 'Region', 'Commune': 'Commune', });
lyr_ParcellesSIAP_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Dispositifexperimental_2.set('fieldImages', {'wkt_geom': 'TextEdit', 'ID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CO %': 'TextEdit', 'MO %': 'TextEdit', 'pH': 'TextEdit', 'N %': 'TextEdit', 'P ppm': 'TextEdit', 'K meq/100g': 'TextEdit', 'Biomasse': 'TextEdit', 'Grains': 'TextEdit', 'Rdt Kg/ha': 'TextEdit', 'Parcelle': 'TextEdit', 'Producteur': 'TextEdit', 'Traitement': 'TextEdit', 'Region': 'TextEdit', 'Commune': 'TextEdit', });
lyr_Pointsdechantillons_3.set('fieldImages', {'wkt_geom': 'TextEdit', 'ID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CO %': 'TextEdit', 'MO %': 'TextEdit', 'pH': 'TextEdit', 'N %': 'TextEdit', 'P ppm': 'TextEdit', 'K meq/100g': 'TextEdit', 'Biomasse': 'TextEdit', 'Grains': 'TextEdit', 'Rdt Kg/ha': 'TextEdit', 'Parcelle': 'TextEdit', 'Producteur': 'TextEdit', 'Traitement': 'TextEdit', 'Region': 'TextEdit', 'Commune': 'TextEdit', });
lyr_ParcellesSIAP_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - visible with data', });
lyr_Dispositifexperimental_2.set('fieldLabels', {'wkt_geom': 'hidden field', 'ID': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CO %': 'hidden field', 'MO %': 'hidden field', 'pH': 'hidden field', 'N %': 'hidden field', 'P ppm': 'hidden field', 'K meq/100g': 'header label - visible with data', 'Biomasse': 'header label - visible with data', 'Grains': 'header label - visible with data', 'Rdt Kg/ha': 'header label - visible with data', 'Parcelle': 'header label - visible with data', 'Producteur': 'header label - visible with data', 'Traitement': 'header label - visible with data', 'Region': 'hidden field', 'Commune': 'header label - visible with data', });
lyr_Pointsdechantillons_3.set('fieldLabels', {'wkt_geom': 'hidden field', 'ID': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CO %': 'hidden field', 'MO %': 'hidden field', 'pH': 'hidden field', 'N %': 'hidden field', 'P ppm': 'hidden field', 'K meq/100g': 'hidden field', 'Biomasse': 'hidden field', 'Grains': 'hidden field', 'Rdt Kg/ha': 'hidden field', 'Parcelle': 'hidden field', 'Producteur': 'hidden field', 'Traitement': 'hidden field', 'Region': 'hidden field', 'Commune': 'hidden field', });
lyr_Pointsdechantillons_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});