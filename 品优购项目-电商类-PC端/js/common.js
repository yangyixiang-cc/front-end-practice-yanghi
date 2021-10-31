// 精灵图布局
var h5s = document.querySelectorAll(".sprite");
for (var i = 0; i < h5s.length; i++) {
        var x_index = -252;
        var y_index = i * 50+2;
        h5s[i].style.backgroundPosition = x_index+'px -' + y_index + 'px';
}