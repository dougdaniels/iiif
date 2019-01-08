var map;

map = L.map('map', {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0,
});

// use this method for two requests of the same image with different parameters
// var iiifUrl = 'http://iiif-kirschbombe.c9users.io/iiif/2/kabuki%2Fucla_bib1987273_no001_rs_001.jpg/info.json';

// var layer1 = L.tileLayer.iiif(iiifUrl, {
//     fitBounds: false,
//  }
// ).addTo(map);

// var layer2 = L.tileLayer.iiif(iiifUrl, {
//     quality: 'gray'
//  }
// ).addTo(map);


// use this method to layer two separate image requests
 var layer1 = L.tileLayer.iiif('http://iiif-kirschbombe.c9users.io/iiif/2/kabuki%2Fucla_bib1987273_no001_rs_001.jpg/info.json',
                               {
     fitBounds: false,
  }
 ).addTo(map);

 var layer2 = L.tileLayer.iiif(
   'http://iiif-kirschbombe.c9users.io/iiif/2/kabuki%2Fucla_bib1987273_no001_rs_001.jpg/info.json'
).addTo(map);

L.control.sideBySide(layer1, layer2).addTo(map);
