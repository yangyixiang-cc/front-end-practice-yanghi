window.onload = function () {
    // 精灵图布局
    var lis = document.querySelectorAll(".icons_sprites");
    var countX = 0;
    var countY = 0;
    for (var i = 0; i < lis.length; i++) {
        var index_x = countX * 62+17;
        var index_y = countY * 72+16;
        lis[i].style.backgroundPosition = '-' + index_x + 'px  -' + index_y + 'px';
        countX++;
        if ((i + 1) % 4 == 0) {
            countX = 0;
            countY++;
        }
    }
}