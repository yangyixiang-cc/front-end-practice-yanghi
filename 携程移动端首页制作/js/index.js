// 局部导航栏 local-nav 精灵图
function local_sprite() {
    var sprite_icon = document.querySelectorAll(".local-nav-icon");
    var countX = 0;
    var countY = 0;
    for (var i = 0; i < sprite_icon.length; i++) {
        var index_x = countX;
        var index_y = countY * 32;
        sprite_icon[i].style.backgroundPosition = '-' + index_x + 'px  -' + index_y + 'px';
        countY++;
    }
}
// 精灵图布局 subnav-entry-icon
function subnav_sprite() {
    var sprite_icon = document.querySelectorAll(".subnav-entry-icon");
    var countX = 0;
    var countY = 0;
    for (var i = 0; i < sprite_icon.length; i++) {
        var index_x = countX;
        var index_y = countY * 32;
        sprite_icon[i].style.backgroundPosition = '-' + index_x + 'px  -' + index_y + 'px';
        countY++;
    }
}
