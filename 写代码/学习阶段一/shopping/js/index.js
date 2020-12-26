window.onload = function() {
    var focus = document.querySelector('.main .focus');
    var arrow_left = focus.querySelector('.arrow_left');
    var arrow_right = focus.querySelector('.arrow_right');
    var ol = focus.querySelector('ol')
    var ul = focus.querySelector('ul');

    var focusWidth = focus.clientWidth;

    focus.addEventListener('mouseenter', function() {
        arrow_left.style.display = 'block';
        arrow_right.style.display = 'block';
        ol.style.display = 'block';

        // 停止定时播放
        clearInterval(timer);

    })

    focus.addEventListener('mouseleave', function() {
        arrow_left.style.display = 'none';
        arrow_right.style.display = 'none';
        ol.style.display = 'none';
        timer = setInterval(function() { arrow_right.click() }, 3000)

    })

    // 动态建立小圆圈
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('index', i)
        ol.appendChild(li)
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            };
            this.className = 'current';
            var index = this.getAttribute('index');

            num = current_li = index;

            animation(ul, -index * focusWidth);
        })
    };
    // 第一个小圈圈白色
    ol.children[0].className = 'current';

    // 复制第一张图片到最后
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    var num = 0;
    var current_li = 0;
    // 节流阀
    var flag = true;
    // 右侧按钮
    arrow_right.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;


            }
            num++;
            animation(ul, -num * focusWidth, function() {
                flag = true;
            })

            current_li++;
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            };
            if (current_li == ol.children.length) {
                current_li = 0;
            }
            ol.children[current_li].className = 'current';

        }




    })

    // 左侧按钮
    arrow_left.addEventListener('click', function() {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + 'px';



        }
        num--;
        animation(ul, -num * focusWidth)

        current_li--;
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        };
        if (current_li < 0) {
            current_li = ol.children.length - 1;
        }
        ol.children[current_li].className = 'current';




    })

    // 定时播放
    var timer = setInterval(function() {
        arrow_right.click();
    }, 3000)


}