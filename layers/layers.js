ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:28354").setExtent([598351.658355, 5931495.262937, 615993.175813, 5941031.513550]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_buildtingmap2018_region_1 = new ol.format.GeoJSON();
var features_buildtingmap2018_region_1 = format_buildtingmap2018_region_1.readFeatures(json_buildtingmap2018_region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28354'});
var jsonSource_buildtingmap2018_region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildtingmap2018_region_1.addFeatures(features_buildtingmap2018_region_1);
var lyr_buildtingmap2018_region_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buildtingmap2018_region_1, 
                style: style_buildtingmap2018_region_1,
                interactive: true,
                title: '<img src="styles/legend/buildtingmap2018_region_1.png" /> buildtingmap2018_region'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_buildtingmap2018_region_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_buildtingmap2018_region_1];
lyr_buildtingmap2018_region_1.set('fieldAliases', {'gid': 'gid', 'asset_id': 'asset_id', 'building_a': 'building_a', });
lyr_buildtingmap2018_region_1.set('fieldImages', {'gid': '', 'asset_id': '', 'building_a': '', });
lyr_buildtingmap2018_region_1.set('fieldLabels', {'gid': 'inline label', 'asset_id': 'inline label', 'building_a': 'inline label', });
lyr_buildtingmap2018_region_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});