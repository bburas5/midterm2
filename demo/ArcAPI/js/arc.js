var map;

      require([ "esri/layers/WMSLayer", "esri/config", "dojo/domReady!"],
        function(WMSLayer, esriConfig) {

          esriConfig.defaults.io.proxyUrl = "/proxy/";
          
         
          var wmsLayer = new WMSLayer("https://maps.brgov.com/gis/services/Cadastral/Future_Land_Use/MapServer/WMSServer", {
            format: "png",
            visibleLayers: [0]
          });
          
          map.addLayer(wmsLayer);
      });