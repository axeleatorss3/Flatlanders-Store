(function(){
'use strict';

let app = angular.module('product', [] )

app.controller('Product',  ['$scope', '$state', '$stateParams', '$http', 
function ($scope, $state, $stateParams, $http) {
    let product = this

    product._id = $stateParams._id
    product.detail = {}
    $http.get("./dummy/products.json").then(function(data) {
        product.products = data.data.gems

        product.detail = product.products.find(p=> p._id === product._id)
        console.log("productDetail",product.detail)

    })

}])
})();