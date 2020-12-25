window.onload = function() {
    var preview_img = document.querySelector('.preview_img')
    var mask = document.querySelector('.mask');
    var bigImg = document.querySelector('.bigImg');
    var bigPic = bigImg.querySelector('img')

    preview_img.addEventListener('mousemove', function(e) {
        mask.style.display = 'block';
        bigImg.style.display = 'block';
        var maskX = (e.pageX - preview_img.offsetLeft) - mask.offsetWidth / 2;
        var maskY = (e.pageY - preview_img.offsetTop) - mask.offsetHeight / 2;

        var mask_max_x = preview_img.offsetWidth - mask.offsetWidth;
        var mask_max_y = preview_img.offsetHeight - mask.offsetHeight;

        if (maskX >= '100') {
            maskX = 100;
        } else if (maskX <= 0) {
            maskX = 0;

        };
        if (maskY >= mask_max_y) {
            maskY = mask_max_y;
        } else if (maskY <= 0) {
            maskY = 0;
        };

        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

        var big_max = bigPic.offsetWidth - bigImg.offsetWidth;

        bigPic.style.left = -(maskX * big_max / mask_max_x) + 'px';
        bigPic.style.top = -(maskY * big_max / mask_max_x) + 'px';


    })

    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        bigImg.style.display = 'none';
    })



}