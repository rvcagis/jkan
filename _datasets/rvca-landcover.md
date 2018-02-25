---
schema: default
title: RVCA Landcover
organization: RVCA
notes: >-
  RVCA Landcover - compiled yearly on a subwatershed basis. Each subwatershed is
  captured every six years and is based on imagery also on a 6 year cycle. i.e.
  2008, 2014, 2020... 
resources:
  - name: RVCA Landcover Shapefile
    url: 'ftp://FTP_Data:!Data1@204.101.207.53/data/OpenData/landCoverSHP.zip'
    format: shp
  - name: RVCA Landcover Rest Endpoint
    url: 'https://gis.rvca.ca/arcgis/rest/services/RVCA_LandCover_Cache/MapServer'
    format: api
  - name: RVCA Landcover Kml
    url: >-
      https://gis.rvca.ca/arcgis/rest/services/RVCA_LandCover_Cache/MapServer/generateKml
    format: kml
  - name: RVCA Landcover CAD
    url: 'ftp://FTP_Data:!Data1@204.101.207.53/data/OpenData/landCoverCAD.zip'
    format: cad
license: 'https://gis.rvca.ca/dataSharing.htm'
category:
  - 'Landcover & Water (Wetlands, Woodlands & Water)'
maintainer: 'Dave Crossman, RVCA GIS Coordinator'
maintainer_email: gis@rvca.ca
---