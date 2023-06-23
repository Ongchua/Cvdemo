var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// Tab 1: 
var check = $$('.logo');
var checked = $$('.check');

check.forEach(function(checkItem, index) {
    checkItem.onclick = function() {
        checked[index].classList.toggle('active')
        var asses = $$('.check.active').length * 10;
        document.getElementById('assesing').innerHTML = `Assessing your style: ${asses}%`
    }
});


// Tab 2:
var slider = $$('.slider-item');
var slider_value = $$('.slider-value');

slider.forEach(function(Item, index) {
    Item.oninput = function() {
       slider_value[index].innerHTML = `Value: ` + slider[index].value + '%'
    }
})
// Tab 3:

var grid_select = $$('.grid-item');
// console.log(grid_select)
grid_select.forEach(function(gridItem) {
    // console.log(gridItem)
    gridItem.onclick = function() {
        gridItem.classList.toggle('active-color')
    }
})