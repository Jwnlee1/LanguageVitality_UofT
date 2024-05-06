var wms_layers = [];

var format_WholeWorld_0 = new ol.format.GeoJSON();
var features_WholeWorld_0 = format_WholeWorld_0.readFeatures(json_WholeWorld_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WholeWorld_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WholeWorld_0.addFeatures(features_WholeWorld_0);
var lyr_WholeWorld_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WholeWorld_0, 
                style: style_WholeWorld_0,
                popuplayertitle: "Whole World",
                interactive: true,
                title: '<img src="styles/legend/WholeWorld_0.png" /> Whole World'
            });
var format_lessthan50speakers_1 = new ol.format.GeoJSON();
var features_lessthan50speakers_1 = format_lessthan50speakers_1.readFeatures(json_lessthan50speakers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lessthan50speakers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lessthan50speakers_1.addFeatures(features_lessthan50speakers_1);
var lyr_lessthan50speakers_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lessthan50speakers_1, 
                style: style_lessthan50speakers_1,
                popuplayertitle: "less than 50 speakers",
                interactive: true,
                title: '<img src="styles/legend/lessthan50speakers_1.png" /> less than 50 speakers'
            });
var format_50199speakers_2 = new ol.format.GeoJSON();
var features_50199speakers_2 = format_50199speakers_2.readFeatures(json_50199speakers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_50199speakers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_50199speakers_2.addFeatures(features_50199speakers_2);
var lyr_50199speakers_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_50199speakers_2, 
                style: style_50199speakers_2,
                popuplayertitle: "50 - 199 speakers",
                interactive: true,
                title: '<img src="styles/legend/50199speakers_2.png" /> 50 - 199 speakers'
            });
var format_200999speakers_3 = new ol.format.GeoJSON();
var features_200999speakers_3 = format_200999speakers_3.readFeatures(json_200999speakers_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200999speakers_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200999speakers_3.addFeatures(features_200999speakers_3);
var lyr_200999speakers_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200999speakers_3, 
                style: style_200999speakers_3,
                popuplayertitle: "200 - 999 speakers",
                interactive: true,
                title: '<img src="styles/legend/200999speakers_3.png" /> 200 - 999 speakers'
            });
var format_10004999speakers_4 = new ol.format.GeoJSON();
var features_10004999speakers_4 = format_10004999speakers_4.readFeatures(json_10004999speakers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10004999speakers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10004999speakers_4.addFeatures(features_10004999speakers_4);
var lyr_10004999speakers_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10004999speakers_4, 
                style: style_10004999speakers_4,
                popuplayertitle: "1,000 - 4,999 speakers",
                interactive: true,
                title: '<img src="styles/legend/10004999speakers_4.png" /> 1,000 - 4,999 speakers'
            });
var format_50009999speakers_5 = new ol.format.GeoJSON();
var features_50009999speakers_5 = format_50009999speakers_5.readFeatures(json_50009999speakers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_50009999speakers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_50009999speakers_5.addFeatures(features_50009999speakers_5);
var lyr_50009999speakers_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_50009999speakers_5, 
                style: style_50009999speakers_5,
                popuplayertitle: "5,000 - 9,999 speakers",
                interactive: true,
                title: '<img src="styles/legend/50009999speakers_5.png" /> 5,000 - 9,999 speakers'
            });
var format_1000099999speakers_6 = new ol.format.GeoJSON();
var features_1000099999speakers_6 = format_1000099999speakers_6.readFeatures(json_1000099999speakers_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1000099999speakers_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1000099999speakers_6.addFeatures(features_1000099999speakers_6);
var lyr_1000099999speakers_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1000099999speakers_6, 
                style: style_1000099999speakers_6,
                popuplayertitle: "10,000 - 99,999 speakers",
                interactive: true,
                title: '<img src="styles/legend/1000099999speakers_6.png" /> 10,000 - 99,999 speakers'
            });
var format_100000999999speakers_7 = new ol.format.GeoJSON();
var features_100000999999speakers_7 = format_100000999999speakers_7.readFeatures(json_100000999999speakers_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100000999999speakers_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100000999999speakers_7.addFeatures(features_100000999999speakers_7);
var lyr_100000999999speakers_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100000999999speakers_7, 
                style: style_100000999999speakers_7,
                popuplayertitle: "100,000 - 999,999 speakers",
                interactive: true,
                title: '<img src="styles/legend/100000999999speakers_7.png" /> 100,000 - 999,999 speakers'
            });
var format_10000001999999speakers_8 = new ol.format.GeoJSON();
var features_10000001999999speakers_8 = format_10000001999999speakers_8.readFeatures(json_10000001999999speakers_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10000001999999speakers_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10000001999999speakers_8.addFeatures(features_10000001999999speakers_8);
var lyr_10000001999999speakers_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10000001999999speakers_8, 
                style: style_10000001999999speakers_8,
                popuplayertitle: "1,000,000 - 1,999,999 speakers",
                interactive: true,
                title: '<img src="styles/legend/10000001999999speakers_8.png" /> 1,000,000 - 1,999,999 speakers'
            });
var format_morethan2000000speakers_9 = new ol.format.GeoJSON();
var features_morethan2000000speakers_9 = format_morethan2000000speakers_9.readFeatures(json_morethan2000000speakers_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_morethan2000000speakers_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_morethan2000000speakers_9.addFeatures(features_morethan2000000speakers_9);
var lyr_morethan2000000speakers_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_morethan2000000speakers_9, 
                style: style_morethan2000000speakers_9,
                popuplayertitle: "more than 2,000,000 speakers",
                interactive: true,
                title: '<img src="styles/legend/morethan2000000speakers_9.png" /> more than 2,000,000 speakers'
            });
var format_Extinct_10 = new ol.format.GeoJSON();
var features_Extinct_10 = format_Extinct_10.readFeatures(json_Extinct_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Extinct_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Extinct_10.addFeatures(features_Extinct_10);
var lyr_Extinct_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Extinct_10, 
                style: style_Extinct_10,
                popuplayertitle: "Extinct",
                interactive: true,
                title: '<img src="styles/legend/Extinct_10.png" /> Extinct'
            });
var format_Endangered_11 = new ol.format.GeoJSON();
var features_Endangered_11 = format_Endangered_11.readFeatures(json_Endangered_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Endangered_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Endangered_11.addFeatures(features_Endangered_11);
var lyr_Endangered_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Endangered_11, 
                style: style_Endangered_11,
                popuplayertitle: "Endangered",
                interactive: true,
                title: '<img src="styles/legend/Endangered_11.png" /> Endangered'
            });
var format_Stable_12 = new ol.format.GeoJSON();
var features_Stable_12 = format_Stable_12.readFeatures(json_Stable_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stable_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stable_12.addFeatures(features_Stable_12);
var lyr_Stable_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stable_12, 
                style: style_Stable_12,
                popuplayertitle: "Stable",
                interactive: true,
                title: '<img src="styles/legend/Stable_12.png" /> Stable'
            });
var format_Institutive_13 = new ol.format.GeoJSON();
var features_Institutive_13 = format_Institutive_13.readFeatures(json_Institutive_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Institutive_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Institutive_13.addFeatures(features_Institutive_13);
var lyr_Institutive_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Institutive_13, 
                style: style_Institutive_13,
                popuplayertitle: "Institutive",
                interactive: true,
                title: '<img src="styles/legend/Institutive_13.png" /> Institutive'
            });

lyr_WholeWorld_0.setVisible(true);lyr_lessthan50speakers_1.setVisible(true);lyr_50199speakers_2.setVisible(true);lyr_200999speakers_3.setVisible(true);lyr_10004999speakers_4.setVisible(true);lyr_50009999speakers_5.setVisible(true);lyr_1000099999speakers_6.setVisible(true);lyr_100000999999speakers_7.setVisible(true);lyr_10000001999999speakers_8.setVisible(true);lyr_morethan2000000speakers_9.setVisible(true);lyr_Extinct_10.setVisible(true);lyr_Endangered_11.setVisible(true);lyr_Stable_12.setVisible(true);lyr_Institutive_13.setVisible(true);
var layersList = [lyr_WholeWorld_0,lyr_lessthan50speakers_1,lyr_50199speakers_2,lyr_200999speakers_3,lyr_10004999speakers_4,lyr_50009999speakers_5,lyr_1000099999speakers_6,lyr_100000999999speakers_7,lyr_10000001999999speakers_8,lyr_morethan2000000speakers_9,lyr_Extinct_10,lyr_Endangered_11,lyr_Stable_12,lyr_Institutive_13];
lyr_WholeWorld_0.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'CONTINENT': 'CONTINENT', 'SUBCONT.': 'SUBCONT.', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_lessthan50speakers_1.set('fieldAliases', {'LANGUAGE': 'LANGUAGE', 'LANGUAGE 2': 'LANGUAGE 2', 'Language 3': 'Language 3', 'LANGUAGE 4': 'LANGUAGE 4', });
lyr_50199speakers_2.set('fieldAliases', {'Language 1': 'Language 1', });
lyr_200999speakers_3.set('fieldAliases', {'1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '10': '10', 'Kaiwa?': 'Kaiwa?', '12': '12', '13': '13', });
lyr_10004999speakers_4.set('fieldAliases', {'1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', });
lyr_50009999speakers_5.set('fieldAliases', {'1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', });
lyr_1000099999speakers_6.set('fieldAliases', {'1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '10': '10', '11': '11', '12': '12', '13': '13', '14': '14', });
lyr_100000999999speakers_7.set('fieldAliases', {'1': '1', '2': '2', '3': '3', '4': '4', });
lyr_10000001999999speakers_8.set('fieldAliases', {'1': '1', });
lyr_morethan2000000speakers_9.set('fieldAliases', {'1': '1', });
lyr_Extinct_10.set('fieldAliases', {'1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', });
lyr_Endangered_11.set('fieldAliases', {'1': '1', '2': '2', '3': '3', 'Aonek\'enk': 'Aonek\'enk', 'Pilaga': 'Pilaga', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '10': '10', '11': '11', '12': '12', });
lyr_Stable_12.set('fieldAliases', {'1': '1', '2': '2', '3': '3', 'Ava': 'Ava', 'Mbya': 'Mbya', '6': '6', '7': '7', 'Ayoreo': 'Ayoreo', });
lyr_Institutive_13.set('fieldAliases', {'1': '1', 'Mataco': 'Mataco', 'Wichi': 'Wichi', });
lyr_WholeWorld_0.set('fieldImages', {'COUNTRY': 'TextEdit', 'CONTINENT': 'TextEdit', 'SUBCONT.': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_lessthan50speakers_1.set('fieldImages', {'LANGUAGE': 'TextEdit', 'LANGUAGE 2': 'TextEdit', 'Language 3': 'TextEdit', 'LANGUAGE 4': 'TextEdit', });
lyr_50199speakers_2.set('fieldImages', {'Language 1': 'TextEdit', });
lyr_200999speakers_3.set('fieldImages', {'1': 'TextEdit', '2': 'TextEdit', '3': 'TextEdit', '4': 'TextEdit', '5': 'TextEdit', '6': 'TextEdit', '7': 'TextEdit', '8': 'TextEdit', '9': 'TextEdit', '10': 'TextEdit', 'Kaiwa?': 'TextEdit', '12': 'TextEdit', '13': 'TextEdit', });
lyr_10004999speakers_4.set('fieldImages', {'1': 'TextEdit', '2': 'TextEdit', '3': 'TextEdit', '4': 'TextEdit', '5': 'TextEdit', '6': 'TextEdit', '7': 'TextEdit', '8': 'TextEdit', });
lyr_50009999speakers_5.set('fieldImages', {'1': 'TextEdit', '2': 'TextEdit', '3': 'TextEdit', '4': 'TextEdit', '5': 'TextEdit', '6': 'TextEdit', '7': 'TextEdit', });
lyr_1000099999speakers_6.set('fieldImages', {'1': 'TextEdit', '2': 'TextEdit', '3': 'TextEdit', '4': 'TextEdit', '5': 'TextEdit', '6': 'TextEdit', '7': 'TextEdit', '8': 'TextEdit', '9': 'TextEdit', '10': 'TextEdit', '11': 'TextEdit', '12': 'TextEdit', '13': 'TextEdit', '14': 'TextEdit', });
lyr_100000999999speakers_7.set('fieldImages', {'1': 'TextEdit', '2': 'TextEdit', '3': 'TextEdit', '4': 'TextEdit', });
lyr_10000001999999speakers_8.set('fieldImages', {'1': 'TextEdit', });
lyr_morethan2000000speakers_9.set('fieldImages', {'1': 'TextEdit', });
lyr_Extinct_10.set('fieldImages', {'1': 'TextEdit', '2': 'TextEdit', '3': 'TextEdit', '4': 'TextEdit', '5': 'TextEdit', '6': 'TextEdit', });
lyr_Endangered_11.set('fieldImages', {'1': 'TextEdit', '2': 'TextEdit', '3': 'TextEdit', 'Aonek\'enk': 'TextEdit', 'Pilaga': 'TextEdit', '5': 'TextEdit', '6': 'TextEdit', '7': 'TextEdit', '8': 'TextEdit', '9': 'TextEdit', '10': 'TextEdit', '11': 'TextEdit', '12': 'TextEdit', });
lyr_Stable_12.set('fieldImages', {'1': 'TextEdit', '2': 'TextEdit', '3': 'TextEdit', 'Ava': 'TextEdit', 'Mbya': 'TextEdit', '6': 'TextEdit', '7': 'TextEdit', 'Ayoreo': 'TextEdit', });
lyr_Institutive_13.set('fieldImages', {'1': 'TextEdit', 'Mataco': 'TextEdit', 'Wichi': 'TextEdit', });
lyr_WholeWorld_0.set('fieldLabels', {'COUNTRY': 'inline label - always visible', 'CONTINENT': 'inline label - always visible', 'SUBCONT.': 'inline label - always visible', });
lyr_lessthan50speakers_1.set('fieldLabels', {'LANGUAGE': 'no label', 'LANGUAGE 2': 'no label', 'Language 3': 'no label', 'LANGUAGE 4': 'no label', });
lyr_50199speakers_2.set('fieldLabels', {'Language 1': 'no label', });
lyr_200999speakers_3.set('fieldLabels', {'1': 'no label', '2': 'no label', '3': 'no label', '4': 'no label', '5': 'no label', '6': 'no label', '7': 'no label', '8': 'no label', '9': 'no label', '10': 'no label', 'Kaiwa?': 'no label', '12': 'no label', '13': 'no label', });
lyr_10004999speakers_4.set('fieldLabels', {'1': 'no label', '2': 'no label', '3': 'no label', '4': 'no label', '5': 'no label', '6': 'no label', '7': 'no label', '8': 'no label', });
lyr_50009999speakers_5.set('fieldLabels', {'1': 'no label', '2': 'no label', '3': 'no label', '4': 'no label', '5': 'no label', '6': 'no label', '7': 'no label', });
lyr_1000099999speakers_6.set('fieldLabels', {'1': 'no label', '2': 'no label', '3': 'no label', '4': 'no label', '5': 'no label', '6': 'no label', '7': 'no label', '8': 'no label', '9': 'no label', '10': 'no label', '11': 'no label', '12': 'no label', '13': 'no label', '14': 'no label', });
lyr_100000999999speakers_7.set('fieldLabels', {'1': 'no label', '2': 'no label', '3': 'no label', '4': 'no label', });
lyr_10000001999999speakers_8.set('fieldLabels', {'1': 'no label', });
lyr_morethan2000000speakers_9.set('fieldLabels', {'1': 'no label', });
lyr_Extinct_10.set('fieldLabels', {'1': 'no label', '2': 'no label', '3': 'no label', '4': 'no label', '5': 'no label', '6': 'no label', });
lyr_Endangered_11.set('fieldLabels', {'1': 'no label', '2': 'no label', '3': 'no label', 'Aonek\'enk': 'no label', 'Pilaga': 'no label', '5': 'no label', '6': 'no label', '7': 'no label', '8': 'no label', '9': 'no label', '10': 'no label', '11': 'no label', '12': 'no label', });
lyr_Stable_12.set('fieldLabels', {'1': 'no label', '2': 'no label', '3': 'no label', 'Ava': 'no label', 'Mbya': 'no label', '6': 'no label', '7': 'no label', 'Ayoreo': 'no label', });
lyr_Institutive_13.set('fieldLabels', {'1': 'no label', 'Mataco': 'no label', 'Wichi': 'no label', });
lyr_Institutive_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});