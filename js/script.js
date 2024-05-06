/*
window.onresize = function () {
    var winW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (window.screen.width < 1366) { //小于1366屏幕时做屏幕缩放为768
        $('head').remove('[name="viewport"]')
        $('head').append('<meta name="viewport" content="width=768">')
    } else {
        $('head').remove('[name="viewport"]')
    }
}
*/


// 购物车
$('.nav_list li a.cart').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.shoppingCart').toggle();
});

$(document).on('click', function(e) {
    if (!$(e.target).closest('.shoppingCart, .nav_list li a.cart').length) {
        $('.shoppingCart').hide();
    }
});




// 搜索词
var searchHistory = ['Chilli', 'Seafood', 'Cranberry', 'Honey', 'Vegan', 'Adelia', 'BBQ'];

document.getElementById('searchInput').addEventListener('focus', function() {
    var datalist = document.getElementById('searchHistory');
    datalist.innerHTML = '';

    searchHistory.forEach(function(item) {
        var option = document.createElement('option');
        option.value = item;
        datalist.appendChild(option);
    });
});

document.querySelector('.search button').addEventListener('click', function() {
    var input = document.getElementById('searchInput');
    var searchTerm = input.value.trim();

    if (searchTerm && !searchHistory.includes(searchTerm)) {
        searchHistory.unshift(searchTerm);
        if (searchHistory.length > 10) {
            searchHistory.pop();
        }

        var datalist = document.getElementById('searchHistory');
        datalist.innerHTML = '';
        searchHistory.forEach(function(item) {
            var option = document.createElement('option');
            option.value = item;
            datalist.appendChild(option);
        });

        input.value = '';
    }
});
