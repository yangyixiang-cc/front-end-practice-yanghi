$(function () {
    $('.main_box>#box>.top>ul>#head').click(function () {
        let index = $(this).index() + 1;
        let text = $(this).children("span").eq(1);
        if (text.text() == "▲") {
            text.text("▼");
        } else {
            text.text("▲")
        }
        $('.main_box>#box>.top>ul>li').eq(index).slideToggle();
    });

    $(".main_box>#box>.left>.song_text>#flog").click(function () {
        if ($(this).text() == '▲') {
            $(this).text('▼');
            $('.main_box>#box>.left>.song_text>#x').slideDown();
        } else {
            $(this).text('▲');
            $('.main_box>#box>.left>.song_text>#x').slideUp();
        }
    });

    //登录二维码刷新
    $(".login>.left>img").click(function () {
        $(this).next().fadeToggle();
    });
    $(".login>.left>.shuffle>a").click(function () {
        $(this).parent().fadeOut();
        $('.login').hide();
        setTimeout(function () {
            $('.login').show();
        }, 100);
    });

    //首页swiper轮播图
    var swiper = new Swiper('.swiper', {
        keyboard: true,
        autoplay: {
            delay: 1000
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }, navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true
    });


});

/**
 * 登录模态框
 */
/*
       1.点击弹出层，模态框和遮挡层就会显示出来 display:block
       2. 点击关闭按钮，则关闭模态框和遮挡层
       3.  在页面拖拽的原理：鼠标按下并且移动，之后松开鼠标
       4. 触发事件是鼠标按下mousedown、鼠标移动mousemove、鼠标松开mouseup
       5. 拖拽过程：鼠标移动过程中，获得最新的值赋值给模态框的left和top值，这样模态框可以跟着鼠标走了。
       6. 鼠标按下触发的事件源是 最上面一行，就是id为title
       7. 鼠标的坐标减去鼠标在盒子内的坐标，才是模态框真正的位置
       */
window.onload = function () {
    var login = document.querySelector('#login');
    var mask = document.querySelector('#bg');
    var link = document.querySelector('#link');
    var closeBtn = document.querySelector('#closeBtn');
    link.addEventListener('click', function () {
        $(mask).show();
        $(login).fadeIn();
    })
    // 点击关闭按钮隐藏
    closeBtn.addEventListener('click', function () {
        $(mask).hide();
        $(login).fadeOut();
    })
    var title = document.querySelector('#title');
    // 当我们鼠标按下就获得鼠标在盒子内的坐标
    title.addEventListener('mousedown', function (e) {
        var x = e.pageX - login.offsetLeft;
        var y = e.pageY - login.offsetTop;
        // 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的坐标
        document.addEventListener('mousemove', move)
        function move(e) {
            login.style.left = e.pageX - x + 'px';
            login.style.top = e.pageY - y + 'px';
        }
        //鼠标弹起就让鼠标移动事件移除
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', move)
        })
    });

}
