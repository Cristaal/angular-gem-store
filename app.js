(function() {
  var app = angular.module('store', []);
  
  app.controller('StoreController', function() {
  	this.products = gems;
  });

  app.controlller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
    };
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  var gems = [
  {
  	name: 'Dodecahedron', 
  	price: 2.95,
  	description: 'Some gems have hidden qualities beyond their luster, beyond their shine...Dodeca is one of those gems.',
  	canPurchase: true,
  	soldOut: false,
  },
  {
  	name: 'Pentagonal Gem', 
  	price: 5.95,
  	description: 'If one could capture the rays of the sun, their eartly form would be that of a Pentagonal Gem.',
  	canPurchase: true,
  	soldOut: false,
  }
]})();