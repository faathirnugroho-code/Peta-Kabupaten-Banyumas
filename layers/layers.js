var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> Ajibarang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> Ayah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> Bantarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> Banyumas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> Baturaden<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> Bojongsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> Bumijawa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> Candrungmangu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> Cilongok<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> Gumelar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> Jatilawang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> Jeruklegi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> Kalibagor<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> Kalimanah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> Karanglewas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> Karangpucung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> Kebasen<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> Kedungbanteng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> Kemangkon<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> Kembaran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> Kemranjen<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> Kesugihan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> Kroya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> Kutasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> Lumbir<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> Maos<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> Nusawungu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> Padamara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> Paguyangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> Patikraja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> Pekuncen<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> Pulosari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> Purwojati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> Purwokerto Barat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> Purwokerto Selatan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> Purwokerto Timur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> Purwokerto Utara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_37.png" /> Rawalo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_38.png" /> Rowokele<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_39.png" /> Sampang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_40.png" /> Sirampog<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_41.png" /> Sokaraja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_42.png" /> Somagede<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_43.png" /> Sumbang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_44.png" /> Sumpiuh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_45.png" /> Susukan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_46.png" /> Tampak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_47.png" /> Wangon<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_ADMINISTRASIDESA_AR_25K_1];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'DOKUMENTAS': 'DOKUMENTAS', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'DOKUMENTAS': 'ExternalResource', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'inline label - always visible', 'WIADKC': 'no label', 'WADMKK': 'inline label - always visible', 'WIADKK': 'no label', 'WADMPR': 'inline label - always visible', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'DOKUMENTAS': 'inline label - always visible', });
lyr_ADMINISTRASIDESA_AR_25K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});