var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LapakGIS_Batas_Provinsi_2024_1 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Provinsi_2024_1 = format_LapakGIS_Batas_Provinsi_2024_1.readFeatures(json_LapakGIS_Batas_Provinsi_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Provinsi_2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapakGIS_Batas_Provinsi_2024_1.addFeatures(features_LapakGIS_Batas_Provinsi_2024_1);
var lyr_LapakGIS_Batas_Provinsi_2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapakGIS_Batas_Provinsi_2024_1, 
                style: style_LapakGIS_Batas_Provinsi_2024_1,
                popuplayertitle: 'LapakGIS_Batas_Provinsi_2024',
                interactive: true,
    title: 'LapakGIS_Batas_Provinsi_2024<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_0.png" /> Aceh<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_1.png" /> Bali<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_2.png" /> Banten<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_3.png" /> Bengkulu<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_4.png" /> Daerah Istimewa Yogyakarta<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_5.png" /> DKI Jakarta<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_6.png" /> Gorontalo<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_7.png" /> Jambi<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_8.png" /> Jawa Barat<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_9.png" /> Jawa Tengah<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_10.png" /> Jawa Timur<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_11.png" /> Kalimantan Barat<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_12.png" /> Kalimantan Selatan<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_13.png" /> Kalimantan Tengah<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_14.png" /> Kalimantan Timur<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_15.png" /> Kalimantan Utara<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_16.png" /> Kepulauan Bangka Belitung<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_17.png" /> Kepulauan Riau<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_18.png" /> Lampung<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_19.png" /> Maluku<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_20.png" /> Maluku Utara<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_21.png" /> Nusa Tenggara Barat<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_22.png" /> Nusa Tenggara Timur<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_23.png" /> Papua<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_24.png" /> Papua Barat<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_25.png" /> Papua Barat Daya<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_26.png" /> Papua Pegunungan<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_27.png" /> Papua Selatan<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_28.png" /> Papua Tengah<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_29.png" /> Riau<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_30.png" /> Sulawesi Barat<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_31.png" /> Sulawesi Selatan<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_32.png" /> Sulawesi Tengah<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_33.png" /> Sulawesi Tenggara<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_34.png" /> Sulawesi Utara<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_35.png" /> Sumatera Barat<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_36.png" /> Sumatera Selatan<br />\
    <img src="styles/legend/LapakGIS_Batas_Provinsi_2024_1_37.png" /> Sumatera Utara<br />' });
var format_Flora_2 = new ol.format.GeoJSON();
var features_Flora_2 = format_Flora_2.readFeatures(json_Flora_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flora_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flora_2.addFeatures(features_Flora_2);
var lyr_Flora_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flora_2, 
                style: style_Flora_2,
                popuplayertitle: 'Flora',
                interactive: true,
                title: '<img src="styles/legend/Flora_2.png" /> Flora'
            });

lyr_OSMStandard_0.setVisible(true);lyr_LapakGIS_Batas_Provinsi_2024_1.setVisible(true);lyr_Flora_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LapakGIS_Batas_Provinsi_2024_1,lyr_Flora_2];
lyr_LapakGIS_Batas_Provinsi_2024_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', });
lyr_Flora_2.set('fieldAliases', {'Id': 'Id', 'Gambar': 'Gambar', 'Keterangan': 'Keterangan', 'WEB': 'WEB', });
lyr_LapakGIS_Batas_Provinsi_2024_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', });
lyr_Flora_2.set('fieldImages', {'Id': 'Range', 'Gambar': 'ExternalResource', 'Keterangan': 'TextEdit', 'WEB': 'TextEdit', });
lyr_LapakGIS_Batas_Provinsi_2024_1.set('fieldLabels', {'KDPPUM': 'no label', 'WADMPR': 'inline label - always visible', 'METADATA': 'no label', 'UPDATED': 'no label', });
lyr_Flora_2.set('fieldLabels', {'Id': 'no label', 'Gambar': 'no label', 'Keterangan': 'no label', 'WEB': 'no label', });
lyr_Flora_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});