window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol')
    var focusWidth = focus.offsetWidth;

    // 定时播放
    var index = 0;
    var timer = setInterval(function() {
        index++
        var translateX = -focusWidth * index
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translateX + 'px)';
    }, 2000)

    // 过渡完判断
    ul.addEventListener('transitionend', function() {
        if (index >= 3) {
            index = 0;
            translateX = -focusWidth * index
            ul.style.transition = '';
            ul.style.transform = 'translateX(' + translateX + 'px)';
        } else if (index < 0) {
            // 快速跳到最后一张，第一张复制的图片不算在内，那就是第三张
            index = 2;
            translateX = -focusWidth * index
            ul.style.transition = '';
            ul.style.transform = 'translateX(' + translateX + 'px)';

        }

        ol.querySelector('.current').classList.remove('current')
        ol.children[index].classList.add('current')

    })

    // 手指轮播

    var finger_x = null;
    var f_move = null;
    // 标识，手指移动了，才回去做判断
    var flag = false;
    ul.addEventListener('touchstart', function(e) {
        finger_x = e.targetTouches[0].pageX
        ul_x = ul.offsetLeft;
        clearInterval(timer);

    })
    ul.addEventListener('touchmove', function(e) {

        f_move = e.targetTouches[0].pageX - finger_x;
        // 盒子原来位置 + 手指移动距离
        var translateX = -focusWidth * index + f_move;

        ul.style.transform = 'translateX(' + translateX + 'px)';
        flag = true;
        e.preventDefault();



    })

    // 滑动结束
    ul.addEventListener('touchend', function(e) {
        if (flag) {
            // 滑动距离大于50，到下一张
            if (Math.abs(f_move) >= 50) {
                if (f_move > 0) {
                    // 大于0，向左移动一张图片
                    index--;

                } else {
                    // 小于0向右移动
                    index++;

                }
                translateX = -focusWidth * index
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translateX + 'px)';


            } else {
                // 移动距离小于50，回弹回原来位置
                translateX = -focusWidth * index
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translateX + 'px)';
            }

        }


        // 重新开启定时器
        clearInterval(timer);
        timer = setInterval(function() {
            index++
            translateX = -focusWidth * index
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translateX + 'px)';
        }, 2000)

    })

    // 返回顶部
    var local_nav = document.querySelector('.local-nav')
    var goback = document.querySelector('.goback')
    var local_nav_top = local_nav.offsetTop;
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= local_nav_top) {
            goback.style.display = 'block';

        } else {
            goback.style.display = 'none';
        }

    })

    goback.addEventListener('click', function() {

        animation(window, 0);
    })

    function animation(obj, target, callback) {
        clearInterval(obj.timer)


        obj.timer = setInterval(function() {
            if (obj.pageYOffset == target) {
                clearInterval(obj.timer);
                console.log('over')
                if (callback) {
                    callback();
                }
            }
            var step = (target - obj.pageYOffset) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step);


            // obj.style.left = obj.pageYOffset + step + 'px';
            window.scroll(0, obj.pageYOffset + step)
        }, 30)

    }



})