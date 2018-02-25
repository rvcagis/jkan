---
schema: default
title: RVCA Landcover
organization: RVCA
notes: RVCA Landcover
resources:
  - name: RVCA Landcover Shapefile
    url: 'ftp://FTP_Data:!Data1@204.101.207.53/data/OpenData/landCover.zip'
    format: shp
  - name: RVCA Landcover Rest Endpoint
    url: 'https://gis.rvca.ca/arcgis/rest/services/RVCA_LandCover_Cache/MapServer'
    format: api
  - name: RVCA Landcover Kml
    url: >-
      https://gis.rvca.ca/arcgis/rest/services/RVCA_LandCover_Cache/MapServer/generateKml
    format: kml
license: 'https://gis.rvca.ca/dataSharing.htm'
maintainer: Dave Crossman
maintainer_email: gis@rvca.ca
---